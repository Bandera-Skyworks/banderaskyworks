// Single source of truth for site-wide content and metadata.

export const site = {
  name: 'Bandera Skyworks',
  url: 'https://banderaskyworks.com',
  tagline: 'Hill Country Drone Services',
  description:
    'Professional drone inspection services for energy infrastructure, construction monitoring, and commercial applications in the Texas Hill Country.',
  phone: '(210) 549-7015',
  phoneHref: 'tel:+12105497015',
  email: 'info@banderaskyworks.com',
  area: 'Serving the Texas Hill Country',
  social: {
    twitter: 'https://x.com/BanderaSkyworks',
    instagram: 'https://www.instagram.com/banderaskyworks/',
  },
  logo: '/assets/images/bsw-logo-new.jpg',
  icon: '/assets/images/bsw-icon-64.webp',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Services', href: '/services.html' },
  { label: 'UAS-Log', href: '/uas-log.html' },
  { label: 'Contact', href: '/contact.html' },
];

export const stats = [
  { value: '24/7', label: 'Emergency Response' },
  { value: '100%', label: 'FAA Compliant' },
  { value: '5★', label: 'Client Rating' },
];

export const whyChooseUs = [
  {
    icon: 'certificate',
    title: 'FAA Certified',
    body: 'All pilots Part 107 licensed with specialized utility training.',
  },
  {
    icon: 'shield',
    title: 'Fully Insured',
    body: '$5M liability coverage for complete peace of mind.',
  },
  {
    icon: 'chart',
    title: 'Advanced Analytics',
    body: 'AI-powered defect detection and predictive maintenance.',
  },
  {
    icon: 'clock',
    title: 'Rapid Response',
    body: 'Same-day emergency service throughout the Hill Country.',
  },
];

