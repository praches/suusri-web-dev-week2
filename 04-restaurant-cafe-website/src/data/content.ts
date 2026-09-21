export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'starters' | 'mains' | 'desserts' | 'drinks'
  tags: string[]
  image: string
}

export interface Special {
  id: string
  name: string
  description: string
  chef: string
  price: number
  image: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
}

export interface Review {
  id: string
  name: string
  role: string
  rating: number
  text: string
  date: string
}

export const menuItems: MenuItem[] = [
  {
    id: 's1',
    name: 'Seared Scallops',
    description: 'Pan-seared diver scallops, cauliflower purée, brown butter, crispy capers',
    price: 24,
    category: 'starters',
    tags: ['Signature', 'GF'],
    image: 'https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 's2',
    name: 'Truffle Burrata',
    description: 'Creamy burrata, black truffle shavings, heirloom tomatoes, basil oil, sourdough crisps',
    price: 18,
    category: 'starters',
    tags: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/24186303/pexels-photo-24186303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 's3',
    name: 'Smoked Beet Tartare',
    description: 'Slow-smoked beets, horseradish cream, pickled shallots, dill, rye crisp',
    price: 16,
    category: 'starters',
    tags: ['Vegan', 'GF'],
    image: 'https://images.pexels.com/photos/24186308/pexels-photo-24186308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 's4',
    name: 'Lobster Bisque',
    description: 'Maine lobster, cognac cream, tarragon, finished with armagnac',
    price: 22,
    category: 'starters',
    tags: ['Signature'],
    image: 'https://images.pexels.com/photos/27381535/pexels-photo-27381535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'm1',
    name: 'Dry-Aged Ribeye',
    description: '45-day dry-aged ribeye, bone marrow butter, charred shallots, red wine jus',
    price: 52,
    category: 'mains',
    tags: ['Signature', 'GF'],
    image: 'https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'm2',
    name: 'Miso Glazed Salmon',
    description: 'Atlantic salmon, white miso glaze, charred bok choy, jasmine rice, yuzu kosho',
    price: 38,
    category: 'mains',
    tags: ['GF'],
    image: 'https://images.pexels.com/photos/29168406/pexels-photo-29168406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'm3',
    name: 'Herb Crusted Lamb',
    description: 'Rack of lamb, rosemary crust, ratatouille, lamb jus, mint oil',
    price: 46,
    category: 'mains',
    tags: ['Signature'],
    image: 'https://images.pexels.com/photos/24186393/pexels-photo-24186393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'm4',
    name: 'Wild Mushroom Risotto',
    description: 'Carnaroli rice, porcini, truffle pecorino, thyme, aged parmesan',
    price: 32,
    category: 'mains',
    tags: ['Vegetarian', 'GF'],
    image: 'https://images.pexels.com/photos/7627441/pexels-photo-7627441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'd1',
    name: 'Dark Chocolate Délice',
    description: '70% Valrhona chocolate, salted caramel, hazelnut praline, gold leaf',
    price: 16,
    category: 'desserts',
    tags: ['Signature'],
    image: 'https://images.pexels.com/photos/13878326/pexels-photo-13878326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'd2',
    name: 'Mille-Feuille',
    description: 'Vanilla custard, caramelized blueberries, pistachio crumble, lavender honey',
    price: 14,
    category: 'desserts',
    tags: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/8738018/pexels-photo-8738018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'd3',
    name: 'Crème Brûlée',
    description: 'Tahitian vanilla bean, burnt sugar crust, seasonal berry compote',
    price: 12,
    category: 'desserts',
    tags: ['GF'],
    image: 'https://images.pexels.com/photos/35005903/pexels-photo-35005903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'dr1',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon, applewood smoke, demerara, orange bitters, brandied cherry',
    price: 18,
    category: 'drinks',
    tags: ['Signature'],
    image: 'https://images.pexels.com/photos/29748124/pexels-photo-29748124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'dr2',
    name: 'Garden Spritz',
    description: 'Elderflower, prosecco, cucumber, basil, soda, dehydrated lime',
    price: 16,
    category: 'drinks',
    tags: ['Vegan'],
    image: 'https://images.pexels.com/photos/31057722/pexels-photo-31057722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'dr3',
    name: 'Saffron Sour',
    description: 'Gin, saffron syrup, lemon, egg white, cardamom mist',
    price: 17,
    category: 'drinks',
    tags: ['Signature'],
    image: 'https://images.pexels.com/photos/6416555/pexels-photo-6416555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'dr4',
    name: 'Citrus Negroni',
    description: 'Campari, sweet vermouth, gin, blood orange, rosemary flame',
    price: 18,
    category: 'drinks',
    tags: [],
    image: 'https://images.pexels.com/photos/36117948/pexels-photo-36117948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export const specials: Special[] = [
  {
    id: 'sp1',
    name: 'Wagyu Tasting Flight',
    description: 'Three cuts of A5 Japanese wagyu — tenderloin, ribeye, and striploin — each paired with a complementary reduction. A once-in-a-lifetime tasting experience.',
    chef: 'Chef Marcus Laurent',
    price: 145,
    image: 'https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sp2',
    name: 'Ocean Symphony',
    description: 'A five-course seafood journey: oysters, caviar, lobster, turbot, and sea bass — each prepared with a distinct technique and seasonal accompaniment.',
    chef: 'Chef Elena Vasquez',
    price: 120,
    image: 'https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sp3',
    name: 'Forest Forage',
    description: 'An eight-course plant-based tasting menu celebrating wild mushrooms, truffles, and foraged herbs. Seasonal, sustainable, entirely unforgettable.',
    chef: 'Chef David Chen',
    price: 95,
    image: 'https://images.pexels.com/photos/7627441/pexels-photo-7627441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/34874927/pexels-photo-34874927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxurious dining table setup with candlelight' },
  { id: 'g2', src: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chef plating a gourmet dish' },
  { id: 'g3', src: 'https://images.pexels.com/photos/6839656/pexels-photo-6839656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Romantic candlelit dinner' },
  { id: 'g4', src: 'https://images.pexels.com/photos/29168406/pexels-photo-29168406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Grilled salmon with cherry tomatoes' },
  { id: 'g5', src: 'https://images.pexels.com/photos/24186393/pexels-photo-24186393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Whole cooked chicken on dark plate' },
  { id: 'g6', src: 'https://images.pexels.com/photos/24186303/pexels-photo-24186303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Yellow tapas on black plate' },
  { id: 'g7', src: 'https://images.pexels.com/photos/27381535/pexels-photo-27381535.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet soup in porcelain bowl' },
  { id: 'g8', src: 'https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Seafood dish with foam and microgreens' },
  { id: 'g9', src: 'https://images.pexels.com/photos/5865244/pexels-photo-5865244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet dish on dark plate' },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'James Whitmore',
    role: 'Food Critic, The Gazette',
    rating: 5,
    text: 'An extraordinary evening from start to finish. The wagyu flight was transcendent — each cut a masterclass in preparation. This is fine dining at its most honest and ambitious.',
    date: 'Feb 2026',
  },
  {
    id: 'r2',
    name: 'Sophia Reyes',
    role: 'Regular Guest',
    rating: 5,
    text: 'We have celebrated every anniversary here for five years. The staff know our names, our wine, our favorite table. It feels like coming home to the most beautiful home imaginable.',
    date: 'Jan 2026',
  },
  {
    id: 'r3',
    name: 'Daniel Okafor',
    role: 'Wine Enthusiast',
    rating: 5,
    text: 'The sommelier pairing was flawless. Each wine elevated the dish without overpowering it. The Forest Forage menu changed how I think about plant-based cuisine entirely.',
    date: 'Dec 2025',
  },
  {
    id: 'r4',
    name: 'Amara Bishara',
    role: 'Lifestyle Blogger',
    rating: 5,
    text: 'Every detail is considered — the lighting, the pacing, the silence between courses. Ember & Oak is not just a restaurant, it is an experience you carry home with you.',
    date: 'Nov 2025',
  },
]

export const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday – Thursday', time: '5:00 PM – 10:00 PM', closed: false },
  { day: 'Friday – Saturday', time: '5:00 PM – 11:30 PM', closed: false },
  { day: 'Sunday', time: '4:00 PM – 9:00 PM', closed: false },
]
