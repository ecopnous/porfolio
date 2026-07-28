import {
  Wallet,
  Building2,
  Package,
  MessageSquare,
  Activity,
  type LucideIcon,
  GraduationCap,
} from "lucide-react"

export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  slug: string
  icon: LucideIcon
  category: "Fintech" | "Real Estate" | "SaaS" | "ERP" | "AI" | "IoT"
  title: string
  tagline: string
  description: string
  thumbnail: string
  bannerImage: string
  tech: string[]
  color: string
  bgColor: string
  rating: number
  reviewCount: number
  platform: string
  version: string
  deploymentType: string
  lastUpdate: string
  featured: boolean
  createdAt: string
  /** YouTube video ID or full URL (watch, youtu.be, embed, shorts). */
  youtubeVideoId?: string
  screenshots: string[]
  overview: {
    description: string
    businessContext: string
    targetUsers: string
  }
  problem: string
  solution: {
    strategy: string
    technicalApproach: string
  }
  architecture: {
    backend: string
    database: string
    scalability: string
    systemDesign: string
  }
  features: ProjectFeature[]
  results: {
    impact: string
    performance: string
    business: string
  }
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "irb-hemophilie-his",
    icon: Activity,
    category: "SaaS",
    title: "IRB Hemophilia — Hospital Information System",
    tagline: "Unified clinical platform for hemophilia patient care",
    description:
      "A complete hospital information system for hemophilia care: medical records, consultations, laboratory, imaging, pharmacy, billing, and clinical messaging — with multi-hospital support.",
    thumbnail: "https://i.ibb.co/QvjQmv89/1.png",
    bannerImage: "https://i.ibb.co/bTybgbf/2.png",
    tech: [
      "Laravel 13",
      "Livewire 4 / Volt",
      "Flux UI",
      "Tailwind CSS 4",
      "MySQL",
      "Redis",
      "PowerGrid",
      "DomPDF",
      "Maatwebsite Excel",
      "Google Gemini AI",
    ],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    rating: 4.9,
    reviewCount: 0,
    platform: "Web Application",
    version: "1.0.0",
    deploymentType: "On-premise / Cloud",
    lastUpdate: "June 2026",
    featured: true,
    createdAt: "2025-04-01",
    youtubeVideoId: "",
    screenshots: [
      "/images/projects/irb-hemophilie.jpg",
      "/images/projects/irb-hemophilie-2.jpg",
      "/images/projects/irb-hemophilie-3.jpg",
    ],
    overview: {
      description:
        "IRB Hemophilia is a full-stack hospital platform built to digitize the care pathway for patients with hemophilia. It centralizes the patient record, consultations, laboratory, imaging, pharmacy, hospitalization, billing, and clinical coordination in a single web interface — with multi-facility support and end-to-end clinical traceability.",
      businessContext:
        "Hemophilia reference centers manage long, complex care journeys: rich medical histories, recurring lab work, imaging, prescriptions, hospitalizations, and cross-service coordination. Paper workflows and generic HIS tools fragment information. IRB Hemophilia fills that gap with a specialty-focused medical record, clinical workflows, and a longitudinal patient view.",
      targetUsers:
        "Physicians, nurses, laboratory technicians, radiologists, pharmacists, reception staff, billing teams, and administrators of hospitals or hospital groups specializing in hemophilia care.",
    },
    problem:
      "Clinical teams relied on scattered data across paper registers, spreadsheets, and non-specialized software. This caused consultation delays, loss of external medical history, unreliable billing, and weak coordination between lab, imaging, and pharmacy — critical risks for a chronic condition like hemophilia.",
    solution: {
      strategy:
        "Build a real-time Livewire web application centered on the patient journey — from medical record to billing — with multi-hospital isolation, bulk imports, external document archiving, and decision-support tools (clinical evolution dashboards + AI analysis).",
      technicalApproach:
        "Laravel 13 backend with Livewire 4 / Volt for interactive UX without a heavy SPA. Flux UI and Tailwind for a clear hospital interface. PowerGrid for operational data tables. Queues for large Excel imports. DomPDF for orders and patient dossiers. Google Gemini for longitudinal patient analysis. Secure storage for attachments and external archives.",
    },
    architecture: {
      backend:
        "Modular Laravel 13 monolith (patients, consultations, lab, imaging, pharmacy, hospitalization, billing, messaging). Livewire Volt screens, dedicated domain services (messaging, evolution, analytics), and asynchronous import jobs.",
      database:
        "Relational MySQL covering patient dossiers, consultations, clinical acts, laboratories, imaging studies, prescriptions, inventory, financial documents, and clinical messages. Multi-facility isolation via hopital_id scoping.",
      scalability:
        "Async processing of bulk imports through Laravel queues. Hospital/session caching. Ready for multi-instance deployment behind a reverse proxy, with files on local disk or object storage.",
      systemDesign:
        "Lightweight multi-tenant model (current hospital in session). Patient profile as the central hub. Clinical modules connected through consultations and acts. Internal clinical messaging plus patient notifications. External archives for off-platform documents. Analytics and longitudinal evolution for clinical follow-up.",
    },
    features: [
      { title: "Hemophilia Patient Record", description: "Enriched medical chart: identity, history, first signs, allergies, family and personal background" },
      { title: "Consultations & Triage", description: "Consultation intake, triage, clinical acts, history, and service-level follow-up" },
      { title: "Laboratory", description: "Exam orders, specimen collection, result entry, validation, lab stock, and reports" },
      { title: "Medical Imaging", description: "Imaging exam workflows, image uploads, and printable order forms" },
      { title: "Hospital Pharmacy", description: "Medicines, stock, movements, prescriptions, and depreciations" },
      { title: "Hospitalization", description: "Admission desk, unit configuration, and hospitalization-linked billing" },
      { title: "Billing & Insurance", description: "Invoices, payments, cash desk, tariffs, inventory, financial documents, and insurance billing" },
      { title: "Clinical Messaging", description: "Internal coordination, attachments, templates, folders (inbox/archives), and patient notifications" },
      { title: "Patient Evolution + AI", description: "Longitudinal dashboards (KPIs, charts) and deep analysis powered by Google Gemini" },
      { title: "External Archives", description: "Document vault for PDFs and images from other hospitals or information systems" },
      { title: "Multi-Hospital Support", description: "Hospital groups, facility switching, and data isolation by hopital_id" },
      { title: "Imports & Exports", description: "Async Excel/CSV import for patients and consultations, plus PDF/Excel analytics exports" },
    ],
    results: {
      impact:
        "End-to-end digitization of the hemophilia care pathway: one shared record for clinic, lab, imaging, pharmacy, and billing — with preserved external history.",
      performance:
        "Responsive Livewire UI, background processing for heavy imports, PDF generation for dossiers/orders, analytics dashboards, and patient evolution charts.",
      business:
        "Fewer information gaps between services, stronger clinical and financial traceability, and faster coordination and reporting for specialized care centers.",
    },
    gallery: [
      "https://i.ibb.co/DHGVMmTk/380shots-so.png",
      "https://i.ibb.co/9HN0mP8R/21shots-so.png",
      "https://i.ibb.co/MDZRd6pF/362shots-so.png",
      "https://i.ibb.co/M5t9rgxC/407shots-so.png",
      "https://i.ibb.co/G4yvtKdM/474shots-so.png",
      "https://i.ibb.co/k6zmgmrF/512shots-so.png",
      "https://i.ibb.co/JWT0KtYw/186shots-so.png",
      "https://i.ibb.co/yzS4ZHh/857shots-so.png",
      "https://i.ibb.co/RkDymTf7/529shots-so.png",
      "https://i.ibb.co/DfmF6CnL/632shots-so.png",
    ],
  },
  {
    slug: "ischool-issi",
    icon: GraduationCap,
    category: "SaaS",
    title: "ischool — ISSI School Finance",
    tagline: "Student administration and school finance for a higher nursing institute",
    description:
      "Web platform for student records, minerval collection by installment, dual-currency treasury, PDF receipts with QR verification, and role-based staff access.",
    thumbnail: "https://i.ibb.co/93dXhDgG/68shots-so.png",
    bannerImage: "https://i.ibb.co/93dXhDgG/68shots-so.png",
    tech: [
      "Laravel 13",
      "Livewire 4",
      "Flux UI",
      "Tailwind CSS 4",
      "PostgreSQL / MySQL",
      "DomPDF",
      "Spatie Permission",
      "Fortify",
      "Vite",
    ],
    color: "text-[#83151E]",
    bgColor: "bg-[#83151E]/10",
    rating: 4.7,
    reviewCount: 0,
    platform: "Web Application",
    version: "1.0.0",
    deploymentType: "Self-hosted / VPS",
    lastUpdate: "July 2026",
    featured: true,
    createdAt: "2026-01-15",
    youtubeVideoId: "",
    screenshots: [
      "/images/projects/ischool-issi.jpg",
      "/images/projects/ischool-issi-2.jpg",
      "/images/projects/ischool-issi-3.jpg",
    ],
    overview: {
      description:
        "ischool is an internal school management and finance platform built for the Institut Supérieur en Sciences Infirmières (ISSI). It centralizes student records, academic structure (years, promotions, classes), tuition (minerval) collected by installments, treasury accounts, expense vouchers, and printable PDF receipts — including a public QR portal so students can verify minerval payments with their matricule.",
      businessContext:
        "Higher education institutes in the DRC often run finance operations with spreadsheets, paper receipts, and fragmented tools. Cashiers need dual-currency (USD/CDF) handling, installment tracking for minerval, audit trails, and professional receipts. Academic staff need student files, promotion passage, and scholarship flags without switching systems.",
      targetUsers:
        "Cashiers and finance officers, school administrators, academic secretaries, and — via a limited public portal — students verifying their minerval receipts. Access is role-based (from standard user to super-admin).",
    },
    problem:
      "Tuition collection, treasury movements, and student administration were scattered across manual processes. Staff needed a single French-language web app to register payments by nature (minerval, concours, diplôme, kits infirmiers, stages, projects…), print dual-copy A5 receipts, track remaining minerval balances, manage advances and treasury accounts, and export financial reports — with clear permissions and an auditable transaction history.",
    solution: {
      strategy:
        "We delivered a mobile-responsive Livewire web app (not a native mobile client) so cashiers and admins can work from the browser. Finance logic lives in dedicated domain services (transactions, receipts, balances, treasury, advances) rather than fat controllers. Receipts are generated as DomPDF documents (admin + student copies, portrait A5) and can be reprinted with custom signature labels.",
      technicalApproach:
        "Laravel 13 + Livewire 4 + Flux UI power the interactive admin UI. Fortify handles authentication (including 2FA and passkeys). Spatie Permission enforces fine-grained abilities (students, payments, treasury, reports, users). DomPDF stores receipt PDFs on disk; Bacon QR codes link to a tokenized public portal gated by student matricule. Dual-currency amounts convert to USD via exchange rates for consistent balances and reports.",
    },
    architecture: {
      backend:
        "Laravel service layer (ReceiptService, TransactionRegistrar, StudentBalanceService, TreasuryService, AdvanceService, ReportExportService) with Livewire pages for dashboards, students, payments, advances, treasury, accounting, reports, and school settings.",
      database:
        "Relational schema for students, academic years, promotions, classes, tranches, payment natures, financial transactions, receipts, advances, treasury accounts/movements, and promotion passages. Soft deletes on students; activity logging on financial operations.",
      scalability:
        "Modular monolith suited to a single-institution deployment. Queue-ready Laravel setup for async work; printable PDFs stored per academic year. Role-based authorization keeps sensitive finance actions scoped to cashiers and admins.",
      systemDesign:
        "Posted income/expense ledger with receipt issuance on successful payments. Minerval balances computed from due amounts vs paid installments. Public read-only portal unlocked by receipt token + matricule. PDF reprint regenerates the document when signatures or data change.",
    },
    features: [
      {
        title: "Student Management",
        description:
          "Student files with matricule generation, scholarship status, class/promotion, and minerval due amounts",
      },
      {
        title: "Minerval by Installments",
        description:
          "Tuition collection by tranche with live remaining balance (solde avant / payé / reste dû) on receipts",
      },
      {
        title: "Dual-Currency Finance",
        description:
          "USD and CDF payments with exchange-rate conversion to USD for balances and reporting",
      },
      {
        title: "PDF Receipts (A5 Portrait)",
        description:
          "Professional DomPDF receipts with admin + student copies, customizable signature labels, and reprint",
      },
      {
        title: "QR Verification Portal",
        description:
          "Public minerval receipt portal unlocked by QR token and student matricule",
      },
      {
        title: "Treasury & Advances",
        description:
          "Treasury accounts, cash movements, and salary/project advances with repayments",
      },
      {
        title: "Payment Natures Catalog",
        description:
          "Configurable natures: minerval, concours, diplôme, kits, stages, projects, and payroll charges",
      },
      {
        title: "Roles, 2FA & Audit",
        description:
          "Spatie permissions, Fortify 2FA/passkeys, and activity logs on financial transactions",
      },
      {
        title: "Reports & Analytics",
        description:
          "Dashboard charts plus CSV/PDF financial and operational exports",
      },
      {
        title: "Promotion Passage",
        description:
          "Academic year progression workflow for moving students between promotions",
      },
    ],
    results: {
      impact:
        "Gives ISSI a single operational system for student records, cashiers, and finance instead of paper/spreadsheet workflows — from payment capture to printable dual-copy receipts and student self-verification.",
      performance:
        "Server-rendered Livewire UI with DomPDF receipt generation stored on disk for fast reprint. Portrait A5 dual-page receipts (admin + student) ready for immediate print.",
      business:
        "Clearer minerval tracking by installment, dual-currency consistency in USD, stronger cash-desk accountability via roles and activity logs, and fewer disputes thanks to QR-verifiable receipts.",
    },
    gallery: [
      "https://i.ibb.co/2Vtcp8v/197shots-so.png",
      "https://i.ibb.co/Y7K4CLsz/791shots-so.png",
      "https://i.ibb.co/C5Njky7Z/375shots-so.png",
      "https://i.ibb.co/3LB3nXB/936shots-so.png",
      "https://i.ibb.co/dJ0861FX/309shots-so.png",
      "https://i.ibb.co/zVj2Hnc8/905shots-so.png",
      "https://i.ibb.co/V0YkkC3n/602shots-so.png",
      "https://i.ibb.co/qFNH5hwR/618shots-so.png",
      "https://i.ibb.co/xqW08zJ1/696shots-so.png",
      // "https://ibb.co/CC7VSJb"
    ],
  },
  {
    slug: "bookkeeping-mobile-app",
    icon: Wallet,
    category: "Fintech",
    title: "Bookkeeping Mobile App",
    tagline: "Cross-platform financial management for modern businesses",
    description:
      "Cross-platform financial management with real-time sync, automated categorization, and bank-grade security.",
    thumbnail: "/images/projects/bookkeeping-app.jpg",
    bannerImage: "/images/projects/bookkeeping-app.jpg",
    tech: ["Flutter", "Laravel", "PostgreSQL", "Redis", "AWS", "Stripe API"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    rating: 4.8,
    reviewCount: 2340,
    platform: "iOS / Android",
    version: "3.2.1",
    deploymentType: "Cloud (AWS)",
    lastUpdate: "January 2026",
    featured: true,
    createdAt: "2025-03-15",
    youtubeVideoId: "https://www.youtube.com/watch?v=DF3XjEhJ40Y&list=RDMMDF3XjEhJ40Y&start_radio=1",
    screenshots: [
      "/images/projects/bookkeeping-app.jpg",
      "/images/projects/bookkeeping-app-2.jpg",
      "/images/projects/bookkeeping-app-3.jpg",
    ],
    overview: {
      description:
        "A comprehensive mobile-first bookkeeping platform designed for small and medium businesses. The app provides real-time financial tracking, automated expense categorization using ML, and seamless bank integrations to give business owners a complete picture of their finances at a glance.",
      businessContext:
        "Small businesses often struggle with manual bookkeeping processes, leading to errors and lost revenue. Traditional accounting software is complex and desktop-bound. There was a clear market gap for a mobile-first, intuitive financial management solution that scales with business growth.",
      targetUsers:
        "Small and medium business owners, freelancers, startup founders, and finance teams looking for a modern, mobile-first bookkeeping solution with real-time insights.",
    },
    problem:
      "Existing bookkeeping solutions were either too complex for small businesses or too simplistic for scaling companies. Business owners needed a solution that could handle multi-currency transactions, automated reconciliation, and real-time financial reporting -- all from their mobile device with bank-grade security.",
    solution: {
      strategy:
        "We adopted a mobile-first approach with Flutter for cross-platform delivery, ensuring a native-quality experience on both iOS and Android. The architecture was designed to handle real-time data sync across devices while maintaining offline-first capabilities for unreliable network conditions.",
      technicalApproach:
        "The backend was built with Laravel for rapid API development with robust validation, backed by PostgreSQL for ACID-compliant financial transactions. Redis handles session caching and real-time event broadcasting. Machine learning models categorize transactions automatically with 94% accuracy.",
    },
    architecture: {
      backend: "Laravel 11 RESTful API with queue workers for async processing, rate limiting, and comprehensive API versioning.",
      database: "PostgreSQL with read replicas for analytics queries. Partitioned tables for transaction history. Redis for caching and session management.",
      scalability: "Horizontal scaling via AWS ECS with auto-scaling groups. CDN distribution for static assets. Database connection pooling with PgBouncer.",
      systemDesign: "Event-driven architecture with Laravel queues. Webhook system for bank integrations. Microservice-ready modular monolith pattern.",
    },
    features: [
      { title: "Real-Time Sync", description: "Instant data synchronization across all devices with conflict resolution" },
      { title: "Auto-Categorization", description: "ML-powered transaction categorization with 94% accuracy" },
      { title: "Bank Integration", description: "Secure connection to 10,000+ financial institutions via Plaid" },
      { title: "Multi-Currency", description: "Support for 150+ currencies with real-time exchange rates" },
      { title: "Invoice Generation", description: "Professional invoice creation with payment tracking and reminders" },
      { title: "Financial Reports", description: "Automated P&L, balance sheets, and cash flow statements" },
      { title: "Offline Mode", description: "Full functionality without internet with automatic sync on reconnect" },
      { title: "Tax Preparation", description: "Automated tax calculations and export-ready financial summaries" },
    ],
    results: {
      impact: "Over 15,000 active users processing $2M+ in transactions monthly within the first year of launch.",
      performance: "99.9% uptime with sub-200ms API response times. App launch time under 1.5 seconds on mid-range devices.",
      business: "40% reduction in bookkeeping errors for users. 60% faster financial reporting compared to traditional tools.",
    },
    gallery: [
      "/images/projects/bookkeeping-app.jpg",
      "/images/projects/bookkeeping-app-2.jpg",
      "/images/projects/bookkeeping-app-3.jpg",
      "/images/projects/inventory-system.jpg",
      "/images/projects/ai-messaging.jpg",
      "/images/projects/property-platform.jpg",
    ],
  },
  {
    slug: "property-management-platform",
    icon: Building2,
    category: "Real Estate",
    title: "Property Management Platform",
    tagline: "End-to-end real estate management with listing intelligence",
    description:
      "End-to-end real estate management with listing intelligence, tenant portals, and automated lease workflows.",
    thumbnail: "/images/projects/property-platform.jpg",
    bannerImage: "/images/projects/property-platform.jpg",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "AWS", "Mapbox"],
    color: "text-[#48CAE4]",
    bgColor: "bg-[#48CAE4]/10",
    rating: 4.6,
    reviewCount: 1820,
    platform: "Web Application",
    version: "2.8.0",
    deploymentType: "Cloud (AWS)",
    lastUpdate: "December 2025",
    featured: true,
    createdAt: "2024-11-20",
    youtubeVideoId: "https://www.youtube.com/watch?v=gtgIlIXWEhI&list=RDgtgIlIXWEhI&start_radio=1",
    screenshots: [
      "/images/projects/property-platform.jpg",
      "/images/projects/property-platform-2.jpg",
      "/images/projects/property-platform-3.jpg",
    ],
    overview: {
      description:
        "A full-stack property management platform that streamlines every aspect of real estate operations -- from listing management and tenant screening to lease automation and maintenance tracking. Built to handle portfolios of any size with intelligent insights.",
      businessContext:
        "The real estate management industry relies heavily on fragmented tools and manual processes. Property managers juggle multiple platforms for listings, payments, maintenance, and communications. A unified platform reduces operational overhead and improves tenant satisfaction.",
      targetUsers:
        "Property management companies, real estate agencies, landlords with multiple properties, and commercial real estate firms needing a centralized management solution.",
    },
    problem:
      "Property managers were using 5-7 different tools to manage their portfolios, leading to data silos, missed maintenance requests, and inefficient communication with tenants. They needed a single platform that could handle the entire property lifecycle with real-time visibility across all properties.",
    solution: {
      strategy:
        "We built a unified platform with a React SPA for the management dashboard, a tenant portal for self-service operations, and a mobile-responsive interface for on-the-go management. GraphQL enables flexible data fetching for complex property relationship queries.",
      technicalApproach:
        "Node.js powers the backend with GraphQL for efficient data querying across complex property-tenant-lease relationships. MongoDB was chosen for its flexible schema to accommodate diverse property types. Mapbox integration provides interactive property mapping and geospatial search.",
    },
    architecture: {
      backend: "Node.js with Express and Apollo GraphQL server. Worker processes for automated lease reminders and payment processing.",
      database: "MongoDB with aggregation pipelines for analytics. Indexed geospatial queries for property search. Document-level change streams for real-time updates.",
      scalability: "Containerized deployment on AWS ECS. MongoDB Atlas for managed database scaling. CloudFront CDN for media asset delivery.",
      systemDesign: "Event-sourced lease management for audit trails. CQRS pattern for separating read/write operations on high-traffic endpoints.",
    },
    features: [
      { title: "Smart Listings", description: "AI-optimized property listings with automatic photo enhancement" },
      { title: "Tenant Portal", description: "Self-service portal for rent payments, maintenance requests, and documents" },
      { title: "Lease Automation", description: "Digital lease signing with automated renewal workflows" },
      { title: "Maintenance Tracking", description: "Priority-based maintenance ticketing with vendor assignment" },
      { title: "Financial Dashboard", description: "Real-time revenue tracking, expense management, and ROI analysis" },
      { title: "Geospatial Search", description: "Interactive map-based property search with neighborhood analytics" },
      { title: "Document Vault", description: "Secure cloud storage for leases, inspections, and legal documents" },
      { title: "Communication Hub", description: "Integrated messaging with tenants, vendors, and property owners" },
    ],
    results: {
      impact: "Managing 2,500+ properties across 3 cities with a 98% tenant satisfaction score.",
      performance: "GraphQL response times averaging 120ms. 99.95% platform availability. Real-time updates within 500ms.",
      business: "35% reduction in vacancy rates. 50% faster maintenance resolution. 70% reduction in administrative overhead.",
    },
    gallery: [
      "/images/projects/property-platform.jpg",
      "/images/projects/property-platform-2.jpg",
      "/images/projects/property-platform-3.jpg",
      "/images/projects/building-monitoring.jpg",
      "/images/projects/bookkeeping-app.jpg",
    ],
  },
  {
    slug: "inventory-management-system",
    icon: Package,
    category: "SaaS",
    title: "Inventory Management System",
    tagline: "Enterprise-grade inventory tracking with predictive analytics",
    description:
      "Enterprise-grade inventory tracking with predictive analytics, multi-warehouse support, and supply chain optimization.",
    thumbnail: "/images/projects/inventory-system.jpg",
    bannerImage: "/images/projects/inventory-system.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker", "ElasticSearch"],
    color: "text-[#00B4D8]",
    bgColor: "bg-[#00B4D8]/10",
    rating: 4.7,
    reviewCount: 3150,
    platform: "Web Application",
    version: "4.1.2",
    deploymentType: "Self-Hosted / Cloud",
    lastUpdate: "February 2026",
    featured: false,
    createdAt: "2025-06-10",
    youtubeVideoId: "zQnBQ4tB3ZA",
    screenshots: [
      "/images/projects/inventory-system.jpg",
      "/images/projects/inventory-system-2.jpg",
      "/images/projects/inventory-system-3.jpg",
    ],
    overview: {
      description:
        "An enterprise SaaS platform for inventory and warehouse management that combines real-time stock tracking with predictive analytics. The system handles multi-warehouse operations, automated reordering, and supply chain visibility for businesses of all sizes.",
      businessContext:
        "Businesses lose an estimated 8% of revenue annually due to inventory mismanagement. Legacy inventory systems lack real-time visibility and predictive capabilities. Modern supply chains demand intelligent, automated inventory management that can prevent stockouts and reduce carrying costs.",
      targetUsers:
        "E-commerce businesses, retail chains, manufacturing companies, and wholesale distributors needing real-time inventory visibility across multiple warehouses.",
    },
    problem:
      "Enterprises were struggling with inventory accuracy below 70%, leading to frequent stockouts and overstock situations. The lack of real-time visibility across warehouses made demand forecasting impossible, and manual reordering processes caused 2-3 day delays in procurement.",
    solution: {
      strategy:
        "We developed a multi-tenant SaaS platform with Vue.js for a reactive dashboard experience and Laravel for a robust API layer. The system integrates ElasticSearch for lightning-fast product lookups across millions of SKUs and Redis for real-time inventory state management.",
      technicalApproach:
        "Laravel handles the core business logic with optimistic locking for concurrent inventory updates. MySQL with sharding manages the transaction-heavy workload. Predictive analytics models run as background jobs, processing historical data to forecast demand and trigger automated reorder points.",
    },
    architecture: {
      backend: "Laravel with Octane for high-performance PHP. Queue-based processing for stock calculations and report generation.",
      database: "MySQL with read replicas and table sharding for high-volume transaction processing. ElasticSearch for full-text product search across millions of SKUs.",
      scalability: "Docker Swarm orchestration with horizontal pod scaling. Redis cluster for distributed caching and real-time inventory counts.",
      systemDesign: "CQRS for separating inventory reads from writes. Event-driven stock level notifications. Saga pattern for multi-warehouse transfer operations.",
    },
    features: [
      { title: "Real-Time Tracking", description: "Live inventory counts across all warehouses with barcode/QR scanning" },
      { title: "Predictive Analytics", description: "AI-driven demand forecasting with automated reorder suggestions" },
      { title: "Multi-Warehouse", description: "Unified management of unlimited warehouses with inter-warehouse transfers" },
      { title: "Supply Chain View", description: "End-to-end supply chain visibility from supplier to customer delivery" },
      { title: "Batch Management", description: "Lot tracking, expiry management, and FIFO/LIFO stock rotation" },
      { title: "Custom Reports", description: "Drag-and-drop report builder with scheduled email distribution" },
      { title: "Barcode Scanner", description: "Mobile barcode and QR code scanning for rapid stock operations" },
      { title: "Supplier Portal", description: "Vendor self-service portal for PO management and delivery tracking" },
    ],
    results: {
      impact: "Tracking 500,000+ SKUs across 50+ warehouses for enterprise clients in 5 countries.",
      performance: "Inventory accuracy improved to 99.2%. Sub-100ms search across millions of products. 99.99% uptime SLA met.",
      business: "30% reduction in carrying costs. 85% fewer stockout events. ROI achieved within 4 months of deployment.",
    },
    gallery: [
      "/images/projects/inventory-system.jpg",
      "/images/projects/inventory-system-2.jpg",
      "/images/projects/inventory-system-3.jpg",
      "/images/projects/ai-messaging-2.jpg",
      "/images/projects/property-platform-2.jpg",
      "/images/projects/building-monitoring-2.jpg",
      "/images/projects/bookkeeping-app-2.jpg",
    ],
  },
  {
    slug: "ai-messaging-chatbot-platform",
    icon: MessageSquare,
    category: "AI",
    title: "AI Messaging & Chatbot Platform",
    tagline: "Intelligent conversational platform with NLP-powered routing",
    description:
      "Intelligent conversational platform with NLP-powered routing, multi-channel support, and automated response generation.",
    thumbnail: "/images/projects/ai-messaging.jpg",
    bannerImage: "/images/projects/ai-messaging.jpg",
    tech: ["Python", "Node.js", "TensorFlow", "PostgreSQL", "RabbitMQ", "Docker"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    rating: 4.9,
    reviewCount: 4210,
    platform: "Web / API / SDK",
    version: "2.5.0",
    deploymentType: "Cloud (Multi-Region)",
    lastUpdate: "January 2026",
    featured: true,
    createdAt: "2025-01-08",
    youtubeVideoId: "aircAruvnKk",
    screenshots: [
      "/images/projects/ai-messaging.jpg",
      "/images/projects/ai-messaging-2.jpg",
      "/images/projects/ai-messaging-3.jpg",
    ],
    overview: {
      description:
        "An AI-powered messaging platform that enables businesses to deploy intelligent chatbots across multiple channels. The system uses NLP for intent recognition, automated response generation, and seamless human handoff when conversations require personal attention.",
      businessContext:
        "Customer service costs are rising while expectations for instant responses grow. 67% of consumers expect immediate assistance. Businesses need AI-powered solutions that can handle routine inquiries autonomously while escalating complex issues to human agents without friction.",
      targetUsers:
        "Customer-facing businesses, SaaS companies, e-commerce platforms, and enterprise support teams looking to scale their customer communication with AI assistance.",
    },
    problem:
      "Businesses were spending 60% of support resources on repetitive inquiries that could be automated. Existing chatbot solutions felt robotic and failed to understand context, leading to poor customer experiences. There was no seamless bridge between AI-handled and human-handled conversations.",
    solution: {
      strategy:
        "We built a hybrid AI-human platform where TensorFlow-based NLP models handle intent classification and response generation, while a sophisticated routing engine ensures smooth handoff to human agents when confidence scores drop below thresholds. Multi-channel support unifies conversations from web, WhatsApp, and social media.",
      technicalApproach:
        "Python powers the ML pipeline with TensorFlow for NLP models trained on domain-specific datasets. Node.js handles real-time WebSocket connections for live chat. RabbitMQ manages message queuing for reliable delivery across channels. PostgreSQL stores conversation history with vector extensions for semantic search.",
    },
    architecture: {
      backend: "Python FastAPI for ML inference endpoints. Node.js for real-time WebSocket server. Separate services communicate via RabbitMQ message queues.",
      database: "PostgreSQL with pgvector extension for semantic search across conversation history. TimescaleDB extension for time-series analytics on chat metrics.",
      scalability: "Docker containerization with Kubernetes orchestration. GPU-enabled inference nodes for ML models. Horizontal scaling of WebSocket servers with sticky sessions.",
      systemDesign: "Microservices architecture with API gateway. Event-driven message processing. Circuit breaker pattern for third-party channel integrations.",
    },
    features: [
      { title: "NLP Intent Recognition", description: "97% accuracy in understanding customer intent across 200+ categories" },
      { title: "Smart Routing", description: "Confidence-based routing with seamless AI-to-human handoff" },
      { title: "Multi-Channel", description: "Unified inbox for web chat, WhatsApp, Instagram, and email" },
      { title: "Auto-Response", description: "Context-aware automated responses with personalization tokens" },
      { title: "Analytics Dashboard", description: "Real-time conversation analytics with sentiment tracking" },
      { title: "Training Studio", description: "No-code interface for training and improving chatbot responses" },
      { title: "Webhook Engine", description: "Custom webhook actions triggered by specific intents or events" },
      { title: "A/B Testing", description: "Test different response strategies and measure conversion impact" },
    ],
    results: {
      impact: "Processing 100,000+ conversations monthly with 78% fully automated resolution rate.",
      performance: "Intent classification in under 50ms. WebSocket latency below 30ms. 99.9% message delivery rate.",
      business: "55% reduction in support costs. 3x improvement in first-response time. NPS score increased by 22 points.",
    },
    gallery: [
      "/images/projects/ai-messaging.jpg",
      "/images/projects/ai-messaging-2.jpg",
      "/images/projects/ai-messaging-3.jpg",
      "/images/projects/inventory-system.jpg",
      "/images/projects/bookkeeping-app-3.jpg",
    ],
  },
  {
    slug: "building-monitoring-system",
    icon: Activity,
    category: "IoT",
    title: "Building Monitoring System",
    tagline: "Real-time IoT sensor network for building management",
    description:
      "Real-time IoT sensor network for building management with predictive maintenance and energy optimization dashboards.",
    thumbnail: "/images/projects/building-monitoring.jpg",
    bannerImage: "/images/projects/building-monitoring.jpg",
    tech: ["Kotlin", "MQTT", "InfluxDB", "React", "Grafana", "Docker"],
    color: "text-[#48CAE4]",
    bgColor: "bg-[#48CAE4]/10",
    rating: 4.5,
    reviewCount: 980,
    platform: "Web / Edge Devices",
    version: "1.9.4",
    deploymentType: "Hybrid (Edge + Cloud)",
    lastUpdate: "November 2025",
    featured: false,
    createdAt: "2025-08-22",
    youtubeVideoId: "w7ejDZ8SWv8",
    screenshots: [
      "/images/projects/building-monitoring.jpg",
      "/images/projects/building-monitoring-2.jpg",
      "/images/projects/building-monitoring-3.jpg",
    ],
    overview: {
      description:
        "A comprehensive IoT platform for building monitoring that collects data from thousands of sensors to provide real-time visibility into building health, energy consumption, and environmental conditions. Predictive maintenance algorithms prevent equipment failures before they occur.",
      businessContext:
        "Commercial buildings waste 30% of energy due to inefficient monitoring. Reactive maintenance costs 3-9x more than preventive approaches. Building managers need real-time visibility into building systems to optimize operations, reduce costs, and improve occupant comfort.",
      targetUsers:
        "Building management companies, commercial property owners, facility managers, and smart building integrators looking for a comprehensive IoT monitoring solution.",
    },
    problem:
      "Building managers relied on periodic manual inspections and reactive maintenance, leading to equipment failures, energy waste, and tenant complaints. Existing BMS solutions were siloed, expensive, and lacked predictive capabilities. There was no unified view across HVAC, electrical, plumbing, and security systems.",
    solution: {
      strategy:
        "We built an IoT platform with Kotlin for the backend services handling high-throughput sensor data ingestion, MQTT for lightweight sensor communication, and InfluxDB for time-series data storage. React dashboards provide real-time visualization while ML models enable predictive maintenance.",
      technicalApproach:
        "Kotlin coroutines handle concurrent processing of thousands of sensor streams. MQTT broker manages lightweight pub/sub communication with edge devices. InfluxDB stores billions of time-series data points with automatic downsampling. Grafana-powered dashboards provide customizable real-time monitoring views.",
    },
    architecture: {
      backend: "Kotlin with Ktor framework for high-throughput API endpoints. Coroutine-based concurrent processing for sensor data streams.",
      database: "InfluxDB for time-series sensor data with retention policies. PostgreSQL for configuration and user management. Redis for real-time alert state.",
      scalability: "MQTT broker clustering for handling 100,000+ concurrent sensor connections. InfluxDB continuous queries for real-time aggregation. Edge computing for local sensor preprocessing.",
      systemDesign: "Lambda architecture combining batch and stream processing. Edge-to-cloud data pipeline with local buffering. Alert escalation system with configurable thresholds.",
    },
    features: [
      { title: "Real-Time Monitoring", description: "Live sensor data visualization across all building systems" },
      { title: "Predictive Maintenance", description: "ML-driven failure prediction with automated work order generation" },
      { title: "Energy Optimization", description: "Intelligent HVAC and lighting control reducing energy waste by 25%" },
      { title: "Alert Management", description: "Multi-tier alerting with escalation chains and acknowledgment tracking" },
      { title: "Floor Plan View", description: "Interactive 2D/3D floor plans with sensor overlay and heatmaps" },
      { title: "Compliance Reports", description: "Automated regulatory compliance reporting for building codes" },
      { title: "Edge Processing", description: "Local data preprocessing on edge devices for reduced latency" },
      { title: "Historical Analysis", description: "Deep time-series analysis with anomaly detection patterns" },
    ],
    results: {
      impact: "Monitoring 50+ buildings with 10,000+ sensors, processing 5M+ data points daily.",
      performance: "Sensor data ingestion latency under 100ms. Dashboard refresh rate of 1 second. 99.99% data capture rate.",
      business: "25% reduction in energy costs. 60% fewer emergency maintenance calls. ROI achieved within 8 months.",
    },
    gallery: [
      "/images/projects/building-monitoring.jpg",
      "/images/projects/building-monitoring-2.jpg",
      "/images/projects/building-monitoring-3.jpg",
      "/images/projects/property-platform-3.jpg",
      "/images/projects/inventory-system-3.jpg",
      "/images/projects/ai-messaging.jpg",
    ],
  },
]

