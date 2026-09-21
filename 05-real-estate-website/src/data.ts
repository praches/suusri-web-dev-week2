export interface Property {
  id: string;
  title: string;
  type: 'Villa' | 'Apartment' | 'Commercial' | 'Luxury Estate';
  price: number;
  location: string;
  beds: number;
  baths: number;
  area: number;
  status: 'For Sale' | 'For Rent' | 'New Listing';
  featured: boolean;
  images: string[];
  description: string;
  features: string[];
  agentId: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  image: string;
  sales: number;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
  avgPrice: string;
  properties: number;
  features: string[];
}

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Azure Bay Modern Villa',
    type: 'Villa',
    price: 2850000,
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 4,
    area: 4200,
    status: 'For Sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A breathtaking modern villa perched above the coastline, featuring floor-to-ceiling glass walls, an infinity pool, and seamless indoor-outdoor living spaces. Designed by award-winning architects with the finest materials throughout.',
    features: ['Infinity Pool', 'Smart Home System', 'Wine Cellar', '3-Car Garage', 'Solar Panels', 'Home Theater'],
    agentId: 'a1',
  },
  {
    id: 'p2',
    title: 'The Sapphire Penthouse',
    type: 'Apartment',
    price: 1650000,
    location: 'Manhattan, NY',
    beds: 3,
    baths: 3,
    area: 2800,
    status: 'For Sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7214450/pexels-photo-7214450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'An extraordinary penthouse residence occupying the top floor of a landmark building. Panoramic city views, private terrace, and designer interiors curated with bespoke furnishings and imported marble.',
    features: ['Private Terrace', 'Concierge Service', 'Gym Access', 'Doorman 24/7', 'Wine Room', 'Private Elevator'],
    agentId: 'a2',
  },
  {
    id: 'p3',
    title: 'Heritage Estate Manor',
    type: 'Luxury Estate',
    price: 5400000,
    location: 'Greenwich, CT',
    beds: 7,
    baths: 6,
    area: 8500,
    status: 'For Sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A grand manor set on five acres of manicured grounds, this estate represents the pinnacle of country living. Timeless architecture, formal gardens, a private pond, and a guest house complement the main residence.',
    features: ['5 Acres of Land', 'Guest House', 'Tennis Court', 'Formal Gardens', 'Wine Cellar', 'Library'],
    agentId: 'a3',
  },
  {
    id: 'p4',
    title: 'Skyline Commercial Tower',
    type: 'Commercial',
    price: 3200000,
    location: 'Chicago, IL',
    beds: 0,
    baths: 4,
    area: 12000,
    status: 'For Sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/267501/pexels-photo-267501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7706385/pexels-photo-7706385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A premier commercial property in the heart of the business district. Featuring open floor plans, state-of-the-art building systems, and unparalleled visibility. Ideal for corporate headquarters or mixed-use development.',
    features: ['LEED Certified', 'Underground Parking', 'High-Speed Elevators', 'Backup Generator', 'Conference Center', 'Retail Space'],
    agentId: 'a4',
  },
  {
    id: 'p5',
    title: 'Coastal Contemporary Villa',
    type: 'Villa',
    price: 1950000,
    location: 'Malibu, CA',
    beds: 4,
    baths: 4,
    area: 3600,
    status: 'New Listing',
    featured: true,
    images: [
      'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20200291/pexels-photo-20200291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Where architecture meets the ocean. This contemporary villa offers direct beach access, a resort-style pool, and interiors that blur the line between inside and out. Walls of glass frame the Pacific from every room.',
    features: ['Beach Access', 'Resort Pool', 'Outdoor Kitchen', 'Fireplace', 'Smart Climate', 'Security System'],
    agentId: 'a1',
  },
  {
    id: 'p6',
    title: 'The Metropolitan Loft',
    type: 'Apartment',
    price: 890000,
    location: 'San Francisco, CA',
    beds: 2,
    baths: 2,
    area: 1800,
    status: 'For Sale',
    featured: true,
    images: [
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7546314/pexels-photo-7546314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/27164978/pexels-photo-27164978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A stunning loft in a converted industrial building. Exposed brick, soaring ceilings, and oversized windows define this urban sanctuary. The chef\'s kitchen and spa-like bathroom complete this rare find.',
    features: ['Exposed Brick', '18ft Ceilings', 'Chef\'s Kitchen', 'Private Parking', 'Bike Storage', 'Roof Deck'],
    agentId: 'a2',
  },
  {
    id: 'p7',
    title: 'Hillside Glass Pavilion',
    type: 'Luxury Estate',
    price: 4200000,
    location: 'Aspen, CO',
    beds: 6,
    baths: 5,
    area: 6800,
    status: 'For Sale',
    featured: false,
    images: [
      'https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/28586227/pexels-photo-28586227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A masterpiece of modern architecture nestled in the hills. Floor-to-ceiling glass captures 270-degree mountain views. The estate includes a guesthouse, infinity-edge hot tub, and a private trail system.',
    features: ['Mountain Views', 'Guest House', 'Hot Tub', 'Private Trails', 'Heated Driveway', 'Ski Room'],
    agentId: 'a3',
  },
  {
    id: 'p8',
    title: 'Riverside Garden Villa',
    type: 'Villa',
    price: 1250000,
    location: 'Austin, TX',
    beds: 4,
    baths: 3,
    area: 3200,
    status: 'New Listing',
    featured: false,
    images: [
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7587479/pexels-photo-7587479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'A serene retreat along the river, this villa blends natural materials with modern design. The garden wraps around the home, creating private outdoor rooms. An entertainer\'s dream with indoor-outdoor flow.',
    features: ['River Frontage', 'Garden Rooms', 'Outdoor Fireplace', 'Chef\'s Kitchen', 'Solar Heated Pool', 'EV Charging'],
    agentId: 'a4',
  },
];

export const agents: Agent[] = [
  {
    id: 'a1',
    name: 'Isabella Chen',
    title: 'Senior Luxury Estate Agent',
    phone: '+1 (310) 555-0142',
    email: 'isabella@luxestate.com',
    image: 'https://images.pexels.com/photos/7414901/pexels-photo-7414901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sales: 142,
    rating: 4.9,
  },
  {
    id: 'a2',
    name: 'Marcus Whitfield',
    title: 'Urban Property Specialist',
    phone: '+1 (212) 555-0198',
    email: 'marcus@luxestate.com',
    image: 'https://images.pexels.com/photos/34299170/pexels-photo-34299170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sales: 98,
    rating: 4.8,
  },
  {
    id: 'a3',
    name: 'Sofia Rodriguez',
    title: 'Estate & Country Properties',
    phone: '+1 (203) 555-0177',
    email: 'sofia@luxestate.com',
    image: 'https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sales: 115,
    rating: 5.0,
  },
  {
    id: 'a4',
    name: 'James Harrison',
    title: 'Commercial & Investment Advisor',
    phone: '+1 (312) 555-0163',
    email: 'james@luxestate.com',
    image: 'https://images.pexels.com/photos/34762353/pexels-photo-34762353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    sales: 87,
    rating: 4.7,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily & David Thompson',
    role: 'Home Buyers — Beverly Hills',
    image: 'https://images.pexels.com/photos/6980996/pexels-photo-6980996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote: 'From the first viewing to the closing day, the team made us feel like their only clients. They understood exactly what we wanted and found a home that exceeded every expectation.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Robert Chen',
    role: 'Investor — Manhattan',
    image: 'https://images.pexels.com/photos/3228887/pexels-photo-3228887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote: 'I have worked with many agencies over the years. None come close to the level of market knowledge and negotiation skill I experienced here. They turned a complex purchase into a seamless process.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Margaret Sullivan',
    role: 'Estate Seller — Greenwich',
    image: 'https://images.pexels.com/photos/8834056/pexels-photo-8834056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    quote: 'Selling a family estate is emotional. Their team handled every detail with grace and professionalism. We received an offer above asking within two weeks of listing.',
    rating: 5,
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    id: 'n1',
    name: 'Beverly Hills',
    description: 'Iconic for its tree-lined streets, world-class shopping on Rodeo Drive, and some of the most coveted residential properties in the world.',
    image: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    avgPrice: '$3.2M avg',
    properties: 48,
    features: ['Rodeo Drive', 'Elite Schools', 'Gated Communities', 'Celebrity Neighbors'],
  },
  {
    id: 'n2',
    name: 'Manhattan',
    description: 'The heart of New York City. From penthouses overlooking Central Park to loft living in SoHo, Manhattan offers a lifestyle like nowhere else.',
    image: 'https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    avgPrice: '$1.8M avg',
    properties: 76,
    features: ['Central Park', 'Wall Street', 'Broadway', 'World Dining'],
  },
  {
    id: 'n3',
    name: 'Malibu',
    description: 'Twenty-one miles of scenic beauty. Beachfront estates, private coves, and a relaxed coastal lifestyle just minutes from Los Angeles.',
    image: 'https://images.pexels.com/photos/20200291/pexels-photo-20200291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    avgPrice: '$2.5M avg',
    properties: 32,
    features: ['Beach Access', 'Wine Country', 'Surfrider Beach', 'Coastal Trails'],
  },
  {
    id: 'n4',
    name: 'Greenwich',
    description: 'Connecticut\'s gold coast. Sprawling estates, equestrian properties, and a refined country lifestyle within easy reach of New York City.',
    image: 'https://images.pexels.com/photos/8143683/pexels-photo-8143683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    avgPrice: '$4.1M avg',
    properties: 24,
    features: ['Country Clubs', 'Equestrian', 'Top Schools', 'Marina Access'],
  },
];

export const propertyTypes = ['All', 'Villa', 'Apartment', 'Commercial', 'Luxury Estate'] as const;
export const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under $1M', min: 0, max: 1000000 },
  { label: '$1M - $2M', min: 1000000, max: 2000000 },
  { label: '$2M - $4M', min: 2000000, max: 4000000 },
  { label: '$4M+', min: 4000000, max: Infinity },
];

export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;
  }
  return `$${price.toLocaleString()}`;
};