export const services = [
  {
    icon: 'bolt',
    title: 'Powerline Inspections',
    pricing: 'Starting at $400 per mile',
    summary:
      'Advanced aerial inspection of transmission and distribution lines with thermal imaging.',
    description:
      'Our comprehensive powerline inspection services leverage cutting-edge automated flight technology and high-resolution imaging systems to transform how utilities monitor their infrastructure. We provide detailed assessments of transmission and distribution lines across the Texas Hill Country.',
    features: [
      'Thermal imaging for hot spot detection and equipment failures',
      'Vegetation encroachment monitoring with laser-ranged clearance estimates',
      'Insulator inspection for cracks, chips, and contamination',
      'Conductor and hardware assessment for wear and damage',
      'Storm damage rapid assessment and documentation',
      'Right-of-way monitoring and encroachment detection',
    ],
    benefits: [
      { title: 'Cost Reduction', body: '90% less than helicopter inspections' },
      { title: 'Faster Coverage', body: 'Inspect 25+ miles per day' },
      { title: 'Enhanced Safety', body: 'No crew exposure to hazards' },
      { title: 'Predictive Data', body: 'AI-powered failure prediction' },
    ],
  },
  {
    icon: 'industry',
    title: 'Substation Inspections',
    pricing: 'Starting at $1,500 per substation',
    summary: 'Live substation monitoring with radiometric thermal cameras and optical zoom.',
    description:
      'Transform your substation maintenance program with our comprehensive aerial inspection services that combine cutting-edge radiometric thermal imaging technology with ultra-high-resolution optical zoom cameras. We inspect live substations without service interruptions.',
    features: [
      'Radiometric thermal analysis with temperature measurements',
      '16x optical / 200x hybrid zoom for detailed component inspection',
      'Oil leak detection on transformers and equipment',
      'Bushing and insulator condition assessment',
      'Structural integrity evaluation',
    ],
    benefits: [
      { title: 'No Outages', body: 'Inspect while energized' },
      { title: 'Complete Visibility', body: 'Access hard-to-reach areas' },
      { title: 'Early Detection', body: 'Identify issues before failure' },
      { title: 'Detailed Reports', body: 'Comprehensive documentation' },
    ],
  },
  {
    icon: 'solar',
    title: 'Solar Farm Inspections',
    pricing: 'Starting at $350 per MW',
    summary: 'Comprehensive PV system analysis to maximize energy production.',
    description:
      'Maximize your solar investment with our comprehensive PV system inspections. Using advanced thermal imaging, we quickly identify underperforming panels, hot spots, and maintenance issues across large solar arrays.',
    features: [
      'Thermal imaging for hot spot and defective cell detection',
      'Panel efficiency mapping and performance analysis',
      'Soiling and shading assessment',
      'Physical damage inspection (cracks, delamination)',
      'Inverter and combiner box thermal analysis',
      'Vegetation management recommendations',
    ],
    benefits: [
      { title: 'Increased Output', body: 'Identify underperforming panels' },
      { title: 'Rapid Inspection', body: 'Up to 80 MW inspected daily' },
      { title: 'Targeted Maintenance', body: 'Prioritize repairs effectively' },
      { title: 'ROI Tracking', body: 'Monitor performance trends' },
    ],
  },
  {
    icon: 'wind',
    title: 'Wind Turbine Inspections',
    pricing: 'Starting at $450 per turbine',
    summary: 'High-resolution blade and tower inspection without costly downtime.',
    description:
      'Comprehensive blade and tower inspections without costly downtime. Our high-resolution imaging captures defects invisible from the ground, enabling proactive maintenance that extends turbine life and maximizes energy production.',
    features: [
      'Detailed blade inspection for cracks, erosion, and delamination',
      'Lightning strike damage assessment',
      'Tower structural analysis and coating inspection',
      'Nacelle and hub external inspection',
      'Oil leak detection and staining documentation',
      'Ice accumulation monitoring',
    ],
    benefits: [
      { title: 'Minimal Downtime', body: 'No cranes or rope crews' },
      { title: 'Early Detection', body: 'Find issues before failure' },
      { title: 'Safer Inspections', body: 'No rope access required' },
      { title: 'Faster Turnaround', body: 'Complete farm in days' },
    ],
  },
  {
    icon: 'hardhat',
    title: 'Construction Progress Monitoring',
    pricing: 'Starting at $750 per visit',
    summary: 'Regular aerial documentation, 3D mapping, and volumetric calculations.',
    description:
      'Track construction progress with regular aerial documentation and 3D mapping. Our services provide stakeholders with comprehensive visual updates, volumetric calculations, and timeline verification throughout the project lifecycle.',
    features: [
      'Weekly, bi-weekly, or monthly progress documentation',
      'High-resolution orthomosaic mapping',
      '3D site modeling and volumetric calculations',
      'Time-lapse video creation',
      'Stockpile volume measurements',
      'Safety compliance monitoring',
    ],
    benefits: [
      { title: 'Progress Tracking', body: 'Visual timeline verification' },
      { title: 'Stakeholder Updates', body: 'Share progress remotely' },
      { title: 'Accurate Measurements', body: 'Centimeter-level accuracy' },
      { title: 'Dispute Resolution', body: 'Visual documentation' },
    ],
  },
  {
    icon: 'alert',
    title: 'Emergency Response Services',
    pricing: 'Starting at $1,500 per deployment',
    summary: '24/7 rapid deployment for storm damage and critical infrastructure.',
    description:
      '24/7 rapid deployment for storm damage assessment and critical infrastructure inspection. When disasters strike, our emergency response team provides immediate aerial intelligence to accelerate recovery efforts and restoration planning.',
    features: [
      '24/7 emergency deployment within 2 hours',
      'Storm damage assessment and documentation',
      'Search and rescue support operations',
      'Flood and wildfire monitoring',
      'Insurance claim documentation',
      'Real-time data streaming to command centers',
    ],
    benefits: [
      { title: 'Rapid Response', body: 'Deploy within 2 hours' },
      { title: 'Situational Awareness', body: 'Real-time intelligence' },
      { title: 'Faster Recovery', body: 'Prioritize repairs' },
      { title: 'Insurance Support', body: 'Detailed documentation' },
    ],
  },
];

export const industries = [
  {
    icon: 'plug',
    title: 'Electric Utilities',
    body: 'Transmission and distribution infrastructure inspection and monitoring.',
  },
  {
    icon: 'oil',
    title: 'Oil & Gas',
    body: 'Pipeline monitoring, flare stack inspection, and facility surveillance.',
  },
  {
    icon: 'sun',
    title: 'Renewable Energy',
    body: 'Solar farms and wind turbine inspection and performance monitoring.',
  },
  {
    icon: 'building',
    title: 'Construction',
    body: 'Project monitoring, site mapping, and progress documentation.',
  },
  {
    icon: 'tower',
    title: 'Telecommunications',
    body: 'Cell tower inspection and antenna alignment verification.',
  },
  {
    icon: 'road',
    title: 'Transportation',
    body: 'Bridge inspection, road monitoring, and railway assessment.',
  },
  {
    icon: 'tractor',
    title: 'Agriculture',
    body: 'Crop monitoring, irrigation assessment, and ranch surveys.',
  },
  {
    icon: 'home',
    title: 'Real Estate',
    body: 'Property marketing, development planning, and site documentation.',
  },
];

