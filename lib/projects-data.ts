import {
  Wallet,
  Building2,
  Package,
  MessageSquare,
  Activity,
  type LucideIcon,
} from "lucide-react"

export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  slug: string
  icon: LucideIcon
  category: "Fintech" | "Real Estate" | "SaaS" | "AI" | "IoT"
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
    ],
  },
]

export const categories = ["All", "Fintech", "SaaS", "Real Estate", "AI", "IoT"] as const

export type Category = (typeof categories)[number]

export type SortOption = "featured" | "recent" | "category"

/** Project payload safe to pass from Server → Client Components (no React components). */
export type ClientProject = Omit<Project, "icon">

export function toClientProject(project: Project): ClientProject {
  const { icon: _icon, ...rest } = project
  return rest
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
