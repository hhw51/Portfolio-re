// app/portfolio/data.ts

export interface ProjectImpact { 
    [key: string]: string; 
  }
  
  export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    teamMember: string;
    technologies: string[];
    completionDate: string;
    projectUrl: string;
    legacyUrl?: string;
    featured: boolean;
    impact: ProjectImpact;
    challenge: string;
    solution: string;
    results: string;
    isLab?: boolean;
    vapiAssistantId?: string;
  }
  
  export const categories = [
    "All", 
    "AI Innovation", 
    "Institutional Transformation", 
    "E-commerce Engineering", 
    "Real Estate Automation", 
    "Enterprise Ecosystems"
  ];
  
  export const portfolioProjects: Project[] = [
    {
      id: "jehaan-e-luxury-hub",
      title: "jehaanE: Luxury Apparel Hub",
      category: "E-commerce Engineering",
      description: "Engineered a high-end digital storefront for an elite clothing brand, matching sophisticated brand identity with conversational WhatsApp automation workflows.",
      image: "/images/portfolio/jehane.png",
      teamMember: "haris-wyne",
      technologies: ["Next.js", "React", "WhatsApp Business API", "Tailwind CSS", "Brand Strategy"],
      completionDate: "2026-04-12",
      projectUrl: "https://jehaneofficial.com/",
      featured: true,
      impact: {
        UX: "Luxury Branding",
        Automation: "WhatsApp Sync",
        Retention: "Direct Channel",
      },
      challenge: "High-fashion labels demand breathtaking visual interfaces that don't compromise core web vitals, combined with simple, localized checkout structures for direct customer engagement.",
      solution: "Developed an ultra-sleek, premium digital commerce engine emphasizing minimal aesthetics and rich media layouts. Unified the user funnel with automated WhatsApp checkout and transactional confirmation tracking.",
      results: "Elevated the brand's digital presence to global luxury standards while drastically reducing abandoned carts through direct-to-chat operational sequences.",
    },
    {
      id: "remotebnb-crm-engine",
      title: "RemoteBnB CRM Engine",
      category: "Real Estate Automation",
      description: "Architected a GHL-style workspace specialized for real estate property managers. Integrates multi-platform webhooks, drag-and-drop csv processing, and operational ledger tracking.",
      image: "/images/portfolio/crm.png",
      teamMember: "haris-wyne",
      technologies: ["Next.js", "Supabase", "Webhooks", "Node.js", "Tailwind CSS"],
      completionDate: "2026-06-15",
      projectUrl: "https://remote-bnb.vercel.app/",
      featured: true,
      impact: {
        Architecture: "NextJS + Supabase",
        Pipelines: "Kanban Logic",
        Logistics: "Turnover Control",
      },
      challenge: "Property managers juggle disjointed tools for lead acquisition, messaging streams, and field turnover mechanics, creating communication gaps and performance drop-offs.",
      solution: "Built a fully cohesive operations hub featuring an automated listing scraper ingestion model, a single multi-channel guest inbox for Airbnb/Vrbo/Booking, real-time multi-platform payout auditing trackers, and photo-metric cleaner verification workflows.",
      results: "Centralized real estate client logistics safely within a lightning-fast, mobile-responsive ecosystem, cutting third-party tool overhead costs significantly.",
    },
    {
      id: "roi-construction-platform",
      title: "ROI Construction Platform",
      category: "Enterprise Ecosystems",
      description: "Designed and engineered a high-converting digital storefront for a premium general contractor, driving client onboarding through interactive Estimate Wizards.",
      image: "/images/portfolio/roi_constr.png",
      teamMember: "haris-wyne",
      technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
      completionDate: "2026-06-10",
      projectUrl: "https://roi-construction.vercel.app",
      featured: true,
      impact: {
        UI: "Premium Dark Aesthetic",
        Conversion: "Estimate Wizard",
        Showcase: "Before/After Sliders",
      },
      challenge: "High-end construction firms require digital spaces that mirror their craftsmanship while maintaining absolute financial and itemization transparency to build immediate user trust.",
      solution: "Engineered a modern dark-mode application using Next.js. Integrated interactive project comparison tools, real-time portfolio metrics overlays, and a step-by-step interactive project onboarding wizard.",
      results: "Delivered a premium digital footprint matching corporate identity standards, providing frictionless lead capture through targeted estimate widgets.",
    },
    {
      id: "remarkable-drain-cleaning",
      title: "Remarkable Drain Cleaning Engine",
      category: "Enterprise Ecosystems",
      description: "Developed a high-availability 24/7 service infrastructure designed for high-conversion emergency intake and automated scheduling streams.",
      image: "/images/portfolio/rem.png",
      teamMember: "haris-wyne",
      technologies: ["Next.js", "React", "Tailwind CSS", "Lucide Icons"],
      completionDate: "2026-06-05",
      projectUrl: "https://remarkable-drain-cleaning.vercel.app",
      featured: false,
      impact: {
        Availability: "24/7 Live Framework",
        UX: "Emergency Bento Grid",
        Billing: "Transparent Matrix",
      },
      challenge: "Emergency utility service sites must load instantly and present immediate call actions, clear pricing models, and trust pillars to users navigating stressful home situations.",
      solution: "Constructed an optimized dark-theme customer funnel featuring an instant click-to-call direct link system, clear 3-column pricing matrix structures, and split-layout appointment intake pathways.",
      results: "Created a lightning-fast emergency scheduling engine that maximizes real-time customer conversion rates and reduces inbound administration bottleneck loads.",
    },
    {
      id: "drc-pakistan-college-of-law",
      title: "DRC by Pakistan College of Law",
      category: "Institutional Transformation",
      description: "Orchestrated the digital rebirth of the Dignity Rights Center, migrating a legacy Wix site into a high-authority custom ecosystem for legal advocacy.",
      image: "/images/portfolio/drcbypcl.png",
      teamMember: "haris-wyne, ramsha",
      technologies: ["Next.js", "React", "Tailwind CSS", "Brand Strategy", "SEO Architecture"],
      completionDate: "2025-11-20",
      projectUrl: "https://www.drcbypcl.com",
      legacyUrl: "https://pcldrc.wixsite.com/home/general-7",
      featured: true,
      impact: {
        Authority: "Domain Migration",
        UX: "Enterprise-Grade",
        Socials: "Live Funnels",
      },
      challenge: "The PCL Dignity Rights Center was restricted by a legacy Wix sub-domain that lacked institutional credibility. They needed a global-standard platform for research, blogs, and international collaboration.",
      solution: "Developed a custom Next.js environment featuring a 'Dignity Dictionary', research repositories, and an integrated legal newsfeed. Revitalized their social media via a structured visual identity system and educational content funnels.",
      results: "Established a professional digital HQ that mirrors global human rights entities. Successfully migrated SEO equity and launched a cohesive brand voice across all social channels.",
    },
    {
      id: "eve-whites-headless-commerce",
      title: "Eve-Whites: Headless Commerce",
      category: "E-commerce Engineering",
      description: "Engineering a high-conversion headless commerce solution for luxury fashion, focusing on performance and subscription-based revenue.",
      image: "/images/portfolio/eve-whites.png",
      teamMember: "haris-wyne",
      technologies: ["Next.js", "Shopify Hydrogen", "Tailwind CSS", "GraphQL"],
      completionDate: "2025-07-23",
      projectUrl: "https://www.evewhites.com",
      featured: true,
      impact: {
        conversion: "8.5%",
        subscribers: "1.2K+",
        retention: "85%",
      },
      challenge: "Luxury branding required sub-second load times and custom checkout logic that standard Shopify templates couldn't provide.",
      solution: "Built a headless Next.js frontend communicating via Storefront API, reducing Time-to-First-Byte by 60%.",
      results: "Achieved an 8.5% conversion rate and secured a stable base of 1,200+ recurring subscribers.",
    },
    {
      id: "fozias-kitchen-revenue-engine",
      title: "Fozia's Kitchen: Revenue Engine",
      category: "E-commerce Engineering",
      description: "Developed a mission-critical delivery logistics platform processing over $500K in GMV with automated order routing.",
      image: "/images/portfolio/fozia-kitchen.png",
      teamMember: "haris-wyne",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      completionDate: "2023-09-15",
      projectUrl: "https://foziakitchen.com",
      featured: false,
      impact: {
        GMV: "$500K+",
        orders: "10K+",
        growth: "300%",
      },
      challenge: "Managing real-time order states and high-volume payment processing for a rapidly scaling food business.",
      solution: "Built a custom Order Management System (OMS) with automated driver dispatching.",
      results: "Enabled 300% YoY growth, processing 10,000+ orders with zero infrastructure downtime.",
    }
  ];
  
  export const labProjects: Project[] = [
    {
      id: "ai-voice-receptionist-demo",
      title: "AI Voice Receptionist (V1)",
      category: "AI Innovation",
      description: "An autonomous, multi-tenant voice infrastructure designed to handle ultra-low latency inbound customer bookings and lead routing workflows natively over web interfaces.",
      image: "/images/portfolio/receptionist_demo.png", 
      teamMember: "haris-wyne",
      technologies: ["Vapi AI", "Next.js", "Daily.co", "Supabase", "Twilio"],
      completionDate: "2026-06-25",
      projectUrl: "#",
      featured: true,
      isLab: true, 
      vapiAssistantId: "1ca981e2-e6d6-4134-b66c-22f39e43f586",
      impact: {
        Latency: "~450ms",
        Pipeline: "WebRTC Data",
        Status: "Active Lab",
      },
      challenge: "Traditional automated phone systems drop conversions. Typical streaming HTTP backend networks introduce unacceptable 2-4 second delays when generating context-aware dialogue strings dynamically.",
      solution: "Engineered an edge-optimized custom communication pipeline binding client audio peripherals via low-latency WebRTC streams right into Vapi's deep-pipeline layout handlers.",
      results: "Delivered human-grade instant interactive voice speeds, handling high-intent client inquiries while maintaining live status data logs inside a unified backend tracker dashboard.",
    },
    {
      id: "ai-geo-audit",
      title: "GEO Audit Agent (V1)",
      category: "AI Innovation",
      description: "An autonomous agent that audits brand 'discoverability' across Generative AI Engines like ChatGPT and Perplexity.",
      image: "/images/portfolio/audit_image.png",
      teamMember: "haris-wyne",
      technologies: ["Gemini 1.5 Flash", "Next.js", "Upstash", "LLM Scraping"],
      completionDate: "2026-02-04",
      projectUrl: "/demos/geo-audit",
      featured: true,
      isLab: true,
      impact: {
        analysis: "Instant",
        engine: "Gemini 1.5",
        status: "Live Lab",
      },
      challenge: "Brands are invisible to AI models because their data isn't structured for LLM crawling.",
      solution: "Engineered an AI-driven scraper that simulates LLM queries to determine brand recommendation probability.",
      results: "Identifies 'blind spots' that prevent AI models from surfacing a business in search results.",
    }
  ];
  
  export const allProjects = [...labProjects, ...portfolioProjects];