export const categories = ["All", "Fintech", "SaaS", "Real Estate", "AI", "IoT"] as const

export type Category = (typeof categories)[number]

export type SortOption = "featured" | "recent" | "category"

/** Project payload safe to pass from Server → Client Components (no React components). */
export type ClientProject = Omit<Project, "icon">
export type PublicProject = ClientProject

export function toClientProject(project: Project): ClientProject {
  const { icon: _icon, ...rest } = project
  return rest
}

/**
 * Accepts a bare ID or any common YouTube URL and returns the 11-char video ID.
 * Examples:
 * - gtgIlIXWEhI
 * - https://www.youtube.com/watch?v=gtgIlIXWEhI&list=RDgtgIlIXWEhI&start_radio=1
 * - https://youtu.be/gtgIlIXWEhI
 * - watch?v=gtgIlIXWEhI&list=...
 */
export function extractYouTubeVideoId(input: string): string | null {
  const trimmed = input.trim()
  if (!trimmed) return null

  if (/^[\w-]{11}$/.test(trimmed)) return trimmed

  const fromQuery = trimmed.match(/[?&]v=([\w-]{11})/)
  if (fromQuery) return fromQuery[1]

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://www.youtube.com/${trimmed.replace(/^\//, "")}`
    const url = new URL(withProtocol)

    const v = url.searchParams.get("v")
    if (v && /^[\w-]{11}$/.test(v)) return v

    if (url.hostname.replace(/^www\./, "") === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0]
      if (id && /^[\w-]{11}$/.test(id)) return id
    }

    const pathMatch = url.pathname.match(
      /\/(?:embed|shorts|live|v)\/([\w-]{11})/
    )
    if (pathMatch) return pathMatch[1]
  } catch {
    // fall through
  }

  return null
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export function filterAndSortProjects(
  category: Category,
  sort: SortOption,
  search: string
): Project[] {
  let filtered = [...projects]

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (search.trim()) {
    const q = search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
    )
  }

  switch (sort) {
    case "featured":
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating)
      break
    case "recent":
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case "category":
      filtered.sort((a, b) => a.category.localeCompare(b.category))
      break
  }

  return filtered
}

export function filterAndSortProjectList<T extends PublicProject>(
  projectList: T[],
  category: Category,
  sort: SortOption,
  search: string
): T[] {
  let filtered = [...projectList]

  if (category !== "All") filtered = filtered.filter((project) => project.category === category)

  if (search.trim()) {
    const query = search.toLowerCase()
    filtered = filtered.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((tech) => tech.toLowerCase().includes(query))
    )
  }

  if (sort === "featured") filtered.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating)
  if (sort === "recent") filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  if (sort === "category") filtered.sort((a, b) => a.category.localeCompare(b.category))

  return filtered
}