export const certifications = [
  { icon: 'plane', title: 'FAA Part 107', body: 'All pilots certified' },
  { icon: 'certificate', title: 'OSHA Certified', body: 'Safety compliance' },
  { icon: 'shield', title: 'Fully Insured', body: '$5M liability coverage' },
  { icon: 'award', title: 'AUVSI Member', body: 'Industry association' },
  { icon: 'graduation', title: 'Thermal Certified', body: 'ITC Level 1 thermography' },
  { icon: 'handshake', title: 'BBB Accredited', body: 'A+ rating' },
];

export const serviceCounties = [
  'Bandera County',
  'Bexar County',
  'Kendall County',
  'Kerr County',
  'Medina County',
  'Gillespie County',
  'Comal County',
  'Travis County',
  'Hays County',
  'Guadalupe County',
];

export const faqs = [
  {
    q: 'How quickly can you respond to emergency requests?',
    a: 'We maintain a 24/7 emergency response team that can deploy within 2 hours of your call. Our emergency services are designed for critical situations such as storm damage assessment, infrastructure failures, or urgent inspection needs.',
  },
  {
    q: 'What types of deliverables do you provide?',
    a: 'We provide comprehensive deliverables including high-resolution photos and videos, thermal imaging reports, orthomosaic maps, 3D models, detailed inspection reports with annotations, and custom analytics based on your specific needs. All data is delivered via secure cloud storage within 48-72 hours of inspection.',
  },
  {
    q: 'How much do drone inspections cost?',
    a: 'Pricing scales with scope: powerline inspections start at $400 per mile, substation inspections at $1,500 per site, solar farms at $350 per MW, wind turbines at $450 per turbine, construction monitoring at $750 per visit, and emergency response at $1,500 per deployment. Final pricing depends on site size, sensor requirements, and reporting depth — every project receives a custom quote within 24 hours.',
  },
  {
    q: 'Are you FAA certified and insured?',
    a: 'Yes, all our pilots are FAA Part 107 certified and maintain current certifications. We carry $5 million in liability insurance and are fully compliant with all federal, state, and local regulations. We can provide certificates of insurance for your records.',
  },
  {
    q: 'Do you handle FAA airspace authorization?',
    a: 'Yes. We manage all airspace requirements for every flight, including LAANC authorization for operations in controlled airspace and any waivers a mission may require. Regulatory compliance is part of the service — your team doesn’t need to file anything.',
  },
  {
    q: 'How do you handle data security and privacy?',
    a: 'We take data security seriously. All data is encrypted during transmission and storage. We use secure cloud platforms with SOC 2 compliance, and can accommodate specific security requirements. We sign NDAs as standard practice and can work within your company’s security protocols.',
  },
  {
    q: 'What weather conditions can you fly in?',
    a: 'Our drones can operate in winds up to 33 mph (15 m/s) and light rain conditions. We cannot fly in thunderstorms, heavy rain, or icing conditions for safety reasons. We monitor weather closely and will reschedule if conditions are unsafe, with no cancellation fees for weather-related delays.',
  },
];

// LocalBusiness structured data, preserved from the original static site.
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://banderaskyworks.com/#business',
  name: 'Bandera Skyworks',
  url: 'https://banderaskyworks.com',
  logo: 'https://banderaskyworks.com/assets/images/bsw-logo-new.jpg',
  description:
    'Professional drone inspection services for energy infrastructure, construction monitoring, and commercial applications in Texas Hill Country.',
  telephone: '+1-210-549-7015',
  email: 'info@banderaskyworks.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'TX',
    addressCountry: 'US',
    addressLocality: 'Texas Hill Country',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '29.7267', longitude: '-99.0727' },
  areaServed: [
    'Texas Hill Country',
    'Bandera County',
    'Bexar County',
    'Kendall County',
    'Kerr County',
    'Medina County',
    'Gillespie County',
    'Comal County',
    'Travis County',
    'Hays County',
    'Guadalupe County',
  ],
  serviceType: [
    'Powerline Inspection',
    'Substation Inspection',
    'Solar Farm Inspection',
    'Wind Turbine Inspection',
    'Construction Progress Monitoring',
    'Emergency Response',
    'Aerial Photography',
    'Infrastructure Inspection',
  ],
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-15:00',
  sameAs: ['https://www.instagram.com/banderaskyworks/', 'https://x.com/BanderaSkyworks'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'FAA Part 107 Remote Pilot Certificate',
    credentialCategory: 'Professional License',
  },
};
