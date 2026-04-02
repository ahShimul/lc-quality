export interface ServiceData {
  slug: string;
  meta: { title: string; description: string; canonical: string };
  hero: {
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    availability?: string;
    ctaLabel: string;
    microItems: { icon: string; text: string }[];
  };
  trustChips: { icon: string; text: string; highlight?: boolean }[];
  overview: {
    eyebrow: string;
    title: string;
    titleEm: string;
    paragraphs: string[];
    stats: { num: string; label: string }[];
    image: string;
  };
  included: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
    note?: string;
  };
  process: { title: string; desc: string }[];
  pricing: {
    range: string;
    rangeNote: string;
    description: string;
    factors: string[];
    cards: { icon: string; color: string; title: string; desc: string }[];
  };
  faq: { question: string; answer: string }[];
  related: { slug: string; title: string; desc: string; imgClass: string }[];
  seoParagraph: string;
}

export const services: Record<string, ServiceData> = {
  'basement-finishing': {
    slug: 'basement-finishing',
    meta: {
      title: 'Basement Finishing Centereach NY | LC Quality Improvements',
      description:
        'Basement finishing in Centereach, NY. Framing, insulation, drywall, flooring, lighting by an owner-operated Long Island contractor.',
      canonical: 'https://www.lcqualityimprovements.com/basement-finishing',
    },
    hero: {
      badge: 'Owner-Operated Basement Finishing Contractor',
      title: 'Basement Finishing in',
      titleEm: 'Centereach, NY',
      description:
        'Turn your basement into usable living space — family room, home office, gym, or playroom. Framing, insulation, drywall, flooring, lighting, and clean finishing details done personally by a licensed Long Island contractor.',
      availability:
        'Currently booking March & April 2026 — limited spots available',
      ctaLabel: 'Get a Free Basement Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'user', text: 'No Subcontractors' },
        { icon: 'bolt', text: 'Electrical Done Right' },
      ],
    },
    trustChips: [
      {
        icon: 'id-card',
        text: 'NY State Licensed — #XXXXXXX',
        highlight: true,
      },
      { icon: 'shield-halved', text: 'Fully Insured — Certificate on Request' },
      { icon: 'user', text: 'No Subcontractors — Ever' },
      { icon: 'file-signature', text: 'Free Written Estimates' },
      { icon: 'file-contract', text: 'Satisfaction Guaranteed' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Finished Basements Built',
      titleEm: 'to Feel Like Upstairs',
      paragraphs: [
        'A finished basement should feel warm, bright, and solid — not cold, echoey, or "temporary." The difference is proper planning: moisture awareness, insulation choices, tight framing, clean drywall, and correct lighting.',
        'At LC Quality Improvements, I handle your basement project from the first measurement to the final trim detail — owner-operated with clear communication throughout.',
      ],
      stats: [
        { num: '50+', label: 'Basements Improved' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/bathroom-2.jpg',
    },
    included: {
      title: 'Everything Covered in Basement Finishing',
      subtitle:
        "No vague line items. Here's what's typically included from framing to final cleanup.",
      items: [
        {
          icon: 'ruler-combined',
          title: 'Layout & Planning',
          desc: 'Room layout, ceiling strategy, lighting plan, and finish selections',
        },
        {
          icon: 'hammer',
          title: 'Framing',
          desc: 'Walls, soffits, and bulkheads framed straight and solid',
        },
        {
          icon: 'snowflake',
          title: 'Insulation',
          desc: 'Basement-appropriate insulation choices for comfort and performance',
        },
        {
          icon: 'border-all',
          title: 'Drywall & Finishing',
          desc: 'Hang, tape, sand, and finish for smooth walls and ceilings',
        },
        {
          icon: 'bolt',
          title: 'Electrical & Lighting',
          desc: 'Recessed lights, outlets, switches, and circuits (permitted when required)',
        },
        {
          icon: 'door-open',
          title: 'Doors & Trim',
          desc: 'Baseboards, casing, and clean finish carpentry details',
        },
        {
          icon: 'grip-lines',
          title: 'Basement Flooring',
          desc: 'LVP, laminate, or tile flooring options that make sense for basements',
        },
        {
          icon: 'paint-roller',
          title: 'Painting',
          desc: 'Full prep, prime, and clean finish coats',
        },
        {
          icon: 'broom',
          title: 'Final Cleanup',
          desc: 'Daily cleanup and a final deep clean before walkthrough',
        },
        {
          icon: 'file-contract',
          title: 'Satisfaction Guaranteed',
          desc: 'Workmanship backed in writing',
        },
      ],
      note: "Moisture concerns? We'll evaluate your basement first and recommend the right materials so the finished space holds up long-term.",
    },
    process: [
      {
        title: 'Free In-Home Estimate',
        desc: 'I measure the basement, discuss your goals, and provide a written estimate with a clear scope.',
      },
      {
        title: 'Planning & Selections',
        desc: 'We finalize layout, lighting, flooring type, doors/trim, and paint colors.',
      },
      {
        title: 'Framing & Rough Work',
        desc: 'Walls/soffits framed, electrical roughed in, and any prep handled before closing walls.',
      },
      {
        title: 'Insulation & Drywall',
        desc: 'Basement-appropriate insulation, then drywall hung, taped, and finished smooth.',
      },
      {
        title: 'Flooring, Trim & Paint',
        desc: 'Flooring installed, trim and doors finished, then paint is applied cleanly.',
      },
      {
        title: 'Final Walkthrough',
        desc: "Punch-list, cleanup, and a final walkthrough. I don't call it done until you're satisfied.",
      },
    ],
    pricing: {
      range: '$8,000 – $45,000+',
      rangeNote: 'Typical range depending on scope',
      description:
        'Basement finishing cost depends on square footage, ceiling height, electrical scope, moisture considerations, and finish level.',
      factors: [
        'Basement size and number of rooms',
        'Ceiling strategy (open vs finished ceiling)',
        'Electrical work (lights, outlets, new circuits)',
        'Moisture management and insulation choices',
        'Flooring type and trim details',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate Included',
          desc: 'Line-by-line scope before we start',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock Guarantee',
          desc: 'No changes without your sign-off',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'One person accountable end-to-end',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Respect for Your Home',
          desc: 'Protection and cleanup throughout',
        },
      ],
    },
    faq: [
      {
        question: 'How long does basement finishing take?',
        answer:
          "Most basement finishing projects take 2–6 weeks depending on size, layout, electrical scope, and finishes. You'll get a realistic timeline in your written estimate before we start.",
      },
      {
        question: 'Do you handle basement electrical work and lighting?',
        answer:
          'Yes. As a licensed contractor I handle basement electrical work such as recessed lights, outlets, switches, and dedicated circuits. Permits are pulled when required.',
      },
      {
        question: 'Can you finish a basement with moisture concerns?',
        answer:
          'Yes. We first evaluate moisture sources and recommend the right approach (sealing, dehumidification, insulation choices, and flooring selection) so the finished space holds up.',
      },
      {
        question: 'Do I need an egress window to add a bedroom?',
        answer:
          "If you're adding a bedroom, code often requires proper egress. During the estimate, we'll review your layout and explain what's needed for safety and compliance.",
      },
      {
        question: "What's included in your estimate?",
        answer:
          'Your estimate is line-by-line and typically includes framing, insulation, drywall, doors/trim, electrical, lighting, flooring, painting, cleanup, and disposal (based on the agreed scope).',
      },
    ],
    related: [
      {
        slug: 'flooring',
        title: 'Flooring Installation',
        desc: 'LVP, laminate, and tile flooring options that work well in basements.',
        imgClass: '/images/flooring.jpg',
      },
      {
        slug: 'basement-sump-pump-installation',
        title: 'Basement Sump Pump Installation',
        desc: 'Professional installation of sump pumps to prevent basement flooding.',
        imgClass: '/images/basement-sump-pump-installation.png',
      },
      {
        slug: 'painting',
        title: 'Interior Painting',
        desc: 'Fresh paint to finish the space and brighten the basement.',
        imgClass: '/images/painting.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements provides basement finishing in Centereach, NY serving all of Long Island. We finish basements in Smithtown, basement renovations in Hauppauge, basement framing and drywall in Commack, basement flooring installation in Stony Brook, and full basement finishing projects throughout Nassau and Suffolk County.',
  },
  'bathroom-renovation': {
    slug: 'bathroom-renovation',
    meta: {
      title: 'Bathroom Renovation Centereach NY | LC Quality Improvements',
      description:
        'Bathroom renovation in Centereach, NY. Walk-in showers, tile, vanities, and full bathroom remodels by an owner-operated contractor.',
      canonical: 'https://www.lcqualityimprovements.com/bathroom-renovation',
    },
    hero: {
      badge: 'Owner-Operated Bathroom Renovation Contractor',
      title: 'Bathroom Renovation in',
      titleEm: 'Centereach, NY',
      description:
        'Full bathroom renovations — walk-in showers, tile work, vanities, fixtures, and waterproofing. Clean workmanship by a licensed Long Island contractor.',
      ctaLabel: 'Get a Free Bathroom Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'user', text: 'No Subcontractors' },
        { icon: 'droplet', text: 'Waterproofing Included' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'NY State Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Fully Insured' },
      { icon: 'user', text: 'No Subcontractors' },
      { icon: 'file-signature', text: 'Free Written Estimates' },
      { icon: 'file-contract', text: 'Satisfaction Guaranteed' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Bathroom Renovations Built',
      titleEm: 'to Last',
      paragraphs: [
        'A bathroom renovation should be more than cosmetic. Proper waterproofing, solid tile work, and smart fixture choices make the difference between a bathroom that looks good and one that holds up.',
        'At LC Quality, every bathroom project is handled personally from demo to final grout line.',
      ],
      stats: [
        { num: '80+', label: 'Bathrooms Renovated' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/bathroom.jpg',
    },
    included: {
      title: 'Everything Covered in Bathroom Renovation',
      subtitle:
        "From demolition to final cleanup — here's what's typically included.",
      items: [
        {
          icon: 'hammer',
          title: 'Demolition',
          desc: 'Careful removal of old fixtures, tile, and drywall',
        },
        {
          icon: 'droplet',
          title: 'Waterproofing',
          desc: 'Shower pan, membrane, and moisture barriers',
        },
        {
          icon: 'border-all',
          title: 'Tile Installation',
          desc: 'Floor and wall tile with clean grout lines',
        },
        {
          icon: 'sink',
          title: 'Vanity & Fixtures',
          desc: 'Vanity, faucet, toilet, and hardware installation',
        },
        {
          icon: 'shower',
          title: 'Shower Enclosures',
          desc: 'Walk-in showers, glass doors, and custom niches',
        },
        {
          icon: 'bolt',
          title: 'Electrical',
          desc: 'Lighting, exhaust fans, and GFCI outlets',
        },
        {
          icon: 'paint-roller',
          title: 'Paint & Finishing',
          desc: 'Moisture-rated paint and clean trim work',
        },
        {
          icon: 'broom',
          title: 'Final Cleanup',
          desc: 'Deep clean before your walkthrough',
        },
      ],
    },
    process: [
      {
        title: 'Free In-Home Estimate',
        desc: 'I visit your bathroom, discuss the scope, and provide a written estimate.',
      },
      {
        title: 'Design & Selections',
        desc: 'Choose tile, fixtures, vanity, and paint colors.',
      },
      {
        title: 'Demo & Prep',
        desc: 'Careful demolition and preparation of the space.',
      },
      {
        title: 'Rough-In & Waterproofing',
        desc: 'Plumbing, electrical, and waterproofing done right.',
      },
      {
        title: 'Tile, Fixtures & Paint',
        desc: 'Tile installed, fixtures set, and final finishes applied.',
      },
      {
        title: 'Final Walkthrough',
        desc: "You inspect everything. We don't leave until you're satisfied.",
      },
    ],
    pricing: {
      range: '$6,000 – $35,000+',
      rangeNote: 'Typical range depending on scope',
      description:
        'Bathroom renovation cost depends on size, fixture quality, tile selection, and scope of plumbing/electrical work.',
      factors: [
        'Bathroom size and layout changes',
        'Custom tile vs standard',
        'Fixture and hardware selection',
        'Plumbing modifications',
        'Waterproofing scope',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Clear pricing before we start',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock',
          desc: 'No surprises',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'One point of contact',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Clean Work',
          desc: 'Daily cleanup',
        },
      ],
    },
    faq: [
      {
        question: 'How long does a bathroom renovation take?',
        answer:
          'Most bathroom renovations take 2–4 weeks depending on scope. Your estimate includes a realistic timeline.',
      },
      {
        question: 'Do you handle plumbing?',
        answer:
          'Yes, plumbing modifications and fixture installation are included in the scope.',
      },
      {
        question: 'Can you work with my existing layout?',
        answer:
          'Absolutely. We can refresh within the existing footprint or reconfigure the layout completely.',
      },
    ],
    related: [
      {
        slug: 'flooring',
        title: 'Flooring Installation',
        desc: 'Tile and waterproof flooring for bathrooms.',
        imgClass: '/images/flooring.jpg',
      },
      {
        slug: 'basement-sump-pump-installation',
        title: 'Basement Sump Pump Installation',
        desc: 'Professional installation of sump pumps to prevent basement flooding.',
        imgClass: '/images/basement-sump-pump-installation.png',
      },
      {
        slug: 'painting',
        title: 'Interior Painting',
        desc: 'Moisture-rated paint for bathrooms.',
        imgClass: '/images/painting.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements provides bathroom renovation in Centereach, NY serving all of Long Island.',
  },
  'kitchen-remodeling': {
    slug: 'kitchen-remodeling',
    meta: {
      title: 'Kitchen Remodeling Centereach NY | LC Quality Improvements',
      description:
        'Kitchen remodeling in Centereach, NY. Custom cabinets, countertops, backsplash, and lighting by a licensed contractor.',
      canonical: 'https://www.lcqualityimprovements.com/kitchen-remodeling',
    },
    hero: {
      badge: 'Owner-Operated Kitchen Remodeling Contractor',
      title: 'Kitchen Remodeling in',
      titleEm: 'Centereach, NY',
      description:
        'Complete kitchen remodels from layout and design to cabinets, countertops, backsplash, and lighting — for Centereach and Long Island homeowners.',
      ctaLabel: 'Get a Free Kitchen Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'user', text: 'No Subcontractors' },
        { icon: 'utensils', text: 'Full Kitchen Remodels' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'NY State Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Fully Insured' },
      { icon: 'user', text: 'No Subcontractors' },
      { icon: 'file-signature', text: 'Free Written Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Kitchen Remodels That',
      titleEm: 'Transform Your Home',
      paragraphs: [
        'The kitchen is the heart of your home. A well-planned remodel improves functionality, storage, and aesthetics while adding real value to your property.',
        'From full gut renovations to cabinet refacing and countertop upgrades, I handle every detail personally.',
      ],
      stats: [
        { num: '100+', label: 'Kitchens Remodeled' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/kitchen.jpg',
    },
    included: {
      title: 'Everything Covered in Kitchen Remodeling',
      subtitle: 'From design to final cleanup.',
      items: [
        {
          icon: 'ruler-combined',
          title: 'Design & Layout',
          desc: 'Kitchen layout optimization and design planning',
        },
        {
          icon: 'cube',
          title: 'Cabinets',
          desc: 'Custom or semi-custom cabinet installation',
        },
        {
          icon: 'gem',
          title: 'Countertops',
          desc: 'Quartz, granite, or butcher block countertops',
        },
        {
          icon: 'border-all',
          title: 'Backsplash',
          desc: 'Tile backsplash with clean grout lines',
        },
        {
          icon: 'bolt',
          title: 'Electrical & Lighting',
          desc: 'Recessed lighting, under-cabinet lights, outlets',
        },
        {
          icon: 'sink',
          title: 'Fixtures',
          desc: 'Sink, faucet, and hardware installation',
        },
        {
          icon: 'paint-roller',
          title: 'Painting',
          desc: 'Walls and trim painted to completion',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Deep clean before walkthrough',
        },
      ],
    },
    process: [
      {
        title: 'Free In-Home Estimate',
        desc: 'Measure, discuss goals, and provide a written estimate.',
      },
      {
        title: 'Design & Selections',
        desc: 'Finalize cabinets, countertop, tile, fixtures, and colors.',
      },
      { title: 'Demo & Prep', desc: 'Careful demolition and preparation.' },
      {
        title: 'Install Cabinets & Countertops',
        desc: 'Cabinets set level, countertops templated and installed.',
      },
      {
        title: 'Tile, Fixtures & Paint',
        desc: 'Backsplash, lighting, fixtures, and paint applied.',
      },
      {
        title: 'Final Walkthrough',
        desc: "Inspect every detail. Not done until you're happy.",
      },
    ],
    pricing: {
      range: '$15,000 – $65,000+',
      rangeNote: 'Typical range depending on scope',
      description:
        'Kitchen remodeling cost depends on size, cabinet quality, countertop material, and electrical scope.',
      factors: [
        'Kitchen size and layout changes',
        'Cabinet quality and style',
        'Countertop material',
        'Backsplash complexity',
        'Electrical and lighting scope',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Detailed scope before we start',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock',
          desc: 'No changes without approval',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'One contact person',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Clean Work',
          desc: 'Daily cleanup',
        },
      ],
    },
    faq: [
      {
        question: 'How long does a kitchen remodel take?',
        answer:
          'Most kitchen remodels take 3–8 weeks depending on scope and complexity.',
      },
      {
        question: 'Can you work with my existing layout?',
        answer:
          'Yes, we can refresh within your current footprint or redesign the entire layout.',
      },
      {
        question: 'Do you install appliances?',
        answer:
          'We coordinate appliance delivery and handle installation hookups.',
      },
    ],
    related: [
      {
        slug: 'basement-sump-pump-installation',
        title: 'Basement Sump Pump Installation',
        desc: 'Professional installation of sump pumps to prevent basement flooding.',
        imgClass: '/images/basement-sump-pump-installation.png',
      },
      {
        slug: 'flooring',
        title: 'Flooring',
        desc: 'LVP, tile, and hardwood for kitchen floors.',
        imgClass: '/images/flooring.jpg',
      },
      {
        slug: 'painting',
        title: 'Painting',
        desc: 'Interior painting for kitchen walls and trim.',
        imgClass: '/images/painting.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements provides kitchen remodeling in Centereach, NY serving all of Long Island.',
  },
  'basement-sump-pump-installation': {
    slug: 'basement-sump-pump-installation',
    meta: {
      title: 'Basement Sump Pump Installation Centereach NY | LC Quality',
      description:
        'Expert basement sump pump installation in Centereach, NY. Protect your home from flooding with our professional services.',
      canonical:
        'https://www.lcqualityimprovements.com/basement-sump-pump-installation',
    },
    hero: {
      badge: 'Basement sump pump installation experts — Long Island',
      title: 'Basement Sump Pump Installation in',
      titleEm: 'Centereach, NY',
      description:
        'Expert basement sump pump installation in Centereach, NY. Protect your home from flooding with our professional services.',
      ctaLabel: 'Get a Free Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'bolt', text: 'Code Compliant' },
        { icon: 'file-contract', text: 'Permitted Work' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'NY State Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Fully Insured' },
      { icon: 'bolt', text: 'Code Compliant' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Electrical Work Done',
      titleEm: 'Safely & Right',
      paragraphs: [
        "Electrical work isn't something to cut corners on. Licensed, permitted, and inspected work protects your family and your investment.",
        'From simple outlet additions to full panel upgrades, I handle every electrical project personally.',
      ],
      stats: [
        { num: '200+', label: 'Electrical Jobs' },
        { num: '10+', label: 'Years Licensed' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/basement-sump-pump-installation.png',
    },
    included: {
      title: 'Basement Sump Pump Installation Services We Provide',
      subtitle:
        'Residential basement sump pump installation across Long Island.',
      items: [
        {
          icon: 'house-flood-water',
          title: 'Sump Pump Installation',
          desc: 'Submersible or pedestal sump pump installed in a new or existing pit',
        },
        {
          icon: 'battery-full',
          title: 'Battery Backup Systems',
          desc: 'Battery backup sump pump to keep you protected during power outages',
        },
        {
          icon: 'water',
          title: 'Pit Excavation & Liner',
          desc: 'Proper pit sizing, excavation, and perforated liner installation',
        },
        {
          icon: 'pipe-section',
          title: 'Discharge Line Routing',
          desc: 'PVC discharge piping routed safely away from the foundation',
        },
        {
          icon: 'rotate',
          title: 'Sump Pump Replacement',
          desc: 'Swap out a failed or aging sump pump with a reliable new unit',
        },
        {
          icon: 'triangle-exclamation',
          title: 'Alarm & Float Upgrades',
          desc: 'High-water alarms and float switch upgrades for early warning',
        },
      ],
    },
    process: [
      {
        title: 'Free Estimate',
        desc: 'We assess your basement, identify the best pit location, and provide a written quote.',
      },
      {
        title: 'Pit Excavation',
        desc: 'We break concrete, excavate the pit, and install a properly sized perforated liner.',
      },
      {
        title: 'Pump & Plumbing Install',
        desc: 'Sump pump is set, check valve installed, and PVC discharge line routed to daylight.',
      },
      {
        title: 'Electrical Connection',
        desc: 'Pump wired to a dedicated GFCI-protected outlet — done to code.',
      },
      {
        title: 'Battery Backup (Optional)',
        desc: 'We install a battery backup unit if requested so you stay protected during outages.',
      },
      {
        title: 'Test & Walkthrough',
        desc: 'We flood-test the pump, verify discharge flow, and walk you through the system.',
      },
    ],
    pricing: {
      range: '$800 – $3,500+',
      rangeNote: 'Depends on scope',
      description:
        'Sump pump pricing varies based on pit work needed, pump type, discharge routing, and whether a battery backup is added.',
      factors: [
        'New pit excavation vs. existing pit',
        'Submersible vs. pedestal pump',
        'Discharge line length and routing',
        'Battery backup system',
        'Permit requirements',
        'Access difficulty',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Clear scope and pricing',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Licensed Work',
          desc: 'Permitted and inspected',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Direct communication',
        },
        {
          icon: 'shield-halved',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Code Compliant',
          desc: 'Safe and up to code',
        },
      ],
    },
    faq: [
      {
        question: 'Do I need a sump pump if my basement has never flooded?',
        answer:
          'Yes — a sump pump is a preventative measure. Many basements show no signs of flooding until a heavy storm overwhelms the water table. Installing one before a problem occurs protects your investment.',
      },
      {
        question:
          'What is the difference between a submersible and a pedestal sump pump?',
        answer:
          'Submersible pumps sit inside the pit and are quieter and more powerful — best for most homes. Pedestal pumps have a motor above the pit and are easier to service but louder. We recommend the right type based on your pit and usage.',
      },
      {
        question: 'Do you install battery backup sump pumps?',
        answer:
          'Yes. A battery backup unit keeps your basement protected when the power goes out during a storm — exactly when you need it most. We install and wire backup systems alongside or separate from a primary pump.',
      },
      {
        question: 'How long does a sump pump installation take?',
        answer:
          'Most installations are completed in one day. Jobs requiring new pit excavation through concrete may take slightly longer depending on conditions.',
      },
      {
        question: 'Where does the discharge line drain to?',
        answer:
          'We route the discharge line through the rim joist or foundation wall and terminate it away from the foundation — typically to daylight in the yard, driveway, or a dry well, following local code requirements.',
      },
      {
        question: 'Is a permit required for sump pump installation?',
        answer:
          'Permit requirements vary by municipality on Long Island. We handle permit research and pulling when required so the job is done properly.',
      },
    ],
    related: [
      {
        slug: 'basement-finishing',
        title: 'Basement Finishing',
        desc: 'Frame, drywall, and finish your basement once water is managed.',
        imgClass: '/images/basement.jpg',
      },
      {
        slug: 'flooring',
        title: 'Flooring Installation',
        desc: 'Waterproof LVP and tile flooring ideal for basements.',
        imgClass: '/images/flooring.jpg',
      },
      {
        slug: 'painting',
        title: 'Interior Painting',
        desc: 'Fresh paint to complete your basement after the work is done.',
        imgClass: '/images/painting.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements installs sump pumps and battery backup systems in Centereach, NY and across Long Island. We handle pit excavation, pump installation, discharge routing, and electrical connections — all in one visit.',
  },
  flooring: {
    slug: 'flooring',
    meta: {
      title: 'Flooring Installation Centereach NY | LC Quality',
      description:
        'Flooring installation in Centereach, NY. Hardwood, LVP, tile, and laminate.',
      canonical: 'https://www.lcqualityimprovements.com/flooring',
    },
    hero: {
      badge: 'Professional Flooring Installer — Long Island',
      title: 'Flooring Installation in',
      titleEm: 'Centereach, NY',
      description:
        'Hardwood, luxury vinyl plank, tile, and laminate floors installed throughout your home. Precise cuts, clean transitions, and lasting results.',
      ctaLabel: 'Get a Free Flooring Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'user', text: 'No Subcontractors' },
        { icon: 'th-large', text: 'All Flooring Types' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Insured' },
      { icon: 'user', text: 'No Subcontractors' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Flooring That',
      titleEm: 'Transforms Your Space',
      paragraphs: [
        'New flooring changes the entire feel of a room. We install hardwood, LVP, tile, and laminate with precision and clean detail work.',
        'Every flooring project includes proper subfloor prep, transitions, and trim to ensure a professional finish.',
      ],
      stats: [
        { num: '150+', label: 'Floors Installed' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/flooring.jpg',
    },
    included: {
      title: 'Flooring Services',
      subtitle: 'Everything from prep to final trim.',
      items: [
        {
          icon: 'th-large',
          title: 'LVP / Laminate',
          desc: 'Luxury vinyl plank and laminate click-lock installation',
        },
        {
          icon: 'tree',
          title: 'Hardwood',
          desc: 'Solid and engineered hardwood installation',
        },
        {
          icon: 'border-all',
          title: 'Tile',
          desc: 'Porcelain, ceramic, and natural stone tile',
        },
        {
          icon: 'ruler-combined',
          title: 'Subfloor Prep',
          desc: 'Leveling, underlayment, and moisture barriers',
        },
        {
          icon: 'door-open',
          title: 'Trim & Transitions',
          desc: 'Baseboards, quarter round, and transitions',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Clean workspace and debris removal',
        },
      ],
    },
    process: [
      {
        title: 'Free Estimate',
        desc: 'Measure rooms and discuss material options.',
      },
      {
        title: 'Material Selection',
        desc: 'Choose your flooring with guidance on what works best.',
      },
      {
        title: 'Subfloor Prep',
        desc: 'Level and prepare the subfloor properly.',
      },
      {
        title: 'Installation',
        desc: 'Precise installation with clean cuts and transitions.',
      },
      {
        title: 'Trim & Details',
        desc: 'Baseboards, transitions, and finishing touches.',
      },
      { title: 'Walkthrough', desc: 'Final inspection and cleanup.' },
    ],
    pricing: {
      range: '$3,000 – $20,000+',
      rangeNote: 'Depends on area and material',
      description:
        'Flooring cost depends on square footage, material choice, subfloor condition, and complexity.',
      factors: [
        'Square footage',
        'Material choice (LVP vs hardwood vs tile)',
        'Subfloor condition',
        'Pattern complexity',
        'Stairs and transitions',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Per-room pricing',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock',
          desc: 'No surprises',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Quality control',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Clean Work',
          desc: 'Daily cleanup',
        },
      ],
    },
    faq: [
      {
        question: 'What flooring is best for basements?',
        answer:
          "LVP is the most popular basement flooring choice — it's waterproof, durable, and looks great.",
      },
      {
        question: 'Do you remove old flooring?',
        answer:
          'Yes, old flooring removal and disposal is included when needed.',
      },
      {
        question: 'How long does flooring installation take?',
        answer:
          'Most rooms take 1–2 days. Whole-house projects typically take 3–7 days.',
      },
    ],
    related: [
      {
        slug: 'basement-finishing',
        title: 'Basement Finishing',
        desc: 'Complete basement projects including flooring.',
        imgClass: '/images/basement.jpg',
      },
      {
        slug: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        desc: 'Kitchen flooring as part of a full remodel.',
        imgClass: '/images/kitchen.jpg',
      },
      {
        slug: 'painting',
        title: 'Painting',
        desc: 'Fresh paint to complement new floors.',
        imgClass: '/images/painting.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements provides flooring installation in Centereach, NY serving all of Long Island.',
  },
  roofing: {
    slug: 'roofing',
    meta: {
      title: 'Roofing Contractor Centereach NY | LC Quality',
      description:
        'Roofing contractor in Centereach, NY. Roof replacement, repairs, gutters.',
      canonical: 'https://www.lcqualityimprovements.com/roofing',
    },
    hero: {
      badge: 'Licensed Roofing Contractor — Long Island',
      title: 'Roofing Services in',
      titleEm: 'Centereach, NY',
      description:
        'Roof repair, leak repair, gutter installation, and fascia work. Protect your home with professional roofing by a licensed Long Island contractor.',
      ctaLabel: 'Get a Free Roofing Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'home', text: 'Full Roof Systems' },
        { icon: 'file-contract', text: 'Warranty Included' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Insured' },
      { icon: 'home', text: 'Full Roof Systems' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Roofing That',
      titleEm: 'Protects Your Home',
      paragraphs: [
        "Your roof is your home's first line of defense. We handle complete roof replacements, targeted repairs, gutter systems, and fascia work.",
        'Every roofing project is done with quality materials and proper installation techniques.',
      ],
      stats: [
        { num: '100+', label: 'Roofs Completed' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/roofing.jpg',
    },
    included: {
      title: 'Roofing Services',
      subtitle: 'Complete roofing solutions.',
      items: [
        {
          icon: 'home',
          title: 'Roof Replacement',
          desc: 'Full tear-off and new shingle installation',
        },
        {
          icon: 'wrench',
          title: 'Leak Repair',
          desc: 'Find and fix leaks permanently',
        },
        {
          icon: 'water',
          title: 'Gutters',
          desc: 'Seamless gutter installation and repair',
        },
        {
          icon: 'border-all',
          title: 'Fascia & Soffit',
          desc: 'Replace damaged fascia and soffit boards',
        },
        {
          icon: 'shield-halved',
          title: 'Ice & Water Shield',
          desc: 'Proper underlayment for protection',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Magnetic sweep and full debris removal',
        },
      ],
    },
    process: [
      {
        title: 'Free Estimate',
        desc: 'Inspect your roof and provide a written estimate.',
      },
      { title: 'Material Selection', desc: 'Choose shingle color and style.' },
      { title: 'Tear-Off', desc: 'Remove old roofing down to the deck.' },
      {
        title: 'Install',
        desc: 'Underlayment, shingles, flashing, and vents.',
      },
      {
        title: 'Gutters & Trim',
        desc: 'Install or reconnect gutters and trim.',
      },
      {
        title: 'Cleanup & Inspection',
        desc: 'Magnetic sweep, debris removal, and final inspection.',
      },
    ],
    pricing: {
      range: '$8,000 – $25,000+',
      rangeNote: 'Depends on size and scope',
      description:
        'Roofing cost depends on roof size, pitch, layers to remove, and material choice.',
      factors: [
        'Roof square footage',
        'Number of layers to remove',
        'Roof pitch and complexity',
        'Material choice',
        'Gutter and fascia work',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Detailed scope',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Satisfaction Guaranteed',
          desc: 'We stand behind our work with a satisfaction guarantee.',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Quality guaranteed',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Full Cleanup',
          desc: 'Magnetic sweep included',
        },
      ],
    },
    faq: [
      {
        question: 'How long does a roof replacement take?',
        answer:
          'Most residential roofs take 1–3 days depending on size and weather.',
      },
      {
        question: 'Do you handle gutter installation?',
        answer:
          'Yes, seamless gutters are available as part of any roofing project.',
      },
      {
        question: 'What type of shingles do you use?',
        answer:
          'We install architectural shingles from trusted manufacturers with manufacturer warranties.',
      },
    ],
    related: [
      {
        slug: 'painting',
        title: 'Exterior Painting',
        desc: 'Fresh paint to complement your new roof.',
        imgClass: '/images/exterior-painting.jpg',
      },
      {
        slug: 'doors-windows',
        title: 'Doors & Windows',
        desc: 'Energy-efficient windows with your roof.',
        imgClass: '/images/living-room.jpg',
      },
      {
        slug: 'deck-outdoor',
        title: 'Deck Building',
        desc: 'Outdoor improvements alongside roofing.',
        imgClass: '/images/deck.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements is a licensed roofing contractor in Centereach, NY serving all of Long Island.',
  },
  'deck-outdoor': {
    slug: 'deck-outdoor',
    meta: {
      title: 'Deck Builder Centereach NY | LC Quality',
      description:
        'Custom deck building in Centereach, NY. Wood and composite decks, pergolas, and railings.',
      canonical: 'https://www.lcqualityimprovements.com/deck-outdoor',
    },
    hero: {
      badge: 'Custom Deck Builder — Long Island',
      title: 'Deck Building &\nOutdoor Living in',
      titleEm: 'Centereach, NY',
      description:
        'Custom wood and composite decks, pergolas, and railings built for Long Island weather. Extend your outdoor living space with professional craftsmanship.',
      ctaLabel: 'Get a Free Deck Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'tree', text: 'Wood & Composite' },
        { icon: 'file-contract', text: 'Warranty Included' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Insured' },
      { icon: 'tree', text: 'Wood & Composite' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Decks Built',
      titleEm: 'for Long Island Living',
      paragraphs: [
        'A well-built deck extends your living space outdoors. We build custom decks in pressure-treated lumber and low-maintenance composite materials.',
        "Every deck is built with proper footings, framing, and hardware to handle Long Island's seasons.",
      ],
      stats: [
        { num: '75+', label: 'Decks Built' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/deck.jpg',
    },
    included: {
      title: 'Deck Building Services',
      subtitle: 'Everything from design to final details.',
      items: [
        {
          icon: 'ruler-combined',
          title: 'Design',
          desc: 'Custom deck layout and material selection',
        },
        {
          icon: 'anchor',
          title: 'Footings',
          desc: 'Proper concrete footings and post bases',
        },
        {
          icon: 'hammer',
          title: 'Framing',
          desc: 'Pressure-treated framing built to code',
        },
        {
          icon: 'border-all',
          title: 'Decking',
          desc: 'Wood or composite decking installation',
        },
        {
          icon: 'shield-halved',
          title: 'Railings',
          desc: 'Code-compliant railings and stairs',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Full site cleanup and debris removal',
        },
      ],
    },
    process: [
      {
        title: 'Free Estimate',
        desc: 'Measure your yard and discuss options.',
      },
      { title: 'Design & Permits', desc: 'Finalize design and pull permits.' },
      { title: 'Footings', desc: 'Dig and pour concrete footings.' },
      { title: 'Framing', desc: 'Build the structural framework.' },
      {
        title: 'Decking & Rails',
        desc: 'Install decking boards and railings.',
      },
      { title: 'Final Inspection', desc: 'Pass inspection and walkthrough.' },
    ],
    pricing: {
      range: '$5,000 – $30,000+',
      rangeNote: 'Depends on size and material',
      description:
        'Deck cost depends on size, material (wood vs composite), features, and access.',
      factors: [
        'Deck size and shape',
        'Material (pressure-treated vs composite)',
        'Railing style',
        'Built-in features',
        'Site access and grading',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Detailed pricing',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Permitted',
          desc: 'Built to code',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Quality craftsmanship',
        },
        {
          icon: 'broom',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Cleanup',
          desc: 'Full site cleanup',
        },
      ],
    },
    faq: [
      {
        question: 'Wood or composite — which is better?',
        answer:
          "Both have advantages. Wood is more affordable upfront; composite is lower maintenance long-term. We'll help you choose.",
      },
      {
        question: 'Do you pull permits for decks?',
        answer:
          'Yes, we handle all permits and inspections required by your municipality.',
      },
      {
        question: 'How long does deck construction take?',
        answer: 'Most decks take 1–2 weeks depending on size and complexity.',
      },
    ],
    related: [
      {
        slug: 'roofing',
        title: 'Roofing',
        desc: 'Protect your home from above.',
        imgClass: '/images/roofing.jpg',
      },
      {
        slug: 'painting',
        title: 'Exterior Painting',
        desc: "Fresh paint for your home's exterior.",
        imgClass: '/images/exterior-painting.jpg',
      },
      {
        slug: 'basement-sump-pump-installation',
        title: 'Basement Sump Pump Installation',
        desc: 'Professional installation of sump pumps to prevent basement flooding.',
        imgClass: '/images/basement-sump-pump-installation.png',
      },
    ],
    seoParagraph:
      'LC Quality Improvements builds custom decks in Centereach, NY serving all of Long Island.',
  },
  painting: {
    slug: 'painting',
    meta: {
      title: 'Painting Contractor Centereach NY | LC Quality',
      description:
        'Interior and exterior painting in Centereach, NY. Professional prep, premium products.',
      canonical: 'https://www.lcqualityimprovements.com/painting',
    },
    hero: {
      badge: 'Professional Painting Contractor — Long Island',
      title: 'Interior & Exterior\nPainting in',
      titleEm: 'Centereach, NY',
      description:
        'Professional painting with proper prep, caulking, and premium products. Clean lines, smooth finishes, and results that last.',
      ctaLabel: 'Get a Free Painting Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'paint-roller', text: 'Interior & Exterior' },
        { icon: 'file-contract', text: 'Warranty Included' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Insured' },
      { icon: 'paint-roller', text: 'Interior & Exterior' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Painting That',
      titleEm: 'Looks Professional',
      paragraphs: [
        "A professional paint job is 80% prep. We don't cut corners — every surface is properly prepped, primed, and painted with premium products.",
        'From single rooms to full exterior repaints, I handle every project personally with clean results.',
      ],
      stats: [
        { num: '200+', label: 'Painting Projects' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/painting.jpg',
    },
    included: {
      title: 'Painting Services',
      subtitle: 'Interior and exterior painting.',
      items: [
        {
          icon: 'paint-roller',
          title: 'Interior Painting',
          desc: 'Walls, ceilings, trim, and doors',
        },
        {
          icon: 'home',
          title: 'Exterior Painting',
          desc: 'Siding, trim, shutters, and doors',
        },
        {
          icon: 'ruler-combined',
          title: 'Surface Prep',
          desc: 'Sanding, patching, caulking, and priming',
        },
        {
          icon: 'shield-halved',
          title: 'Premium Products',
          desc: 'Benjamin Moore and Sherwin-Williams',
        },
        {
          icon: 'tape',
          title: 'Clean Lines',
          desc: 'Proper masking and cutting-in technique',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Daily cleanup and final detail',
        },
      ],
    },
    process: [
      {
        title: 'Free Estimate',
        desc: 'Evaluate surfaces and provide detailed pricing.',
      },
      { title: 'Color Selection', desc: 'Help you choose colors that work.' },
      {
        title: 'Surface Prep',
        desc: 'Patch, sand, caulk, and prime all surfaces.',
      },
      {
        title: 'Paint Application',
        desc: 'Apply coats with proper technique.',
      },
      { title: 'Detail Work', desc: 'Trim, edges, and touch-ups.' },
      { title: 'Walkthrough', desc: 'Final inspection and cleanup.' },
    ],
    pricing: {
      range: '$2,000 – $15,000+',
      rangeNote: 'Depends on scope',
      description:
        'Painting cost depends on surface area, surface condition, paint quality, and access.',
      factors: [
        'Number of rooms or exterior area',
        'Surface condition and prep needed',
        'Paint quality',
        'Ceiling height and access',
        'Trim and detail work',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Per-room or per-area pricing',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock',
          desc: 'No surprises',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Quality control',
        },
        {
          icon: 'paint-roller',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Premium Products',
          desc: 'Quality materials',
        },
      ],
    },
    faq: [
      {
        question: 'How long does interior painting take?',
        answer:
          'Most rooms take 1 day. Whole-house interior painting typically takes 3–7 days depending on size and prep.',
      },
      {
        question: 'Do you provide paint?',
        answer:
          'Yes, premium paints are included in the estimate. We use Benjamin Moore and Sherwin-Williams.',
      },
      {
        question: 'Do you paint exteriors?',
        answer:
          'Yes, exterior painting including siding, trim, shutters, and doors.',
      },
    ],
    related: [
      {
        slug: 'basement-finishing',
        title: 'Basement Finishing',
        desc: 'Complete basement projects with painting.',
        imgClass: '/images/basement.jpg',
      },
      {
        slug: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        desc: 'Paint as part of a kitchen remodel.',
        imgClass: '/images/kitchen.jpg',
      },
      {
        slug: 'bathroom-renovation',
        title: 'Bathroom Renovation',
        desc: 'Moisture-rated paint for bathrooms.',
        imgClass: '/images/bathroom.jpg',
      },
    ],
    seoParagraph:
      'LC Quality Improvements provides interior and exterior painting in Centereach, NY serving all of Long Island.',
  },
  'doors-windows': {
    slug: 'doors-windows',
    meta: {
      title: 'Doors & Windows Centereach NY | LC Quality',
      description:
        'Door and window installation in Centereach, NY. Energy-efficient replacements.',
      canonical: 'https://www.lcqualityimprovements.com/doors-windows',
    },
    hero: {
      badge: 'Door & Window Installation — Long Island',
      title: 'Doors & Windows in',
      titleEm: 'Centereach, NY',
      description:
        'Energy-efficient door and window replacements that improve comfort, curb appeal, and utility bills. Professional installation by a licensed contractor.',
      ctaLabel: 'Get a Free Estimate',
      microItems: [
        { icon: 'id-card', text: 'NY State Licensed' },
        { icon: 'shield-halved', text: 'Fully Insured' },
        { icon: 'door-open', text: 'Doors & Windows' },
        { icon: 'leaf', text: 'Energy Efficient' },
      ],
    },
    trustChips: [
      { icon: 'id-card', text: 'Licensed', highlight: true },
      { icon: 'shield-halved', text: 'Insured' },
      { icon: 'door-open', text: 'Doors & Windows' },
      { icon: 'file-signature', text: 'Free Estimates' },
    ],
    overview: {
      eyebrow: 'About This Service',
      title: 'Doors & Windows That',
      titleEm: 'Save You Money',
      paragraphs: [
        'New doors and windows improve energy efficiency, comfort, security, and curb appeal. We install quality products with proper weatherproofing.',
        'Every installation includes removal of old units, proper flashing, insulation, and clean trim work.',
      ],
      stats: [
        { num: '100+', label: 'Installations' },
        { num: '10+', label: 'Years Experience' },
        { num: '5.0', label: 'Google Rating' },
      ],
      image: '/images/flooring.jpg',
    },
    included: {
      title: 'Door & Window Services',
      subtitle: 'Complete installation.',
      items: [
        {
          icon: 'door-open',
          title: 'Entry Doors',
          desc: 'Front doors, side doors, and storm doors',
        },
        {
          icon: 'border-all',
          title: 'Windows',
          desc: 'Double-hung, casement, and picture windows',
        },
        {
          icon: 'door-open',
          title: 'Sliding Doors',
          desc: 'Patio and sliding glass door installation',
        },
        {
          icon: 'snowflake',
          title: 'Insulation',
          desc: 'Proper insulation around every opening',
        },
        {
          icon: 'ruler-combined',
          title: 'Trim',
          desc: 'Interior and exterior trim and casing',
        },
        {
          icon: 'broom',
          title: 'Cleanup',
          desc: 'Old unit removal and site cleanup',
        },
      ],
    },
    process: [
      { title: 'Free Estimate', desc: 'Measure openings and discuss options.' },
      {
        title: 'Product Selection',
        desc: 'Choose styles, colors, and features.',
      },
      {
        title: 'Order & Schedule',
        desc: 'Order products and lock in your install date.',
      },
      {
        title: 'Remove & Install',
        desc: 'Remove old units and install new ones.',
      },
      { title: 'Seal & Trim', desc: 'Weatherproof, insulate, and trim.' },
      { title: 'Walkthrough', desc: 'Test operation and final cleanup.' },
    ],
    pricing: {
      range: '$3,000 – $25,000+',
      rangeNote: 'Depends on quantity and type',
      description:
        'Cost depends on number of units, product selection, and installation complexity.',
      factors: [
        'Number of openings',
        'Product quality and features',
        'Custom sizes',
        'Trim and casing scope',
        'Access and structural modifications',
      ],
      cards: [
        {
          icon: 'file-invoice-dollar',
          color: 'from-[#2E7D32] to-[#66BB6A]',
          title: 'Written Estimate',
          desc: 'Per-unit pricing',
        },
        {
          icon: 'lock',
          color: 'from-blue to-ice',
          title: 'Price Lock',
          desc: 'Locked pricing',
        },
        {
          icon: 'user',
          color: 'from-[#4A148C] to-[#7B1FA2]',
          title: 'Owner-Operated',
          desc: 'Quality install',
        },
        {
          icon: 'leaf',
          color: 'from-[#E65100] to-[#FF9800]',
          title: 'Energy Efficient',
          desc: 'Lower utility bills',
        },
      ],
    },
    faq: [
      {
        question: 'Do you install custom-sized windows?',
        answer:
          'Yes, we handle both standard and custom-sized window orders and installations.',
      },
      {
        question: 'How long does window replacement take?',
        answer:
          'Most window replacements take 1 day for 3–5 windows. Full-house projects take 2–4 days.',
      },
      {
        question: 'Do new windows really save on energy bills?',
        answer:
          'Yes, modern double-pane windows with low-E glass significantly reduce heating and cooling costs.',
      },
    ],
    related: [
      {
        slug: 'roofing',
        title: 'Roofing',
        desc: "Complete your home's exterior.",
        imgClass: '/images/roofing.jpg',
      },
      {
        slug: 'painting',
        title: 'Exterior Painting',
        desc: 'Fresh paint to match new windows.',
        imgClass: '/images/exterior-painting.jpg',
      },
      {
        slug: 'basement-sump-pump-installation',
        title: 'Basement Sump Pump Installation',
        desc: 'Professional installation of sump pumps to prevent basement flooding.',
        imgClass: '/images/basement-sump-pump-installation.png',
      },
    ],
    seoParagraph:
      'LC Quality Improvements installs doors and windows in Centereach, NY serving all of Long Island.',
  },
};
