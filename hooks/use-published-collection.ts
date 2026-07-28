"use client"

import { useEffect, useState } from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { firestore, isFirebaseConfigured } from "@/lib/firebase"

export type FirestoreContent<T> = T & { id: string }

export function usePublishedCollection<T>(collectionName: string) {
  const [items, setItems] = useState<FirestoreContent<T>[]>([])
  const [loading, setLoading] = useState(isFirebaseConfigured)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!firestore) {
      setLoading(false)
      return
    }

    const contentQuery = query(
      collection(firestore, collectionName),
      where("published", "==", true)
    )

    return onSnapshot(
      contentQuery,
      (snapshot) => {
        setItems(snapshot.docs.map((entry) => ({ ...entry.data(), id: entry.id } as FirestoreContent<T>)))
        setLoading(false)
      },
      () => {
        setError("Le contenu ne peut pas être chargé pour le moment.")
        setLoading(false)
      }
    )
  }, [collectionName])

  return { items, loading, error }
}
