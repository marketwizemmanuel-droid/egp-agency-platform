import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'atelier-lumina',
    title: 'Lumina Botanical Parfumerie',
    client: 'Atelier Lumina Paris',
    year: '2025',
    category: 'Branding',
    shortDescription: 'Tactile identity system, frosted violet packaging architecture, and editorial campaign for an avant-garde haute perfumery.',
    coverImage: '/src/assets/images/project_luxe_editorial_1790953312297.jpg',
    featured: true,
    services: ['Brand Identity', 'Packaging Architecture', 'Typography System', 'Art Direction'],
    overview: {
      client: 'Atelier Lumina',
      year: '2025',
      services: ['Brand Identity', 'Packaging Architecture', 'Typography System', 'Art Direction'],
      summary: 'A multi-sensory brand reinvention bridging classical Parisian apothecary traditions with contemporary minimalist brutalism.'
    },
    challenge: 'In a saturated niche fragrance market dominated by baroque ornamentation and heritage cliches, Atelier Lumina needed an unapologetically modern visual language that communicated olfactory purity and tactile luxury.',
    strategy: 'We stripped away superficial filigree, establishing an uncompromising typographic standard paired with deep ultraviolet glass refractions and heavy tactile paper stocks. The identity relies on precision proportions rather than ornamental noise.',
    creative: 'Developed a bespoke typographic wordmark with custom kerning, complemented by blind-debossed monolithic packaging. The ultraviolet tint acts as an optical filter, protecting delicate botanical essences while establishing an unforgettable shelf presence.',
    execution: 'Engineered sustainable bespoke flacons with heavyweight magnetic caps, editorial lookbooks printed on Japanese cotton stock, and a streamlined global packaging production matrix.',
    galleryImages: [
      '/src/assets/images/project_luxe_editorial_1790953312297.jpg',
      '/src/assets/images/hero_egp_creative_1790953292284.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'Global Retail Stockists', value: '42 Stores' },
        { label: 'Product Sell-Out Rate', value: '100% in 72h' }
      ],
      statement: 'Received unanimous critical acclaim across luxury editorial publications and established Lumina as a benchmark in modern tactile packaging.'
    }
  },
  {
    id: 'strata-protocol',
    title: 'Strata Computational Financial',
    client: 'Strata Systems Zurich',
    year: '2025',
    category: 'Web Design & Development',
    shortDescription: 'High-density computational web platform, real-time liquidity visualization, and design system for next-generation institutional trading.',
    coverImage: '/src/assets/images/project_fintech_digital_1790953324900.jpg',
    featured: true,
    services: ['Web Architecture', 'UI/UX Design Systems', 'Interactive WebGL Visualizer', 'Front-End Engineering'],
    overview: {
      client: 'Strata Systems',
      year: '2025',
      services: ['Web Architecture', 'UI/UX Design Systems', 'Interactive WebGL Visualizer', 'Front-End Engineering'],
      summary: 'An institutional web environment engineered to synthesize millions of liquidity data points into an effortless, legible interface.'
    },
    challenge: 'Institutional traders navigate cognitively dense environments where milliseconds matter. Strata needed a web experience that felt razor-sharp, eliminated visual fatigue, and maintained 60fps data telemetry.',
    strategy: 'EGP built an information architecture grounded in typographic hierarchy, deep-space dark surfaces (#08080A), and selective violet laser accents to signal directional liquidity flow without distracting glare.',
    creative: 'Engineered custom modular data tables with tabular numerical alignment, micro-interaction states that confirm high-value actions in under 120ms, and a unified design system deployed across 30+ enterprise modules.',
    execution: 'Full-stack production with React, WebGL shaders for high-throughput market depth canvases, sub-millisecond keyboard navigation shortcuts, and responsive desktop workstation layouts.',
    galleryImages: [
      '/src/assets/images/project_fintech_digital_1790953324900.jpg',
      '/src/assets/images/project_data_intelligence_1790953347179.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'Latency Reduction', value: '38%' },
        { label: 'Client Onboarding Speed', value: '3.4x Faster' }
      ],
      statement: 'Adopted as the primary trading console across European algorithmic capital desks.'
    }
  },
  {
    id: 'kinesis-athletics',
    title: 'Kinesis Kinetic Motion Campaign',
    client: 'Kinesis Sportswear',
    year: '2024',
    category: 'Motion Graphics',
    shortDescription: 'High-speed cinematic motion graphics, broadcast titles, and digital billboard takeovers for an international performance apparel drop.',
    coverImage: '/src/assets/images/project_kinetic_motion_1790953336274.jpg',
    featured: true,
    services: ['Motion Direction', 'Kinetic Typography', '3D Light Trailing', 'Broadcast & Social Cutdowns'],
    overview: {
      client: 'Kinesis Sportswear',
      year: '2024',
      services: ['Motion Direction', 'Kinetic Typography', '3D Light Trailing', 'Broadcast & Social Cutdowns'],
      summary: 'A hyper-kinetic broadcast and digital campaign capturing the raw biomechanics of Olympic sprinters through kinetic light typography.'
    },
    challenge: 'Conventional sports apparel campaigns rely on predictable training montages. Kinesis demanded a campaign that transformed raw human kinetic energy into an abstract, impossible-to-scroll-past visual spectacle.',
    strategy: 'We combined 1,000fps phantom camera footage with custom kinetic typography that reacts in real-time to athlete muscle flexion and acceleration velocity.',
    creative: 'Bold, oversized editorial typography sliced by high-voltage violet streak particles. The sound design was mapped directly to foot strikes and breath rhythms for sensory immersion.',
    execution: 'Delivered 40+ multi-format assets across 9:16 vertical social reels, 16:9 cinematic teasers, and anamorphic 3D billboard takeovers in Tokyo, London, and New York.',
    galleryImages: [
      '/src/assets/images/project_kinetic_motion_1790953336274.jpg',
      '/src/assets/images/hero_egp_creative_1790953292284.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'Video Completion Rate', value: '84.2%' },
        { label: 'Social Engagement Rate', value: '6.8x Benchmark' }
      ],
      statement: 'The campaign established Kinesis as the breakout athletic brand of the season, dominating social feeds worldwide.'
    }
  },
  {
    id: 'axiom-intelligence',
    title: 'Axiom Intelligence Publication',
    client: 'Axiom Research Institute',
    year: '2024',
    category: 'Graphic Design',
    shortDescription: 'Editorial monograph series, foil-stamped research volumes, and generative infographic systems analyzing creative culture.',
    coverImage: '/src/assets/images/project_data_intelligence_1790953347179.jpg',
    featured: true,
    services: ['Editorial Design', 'Data Visualization', 'Print Production', 'Digital Companion'],
    overview: {
      client: 'Axiom Research Institute',
      year: '2024',
      services: ['Editorial Design', 'Data Visualization', 'Print Production', 'Digital Companion'],
      summary: 'Transforming dense global cultural datasets into a tactile, museum-grade biannual research journal.'
    },
    challenge: 'How to make complex socio-cultural data engaging for C-suite strategists, creative directors, and researchers without diluting intellectual rigor?',
    strategy: 'Treating data visualization as fine art. We created bespoke coordinate grids, isometric schematics, and an editorial rhythm that alternates between intense macro statistics and poetic white space.',
    creative: 'Curated a heavyweight matte charcoal stock with violet metallic foil debossing on the spine, complemented by a bespoke Swiss-style grid system with 12 distinct chart hierarchies.',
    execution: 'Supervised print runs with master lithographers, coupled with an interactive web archive featuring vector data export and reading modes.',
    galleryImages: [
      '/src/assets/images/project_data_intelligence_1790953347179.jpg',
      '/src/assets/images/project_fintech_digital_1790953324900.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'Print Edition Status', value: 'Sold Out in 48h' },
        { label: 'Institutional Libraries', value: '68 Global Archives' }
      ],
      statement: 'Recognized by design councils for setting a new benchmark in scientific editorial presentation.'
    }
  },
  {
    id: 'veloce-electric',
    title: 'Veloce Hyper-Mobility Launch',
    client: 'Veloce Automotive',
    year: '2025',
    category: 'Digital Marketing',
    shortDescription: 'Comprehensive launch strategy, digital lookbook, and viral hype campaign for a high-performance electric concept vehicle.',
    coverImage: '/src/assets/images/hero_egp_creative_1790953292284.jpg',
    featured: false,
    services: ['Launch Strategy', 'Digital Marketing', 'Content Ecosystem', 'Performance Funnels'],
    overview: {
      client: 'Veloce Automotive',
      year: '2025',
      services: ['Launch Strategy', 'Digital Marketing', 'Content Ecosystem', 'Performance Funnels'],
      summary: 'A secret concept launch executed with stealth teaser drops, exclusive token-gated previews, and global press amplification.'
    },
    challenge: 'Generating immense global desire and pre-orders for an electric vehicle manufacturer before the physical vehicle debuted at automotive exhibitions.',
    strategy: 'Engineered an 8-week countdown narrative anchored by hyper-focused detail crops: aerodynamic carbon weave, LED light signatures, and cockpit acoustics.',
    creative: 'High-contrast typography, mysterious atmospheric staging, and provocative social micro-videos that generated organic speculation across design forums.',
    execution: 'Coordinated global press release synchronization, an invite-only digital reservation vault, and synchronized digital out-of-home reveals.',
    galleryImages: [
      '/src/assets/images/hero_egp_creative_1790953292284.jpg',
      '/src/assets/images/project_kinetic_motion_1790953336274.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'VIP Allocations Reserved', value: '100% Sold' },
        { label: 'Global Media Impressions', value: '18M+ Organic' }
      ],
      statement: 'Overachieved reservation quotas within 12 hours of digital reveal.'
    }
  },
  {
    id: 'synapse-creative-intelligence',
    title: 'Synapse Creative Analytics',
    client: 'Synapse Collective',
    year: '2024',
    category: 'Video Production',
    shortDescription: 'Cinematic brand documentary, motion brand identity, and multi-channel video content engine for a creative tech incubator.',
    coverImage: '/src/assets/images/project_kinetic_motion_1790953336274.jpg',
    featured: false,
    services: ['Video Production', 'Creative Intelligence', 'Brand Strategy', 'Sound Design'],
    overview: {
      client: 'Synapse Collective',
      year: '2024',
      services: ['Video Production', 'Creative Intelligence', 'Brand Strategy', 'Sound Design'],
      summary: 'A 5-part mini-documentary series exploring the intersection of creative intuition and machine learning.'
    },
    challenge: 'Demystifying algorithmic creative tools without falling into cliché techno-babble or sterile corporate imagery.',
    strategy: 'Framed the narrative through human makers: sculptors, typographers, and computational artists collaborating with intelligence systems.',
    creative: 'Raw 16mm grain film contrasted against razor-sharp vector overlays and violet ambient lighting, creating an authentic humanistic dialogue.',
    execution: 'Production across 4 continents, full color grading, original synthesizer score, and custom subtitling typography.',
    galleryImages: [
      '/src/assets/images/project_kinetic_motion_1790953336274.jpg',
      '/src/assets/images/project_luxe_editorial_1790953312297.jpg'
    ],
    results: {
      verified: true,
      metrics: [
        { label: 'Series Watch Time', value: '91% Retention' },
        { label: 'Agency Sign-ups', value: '+340%' }
      ],
      statement: 'Won prestigious film festival screenings and dramatically elevated Synapse brand authority.'
    }
  },
  {
    id: 'confidential-stealth-campaign',
    title: 'Global Stealth Flagship Campaign',
    client: 'CONFIDENTIAL BRAND',
    year: '2025',
    category: 'Digital Marketing',
    shortDescription: 'Brand Design & Digital Campaign: High-secrecy brand positioning, encrypted teaser microsite, and international launch rollout.',
    coverImage: '/src/assets/images/project_fintech_digital_1790953324900.jpg',
    featured: false,
    services: ['Brand Design', 'Digital Campaign', 'Security Architecture', 'Global Media Placement'],
    overview: {
      client: 'CONFIDENTIAL BRAND',
      year: '2025',
      services: ['Brand Design', 'Digital Campaign'],
      summary: 'Subject to non-disclosure agreements, this confidential initiative spanned international brand repositioning and multi-tier launch activations.'
    },
    challenge: 'Executing a multi-market brand transition without leaking strategic positioning ahead of the global keynote.',
    strategy: 'Decoupled media assets and encrypted asset staging to ensure airtight brand security up to the simultaneous global drop.',
    creative: 'Minimalist brutalist typography, ultra-high contrast dark visual canvases, and razor-sharp typographic timing.',
    execution: 'Engineered encrypted digital portals and synchronized PR rollouts across EMEA and Americas.',
    galleryImages: [
      '/src/assets/images/project_fintech_digital_1790953324900.jpg',
      '/src/assets/images/hero_egp_creative_1790953292284.jpg'
    ]
  }
];
