"use client"

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { FirebaseError } from "firebase/app"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import { FileText, FolderKanban, ImageIcon, LoaderCircle, LogOut, Quote, Sparkles, Trash2, Upload, Users } from "lucide-react"
import { firebaseAuth, firestore, isFirebaseConfigured } from "@/lib/firebase"

type ContentType = "journalArticles" | "experiences" | "projects" | "testimonials" | "clients"
type ContentItem = { id: string; title?: string; subtitle?: string; category?: string; imageUrl?: string; published?: boolean }
type JsonRecord = Record<string, unknown>

const tabs: { id: ContentType; label: string; singular: string; icon: typeof FileText }[] = [
  { id: "journalArticles", label: "Articles", singular: "article", icon: FileText },
  { id: "experiences", label: "Expériences", singular: "expérience", icon: Sparkles },
  { id: "projects", label: "Projets", singular: "projet", icon: FolderKanban },
  { id: "testimonials", label: "Témoignages", singular: "témoignage", icon: Quote },
  { id: "clients", label: "Clients", singular: "client", icon: Users },
]

export function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState<ContentType>("journalArticles")
  const [items, setItems] = useState<ContentItem[]>([])
  const [upload, setUpload] = useState<JsonRecord[]>([])
  const [fileName, setFileName] = useState("")
  const [saving, setSaving] = useState(false)

  const activeDefinition = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab]
  )

  useEffect(() => {
    if (!firebaseAuth || !firestore) {
      setLoading(false)
      return
    }
    const auth = firebaseAuth
    const db = firestore

    return onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      setIsAdmin(false)
      if (currentUser) {
        try {
          const adminAccess = await getDoc(doc(db, "admins", currentUser.uid))
          setIsAdmin(adminAccess.exists())
        } catch {
          setError("Firestore refuse l'accès au document administrateur. Vérifie que les règles sont publiées.")
        }
      }
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!firestore || !isAdmin) return

    const contentQuery = query(collection(firestore, activeTab), orderBy("updatedAt", "desc"))
    return onSnapshot(contentQuery, (snapshot) => {
      setItems(snapshot.docs.map((entry) => ({ ...entry.data(), id: entry.id } as ContentItem)))
    })
  }, [activeTab, isAdmin])

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!firebaseAuth) return
    setError("")
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (caughtError) {
      if (caughtError instanceof FirebaseError) {
        const messages: Record<string, string> = {
          "auth/invalid-credential": "Email ou mot de passe incorrect.",
          "auth/user-not-found": "Aucun compte Firebase ne correspond à cet email.",
          "auth/wrong-password": "Mot de passe incorrect.",
          "auth/operation-not-allowed": "La connexion Email/Mot de passe n’est pas activée dans Firebase Authentication.",
          "auth/invalid-api-key": "Les clés Firebase dans .env.local sont invalides ou incomplètes.",
        }
        setError(messages[caughtError.code] ?? `Connexion Firebase refusée : ${caughtError.code}`)
      } else {
        setError("Connexion Firebase impossible. Vérifie ta configuration.")
      }
    }
  }

  async function loadJsonFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    setError("")
    setUpload([])
    setFileName("")
    if (!file) return

    try {
      const parsed: unknown = JSON.parse(await file.text())
      const records = Array.isArray(parsed) ? parsed : [parsed]
      if (!records.length || records.some((record) => !record || Array.isArray(record) || typeof record !== "object")) {
        throw new Error()
      }
      setUpload(records as JsonRecord[])
      setFileName(file.name)
    } catch {
      setError("Ce fichier n’est pas un JSON valide. Utilise un objet JSON ou une liste d’objets JSON.")
    }
  }

  async function saveJson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!firestore || !user || !upload.length) return
    const db = firestore
    setSaving(true)
    try {
      await Promise.all(upload.map((record) => {
        const { id: _id, ...content } = record
        return addDoc(collection(db, activeTab), {
          ...content,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          updatedBy: user.uid,
        })
      }))
      setUpload([])
      setFileName("")
    } finally {
      setSaving(false)
    }
  }

  async function removeItem(item: ContentItem) {
    if (!firestore || !confirm(`Supprimer « ${item.title ?? item.id} » ?`)) return
    await deleteDoc(doc(firestore, activeTab, item.id))
  }

  if (!isFirebaseConfigured) {
    return <SetupNotice />
  }

  if (loading) {
    return <div className="flex min-h-[70vh] items-center justify-center"><LoaderCircle className="animate-spin text-primary" /></div>
  }

  if (!user) {
    return (
      <section className="mx-auto flex min-h-[80vh] max-w-md items-center px-6 py-32">
        <form onSubmit={handleLogin} className="w-full rounded-3xl border border-border bg-card p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Ecopnous · Administration</p>
          <h1 className="mt-4 text-3xl font-bold">Connexion sécurisée</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Accède à ton espace de publication avec ton compte Firebase.</p>
          <label className="mt-8 block text-sm font-medium">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" /></label>
          <label className="mt-5 block text-sm font-medium">Mot de passe<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" /></label>
          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
          <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground">Se connecter</button>
        </form>
      </section>
    )
  }

  if (!isAdmin) {
    return <section className="mx-auto flex min-h-[70vh] max-w-xl items-center px-6 text-center"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Accès refusé</p><h1 className="mt-4 text-3xl font-bold">{error || "Ce compte n'est pas administrateur."}</h1><p className="mt-4 text-muted-foreground">Ajoute son UID à la collection <code className="rounded bg-secondary px-1.5 py-0.5">admins</code> dans Firestore, puis reconnecte-toi.</p><button onClick={() => firebaseAuth && signOut(firebaseAuth)} className="mt-7 text-sm font-semibold text-primary">Se déconnecter</button></div></section>
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Espace administrateur</p><h1 className="mt-3 text-4xl font-bold">Publier & organiser</h1><p className="mt-3 text-muted-foreground">Connecté : {user.email}</p></div>
        <button onClick={() => firebaseAuth && signOut(firebaseAuth)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><LogOut size={16} /> Déconnexion</button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <nav className="flex gap-2 overflow-x-auto lg:flex-col">
          {tabs.map((tab) => { const Icon = tab.icon; return <button key={tab.id} onClick={() => { setActiveTab(tab.id); setUpload([]); setFileName(""); setError("") }} className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"}`}><Icon size={17} /> {tab.label}</button> })}
        </nav>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_23rem]">
          <div className="rounded-2xl border border-border bg-card">
            <div className="border-b border-border p-6"><h2 className="text-xl font-bold">{activeDefinition.label}</h2><p className="mt-1 text-sm text-muted-foreground">{items.length} élément{items.length !== 1 ? "s" : ""}</p></div>
            <div className="divide-y divide-border">
              {items.length ? items.map((item) => <div key={item.id} className="flex items-center gap-4 p-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary">{item.imageUrl ? <img src={item.imageUrl} alt="" className="h-full w-full object-cover" /> : <ImageIcon size={18} className="text-muted-foreground" />}</div><div className="min-w-0 flex-1"><p className="truncate font-semibold">{item.title ?? "Document JSON sans titre"}</p><p className="mt-1 truncate text-sm text-muted-foreground">{item.category || item.subtitle || item.id}</p></div><span className={`hidden rounded-full px-2 py-1 text-xs sm:block ${item.published ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`}>{item.published ? "Publié" : "Brouillon"}</span><button onClick={() => removeItem(item)} className="text-muted-foreground hover:text-destructive" aria-label={`Supprimer ${item.title ?? item.id}`}><Trash2 size={16} /></button></div>) : <p className="p-10 text-center text-sm text-muted-foreground">Aucun contenu. Importe un fichier JSON pour ajouter des {activeDefinition.label.toLowerCase()}.</p>}
            </div>
          </div>

          <form onSubmit={saveJson} className="h-fit rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary">Import JSON</p><h2 className="mt-2 text-xl font-bold">Ajouter des {activeDefinition.label.toLowerCase()}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Charge un objet JSON pour un élément, ou une liste JSON pour en enregistrer plusieurs. Les liens d&apos;images doivent utiliser la clé <code>imageUrl</code>.</p>
            <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-background px-4 py-8 text-center transition-colors hover:border-primary"><Upload size={22} className="text-primary" /><span className="mt-3 text-sm font-semibold">Sélectionner un fichier JSON</span><span className="mt-1 text-xs text-muted-foreground">.json uniquement</span><input type="file" accept="application/json,.json" onChange={loadJsonFile} className="sr-only" /></label>
            {fileName && <p className="mt-4 rounded-lg bg-secondary px-3 py-2 text-sm">{fileName} · {upload.length} élément{upload.length !== 1 ? "s" : ""} prêt{upload.length !== 1 ? "s" : ""}</p>}
            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
            <button disabled={saving || !upload.length} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"><Upload size={16} /> {saving ? "Importation…" : `Enregistrer ${upload.length || ""} élément${upload.length > 1 ? "s" : ""}`}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function SetupNotice() {
  return <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center px-6"><div className="rounded-3xl border border-border bg-card p-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Configuration requise</p><h1 className="mt-4 text-3xl font-bold">Firebase n&apos;est pas encore configuré.</h1><p className="mt-4 leading-relaxed text-muted-foreground">Copie <code className="rounded bg-secondary px-1.5 py-0.5">.env.local.example</code> vers <code className="rounded bg-secondary px-1.5 py-0.5">.env.local</code>, puis renseigne les identifiants Web de ton projet Firebase.</p><p className="mt-4 text-sm text-muted-foreground">Active ensuite Email/Mot de passe dans Authentication et Firestore Database.</p></div></section>
}
