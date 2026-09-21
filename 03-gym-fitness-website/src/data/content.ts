export interface Program {
  id: string
  name: string
  icon: string
  description: string
  intensity: string
  duration: string
  calories: string
  image: string
}

export interface Trainer {
  id: string
  name: string
  role: string
  specialty: string
  experience: string
  image: string
  socials: { label: string; href: string }[]
}

export interface Plan {
  id: string
  name: string
  monthly: number
  annual: number
  features: string[]
  highlighted: boolean
  badge?: string
}

export interface Facility {
  id: string
  name: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  result: string
  duration: string
  quote: string
  image: string
  rating: number
}

export interface ClassScheduleItem {
  day: string
  time: string
  name: string
  trainer: string
  type: string
  intensity: 'Low' | 'Medium' | 'High'
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const programs: Program[] = [
  {
    id: 'hiit',
    name: 'HIIT Training',
    icon: 'zap',
    description: 'High-intensity intervals that torch calories, boost metabolism, and build explosive power in 45 minutes flat.',
    intensity: 'High',
    duration: '45 min',
    calories: '600+',
    image: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'yoga',
    name: 'Yoga & Mobility',
    icon: 'leaf',
    description: 'Flow through dynamic sequences that build flexibility, core strength, and mental clarity. All levels welcome.',
    intensity: 'Low',
    duration: '60 min',
    calories: '250',
    image: 'https://images.pexels.com/photos/38453215/pexels-photo-38453215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'strength',
    name: 'Strength Training',
    icon: 'dumbbell',
    description: 'Build raw power and lean muscle with progressive overload programming tailored to your body and goals.',
    intensity: 'Medium',
    duration: '55 min',
    calories: '400',
    image: 'https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'cardio',
    name: 'Cardio Blast',
    icon: 'heart',
    description: 'Heart-pumping sessions on premium equipment designed to improve endurance, burn fat, and energize your day.',
    intensity: 'Medium',
    duration: '40 min',
    calories: '500',
    image: 'https://images.pexels.com/photos/6388450/pexels-photo-6388450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

export const trainers: Trainer[] = [
  {
    id: 't1',
    name: 'Marcus Reid',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Hypertrophy',
    experience: '12 yrs',
    image: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
  {
    id: 't2',
    name: 'Elena Vasquez',
    role: 'Yoga & Mobility Director',
    specialty: 'Vinyasa Flow & Recovery',
    experience: '8 yrs',
    image: 'https://images.pexels.com/photos/13451904/pexels-photo-13451904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: [
      { label: 'Instagram', href: '#' },
    ],
  },
  {
    id: 't3',
    name: 'Jake Thompson',
    role: 'HIIT & Conditioning',
    specialty: 'Metabolic Conditioning',
    experience: '6 yrs',
    image: 'https://images.pexels.com/photos/10960029/pexels-photo-10960029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    id: 't4',
    name: 'Sarah Chen',
    role: 'Cardio & Endurance',
    specialty: 'Marathon Prep & Spin',
    experience: '10 yrs',
    image: 'https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'Strava', href: '#' },
    ],
  },
]

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Starter',
    monthly: 29,
    annual: 290,
    features: [
      'Access to gym floor & cardio zone',
      '2 group classes per week',
      'Locker room access',
      'Fitness assessment (quarterly)',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro Athlete',
    monthly: 59,
    annual: 590,
    features: [
      'Unlimited gym & class access',
      'Personal training session (2/mo)',
      'Nutrition consultation',
      'Recovery zone & sauna access',
      'Guest passes (4/mo)',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'elite',
    name: 'Elite Performance',
    monthly: 99,
    annual: 990,
    features: [
      'Everything in Pro Athlete',
      'Weekly 1-on-1 personal training',
      'Custom meal planning',
      'Body composition analysis',
      'Priority class booking',
      'Unlimited guest passes',
    ],
    highlighted: false,
  },
]

export const facilities: Facility[] = [
  { id: 'f1', name: 'Strength Zone', description: '12,000 sq ft of premium free weights, racks, and plate-loaded machines.', icon: 'dumbbell' },
  { id: 'f2', name: 'Cardio Theater', description: '40+ machines with personal screens, streaming, and heart-rate tracking.', icon: 'heart' },
  { id: 'f3', name: 'Functional Studio', description: 'Turf area with sleds, ropes, boxes, and battle ropes for dynamic training.', icon: 'zap' },
  { id: 'f4', name: 'Yoga Sanctuary', description: 'Heated bamboo studio for yoga, Pilates, and mobility flows.', icon: 'leaf' },
  { id: 'f5', name: 'Recovery Lounge', description: 'Sauna, steam room, ice baths, and compression therapy.', icon: 'sparkles' },
  { id: 'f6', name: 'Nutrition Bar', description: 'Fresh protein shakes, pre-workout, and post-workout meals on site.', icon: 'cup' },
]

export const testimonials: Testimonial[] = [
  {
    id: 'ts1',
    name: 'David Kim',
    result: 'Lost 45 lbs',
    duration: '6 months',
    quote: 'I walked in barely able to do a push-up. Six months later I am in the best shape of my life. The coaches actually care about your journey.',
    image: 'https://images.pexels.com/photos/10305231/pexels-photo-10305231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
  },
  {
    id: 'ts2',
    name: 'Aisha Johnson',
    result: 'Gained 12 lbs muscle',
    duration: '4 months',
    quote: 'The strength program is no joke. My squat went from 95 to 225 lbs and I finally feel strong and confident in my body.',
    image: 'https://images.pexels.com/photos/13451904/pexels-photo-13451904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
  },
  {
    id: 'ts3',
    name: 'Robert Hayes',
    result: 'Ran first marathon',
    duration: '8 months',
    quote: 'The cardio coaching took me from couch to marathon in under a year. The community here keeps you accountable every step.',
    image: 'https://images.pexels.com/photos/21633393/pexels-photo-21633393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 5,
  },
]

export const schedule: ClassScheduleItem[] = [
  { day: 'Monday', time: '06:00', name: 'Sunrise HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Monday', time: '12:00', name: 'Lunch Power Lift', trainer: 'Marcus Reid', type: 'Strength', intensity: 'Medium' },
  { day: 'Monday', time: '18:00', name: 'Evening Spin', trainer: 'Sarah Chen', type: 'Cardio', intensity: 'Medium' },
  { day: 'Monday', time: '19:30', name: 'Wind-Down Yoga', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
  { day: 'Tuesday', time: '07:00', name: 'Morning Mobility', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
  { day: 'Tuesday', time: '12:00', name: 'Express HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Tuesday', time: '17:30', name: 'Strength Foundations', trainer: 'Marcus Reid', type: 'Strength', intensity: 'Medium' },
  { day: 'Tuesday', time: '19:00', name: 'Cardio Blast', trainer: 'Sarah Chen', type: 'Cardio', intensity: 'Medium' },
  { day: 'Wednesday', time: '06:00', name: 'Sunrise HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Wednesday', time: '12:00', name: 'Core & Conditioning', trainer: 'Marcus Reid', type: 'Strength', intensity: 'Medium' },
  { day: 'Wednesday', time: '18:30', name: 'Vinyasa Flow', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
  { day: 'Thursday', time: '07:00', name: 'Endurance Run', trainer: 'Sarah Chen', type: 'Cardio', intensity: 'Medium' },
  { day: 'Thursday', time: '12:00', name: 'Express HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Thursday', time: '17:30', name: 'Power Lifting', trainer: 'Marcus Reid', type: 'Strength', intensity: 'High' },
  { day: 'Thursday', time: '19:30', name: 'Restorative Yoga', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
  { day: 'Friday', time: '06:00', name: 'Freaky Friday HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Friday', time: '12:00', name: 'Lunch Spin', trainer: 'Sarah Chen', type: 'Cardio', intensity: 'Medium' },
  { day: 'Friday', time: '18:00', name: 'Strength Circuit', trainer: 'Marcus Reid', type: 'Strength', intensity: 'Medium' },
  { day: 'Saturday', time: '08:00', name: 'Weekend Warrior HIIT', trainer: 'Jake Thompson', type: 'HIIT', intensity: 'High' },
  { day: 'Saturday', time: '09:30', name: 'Open Yoga', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
  { day: 'Saturday', time: '11:00', name: 'Partner Strength', trainer: 'Marcus Reid', type: 'Strength', intensity: 'Medium' },
  { day: 'Sunday', time: '09:00', name: 'Long Run Club', trainer: 'Sarah Chen', type: 'Cardio', intensity: 'Low' },
  { day: 'Sunday', time: '10:30', name: 'Mobility & Recovery', trainer: 'Elena Vasquez', type: 'Yoga', intensity: 'Low' },
]

export const faqs: FAQItem[] = [
  { id: 'q1', question: 'Do I need to be fit to join?', answer: 'Absolutely not. Our members range from complete beginners to competitive athletes. Every program scales to your current level, and our coaches will guide you through a personalized onboarding session to set you up for success.' },
  { id: 'q2', question: 'Can I freeze or cancel my membership?', answer: 'Yes. You can freeze your membership for up to 3 months per year at no cost. Cancellation requires 30 days notice and can be done entirely online — no phone calls or in-person visits required.' },
  { id: 'q3', question: 'Is there a free trial?', answer: 'We offer a complimentary 7-day pass that includes full gym access and unlimited group classes. No credit card required. Just book your trial online or walk in during staffed hours.' },
  { id: 'q4', question: 'Do you offer personal training?', answer: 'Yes. Personal training is included in the Elite Performance plan and available as an add-on for other plans. Sessions are 55 minutes and can be booked 1-on-1 or in small groups of 2-4.' },
  { id: 'q5', question: 'What are your opening hours?', answer: 'We are open 5am to 11pm Monday through Friday, 7am to 9pm on Saturdays, and 8am to 8pm on Sundays. Members can access the gym 24/7 with an Elite Performance plan.' },
  { id: 'q6', question: 'Do you have parking and showers?', answer: 'Yes. We have a free underground car park with 120 spaces, plus secure bike storage. All members get full locker room access with showers, saunas, and towel service.' },
]
