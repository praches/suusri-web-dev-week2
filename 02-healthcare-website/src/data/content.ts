import {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Stethoscope,
  Activity,
  Syringe,
  Pill,
  Microscope,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Ambulance,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FlaskConical,
  Scan,
  type LucideIcon,
} from 'lucide-react';

export const HOSPITAL = {
  name: 'MediCare+',
  tagline: 'Advanced Healthcare & Diagnostics',
  hotline: '+1 (800) 555-0199',
  hotlineLabel: '24/7 Emergency Hotline',
  email: 'care@medicareplus.com',
  address: '450 Wellness Avenue, Medical District, New York, NY 10001',
  hours: 'Open 24 Hours · 7 Days a Week',
  socials: { facebook: '#', twitter: '#', instagram: '#', linkedin: '#' },
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_IMAGE =
  'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

export const ABOUT_IMAGE =
  'https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=850&dpr=2';

export const ABOUT_IMAGE_2 =
  'https://images.pexels.com/photos/5722160/pexels-photo-5722160.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2';

export interface Department {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  color: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: Heart,
    description:
      'Comprehensive heart care with state-of-the-art diagnostic and treatment facilities. Our cardiologists specialize in preventive, interventional, and rehabilitative cardiac care.',
    services: ['ECG & Echocardiography', 'Angioplasty & Stenting', 'Cardiac Catheterization', 'Heart Failure Management', 'Pacemaker Implantation', 'Holter Monitoring'],
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: Brain,
    description:
      'Expert diagnosis and treatment of disorders of the nervous system, brain, and spine. We combine advanced imaging with personalized therapy plans.',
    services: ['EEG & Nerve Conduction', 'Stroke Care Unit', 'Epilepsy Management', 'Movement Disorders', 'Neuro Rehabilitation', 'Memory Clinic'],
    color: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    description:
      'Advanced bone, joint, and musculoskeletal care. From sports injuries to joint replacement, our orthopedic team gets you back in motion.',
    services: ['Joint Replacement', 'Sports Injury Care', 'Spine Surgery', 'Arthritis Treatment', 'Fracture Care', 'Physiotherapy'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    icon: Eye,
    description:
      'Complete eye care from routine exams to advanced surgical procedures. Protecting your vision with cutting-edge technology.',
    services: ['Cataract Surgery', 'LASIK & Refractive', 'Glaucoma Treatment', 'Retinal Care', 'Pediatric Eye Care', 'Corneal Transplant'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    description:
      'Compassionate care for infants, children, and adolescents. Our pediatric team provides a warm, child-friendly environment for every visit.',
    services: ['Newborn Care', 'Vaccination Programs', 'Child Nutrition', 'Developmental Assessment', 'Pediatric ER', 'Adolescent Health'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics & Pathology',
    icon: Microscope,
    description:
      'Full-service laboratory and imaging center delivering accurate, timely results. NABL-accredited testing across all specialties.',
    services: ['Blood Tests & Panels', 'MRI & CT Scans', 'X-Ray & Ultrasound', 'Pathology Reports', 'Health Screenings', 'Home Sample Collection'],
    color: 'from-secondary-500 to-teal-600',
  },
];

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  experience: string;
  rating: number;
  image: string;
  bio: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Interventional Cardiologist',
    department: 'Cardiology',
    experience: '15+ Years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/32115905/pexels-photo-32115905.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Leading interventional cardiologist with expertise in complex angioplasty and structural heart disease.',
  },
  {
    id: 'd2',
    name: 'Dr. James Carter',
    specialty: 'Neurologist & Stroke Specialist',
    department: 'Neurology',
    experience: '12+ Years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5531446/pexels-photo-5531446.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Dedicated to advancing stroke care protocols and neurorehabilitation outcomes.',
  },
  {
    id: 'd3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    department: 'Pediatrics',
    experience: '10+ Years',
    rating: 5.0,
    image: 'https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Passionate about child wellness, preventive care, and developmental health.',
  },
  {
    id: 'd4',
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedic Surgeon',
    department: 'Orthopedics',
    experience: '18+ Years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/28755708/pexels-photo-28755708.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Pioneer in minimally invasive joint replacement and sports injury recovery.',
  },
  {
    id: 'd5',
    name: 'Dr. Olivia Bennett',
    specialty: 'Ophthalmologist',
    department: 'Ophthalmology',
    experience: '14+ Years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Specialist in refractive surgery and advanced cataract treatment techniques.',
  },
  {
    id: 'd6',
    name: 'Dr. David Okafor',
    specialty: 'Pathologist & Lab Director',
    department: 'Diagnostics',
    experience: '16+ Years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Ensuring diagnostic excellence with rigorous quality standards and rapid turnaround.',
  },
  {
    id: 'd7',
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiac Surgeon',
    department: 'Cardiology',
    experience: '20+ Years',
    rating: 5.0,
    image: 'https://images.pexels.com/photos/29995617/pexels-photo-29995617.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Renowned for precision in bypass surgery and valve repair procedures.',
  },
  {
    id: 'd8',
    name: 'Dr. Robert Kim',
    specialty: 'Neurosurgeon',
    department: 'Neurology',
    experience: '17+ Years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/7108250/pexels-photo-7108250.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&dpr=2',
    bio: 'Expert in complex spine surgery and minimally invasive neurosurgical techniques.',
  },
];

export interface HealthPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  tests: string[];
  popular?: boolean;
  icon: LucideIcon;
  color: string;
}

export const PACKAGES: HealthPackage[] = [
  {
    id: 'basic',
    name: 'Basic Wellness Check',
    price: 99,
    originalPrice: 149,
    description: 'Essential health screening for overall wellness assessment.',
    tests: ['Complete Blood Count (CBC)', 'Blood Glucose (Fasting)', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Thyroid (T3, T4, TSH)'],
    icon: Activity,
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 'advanced',
    name: 'Advanced Health Package',
    price: 249,
    originalPrice: 349,
    description: 'Comprehensive screening covering all major body systems.',
    tests: ['All Basic Tests Included', 'HbA1c (Diabetes)', 'Vitamin D & B12', 'Iron Studies', 'ECG & Chest X-Ray', 'Ultrasound Abdomen', 'Urine Analysis'],
    popular: true,
    icon: ShieldCheck,
    color: 'from-secondary-500 to-teal-600',
  },
  {
    id: 'premium',
    name: 'Premium Full-Body Check',
    price: 499,
    originalPrice: 699,
    description: 'Complete diagnostic workup with advanced imaging and cardiac screening.',
    tests: ['All Advanced Tests Included', '2D Echo Cardiogram', 'TMT (Treadmill Test)', 'CT Scan (Any One Region)', 'Pulmonary Function Test', 'Hormone Panel', 'Dietitian Consultation'],
    icon: Award,
    color: 'from-accent-500 to-cyan-600',
  },
];

export interface WhyChooseFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const WHY_CHOOSE: WhyChooseFeature[] = [
  {
    icon: Award,
    title: 'Accredited Excellence',
    description: 'NABL & NABH accredited facilities maintaining the highest quality standards in diagnostics and patient care.',
    stat: '15+',
    statLabel: 'Accreditations',
  },
  {
    icon: Users,
    title: 'Expert Specialists',
    description: 'A team of 80+ board-certified doctors across every major specialty, available for consultation.',
    stat: '80+',
    statLabel: 'Specialist Doctors',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock emergency department with rapid response teams and ambulance services.',
    stat: '< 5 min',
    statLabel: 'Response Time',
  },
  {
    icon: ShieldCheck,
    title: 'Patient Safety First',
    description: 'Zero-compromise sterilization protocols and infection control across all departments.',
    stat: '99.9%',
    statLabel: 'Safety Record',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Jennifer Hayes',
    role: 'Cardiac Patient',
    image: 'https://images.pexels.com/photos/14566062/pexels-photo-14566062.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
    quote:
      'The cardiology team saved my life. From the moment I walked into the ER, every single person treated me with incredible care and professionalism. I am forever grateful.',
  },
  {
    id: 't2',
    name: 'Marcus Thompson',
    role: 'Orthopedic Patient',
    image: 'https://images.pexels.com/photos/27544052/pexels-photo-27544052.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
    quote:
      'After my knee replacement surgery, the rehabilitation team had me walking pain-free within weeks. The facilities are world-class and the staff genuinely care about your recovery.',
  },
  {
    id: 't3',
    name: 'Robert Sullivan',
    role: 'Diagnostic Patient',
    image: 'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    rating: 5,
    quote:
      'I booked the Premium Full-Body Check and was impressed by how thorough and efficient everything was. Results came back the next day with a detailed consultation. Highly recommend.',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Patient Rooms',
    category: 'Facilities',
    image: 'https://images.pexels.com/photos/12081340/pexels-photo-12081340.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
  {
    id: 'g2',
    title: 'Advanced Diagnostic Lab',
    category: 'Laboratory',
    image: 'https://images.pexels.com/photos/10514991/pexels-photo-10514991.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
  {
    id: 'g3',
    title: 'Spacious Ward',
    category: 'Facilities',
    image: 'https://images.pexels.com/photos/7335565/pexels-photo-7335565.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
  {
    id: 'g4',
    title: 'Laboratory Equipment',
    category: 'Laboratory',
    image: 'https://images.pexels.com/photos/8442027/pexels-photo-8442027.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
  {
    id: 'g5',
    title: 'Research & Testing',
    category: 'Laboratory',
    image: 'https://images.pexels.com/photos/8533045/pexels-photo-8533045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
  {
    id: 'g6',
    title: 'Private Patient Care',
    category: 'Facilities',
    image: 'https://images.pexels.com/photos/7250797/pexels-photo-7250797.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
  },
];

export interface SymptomItem {
  id: string;
  question: string;
  symptoms: string[];
  recommendation: string;
  severity: 'low' | 'medium' | 'high';
  icon: LucideIcon;
}

export const SYMPTOMS: SymptomItem[] = [
  {
    id: 's1',
    question: 'Chest pain or discomfort?',
    symptoms: ['Pressure or tightness in chest', 'Pain spreading to arm, neck, or jaw', 'Shortness of breath', 'Cold sweat, nausea, or dizziness'],
    recommendation:
      'Chest pain can indicate a cardiac emergency. If pain is severe, persistent, or accompanied by shortness of breath, seek emergency care immediately or call our 24/7 hotline.',
    severity: 'high',
    icon: Heart,
  },
  {
    id: 's2',
    question: 'Severe or persistent headache?',
    symptoms: ['Sudden severe headache (worst ever)', 'Headache with fever or stiff neck', 'Headache after head injury', 'Headache with vision changes or weakness'],
    recommendation:
      'Sudden severe headaches or headaches with neurological symptoms require urgent evaluation. Book a neurology consultation or visit our emergency department.',
    severity: 'high',
    icon: Brain,
  },
  {
    id: 's3',
    question: 'Joint or bone pain?',
    symptoms: ['Pain lasting more than 2 weeks', 'Swelling or redness around joints', 'Difficulty bearing weight', 'Pain that worsens with movement'],
    recommendation:
      'Persistent joint or bone pain may indicate arthritis, injury, or other conditions. Schedule an orthopedic consultation for proper diagnosis and treatment.',
    severity: 'medium',
    icon: Bone,
  },
  {
    id: 's4',
    question: 'Vision changes or eye discomfort?',
    symptoms: ['Sudden blurred or double vision', 'Eye pain or redness', 'Flashes of light or floaters', 'Gradual vision loss',
    ],
    recommendation:
      'Vision changes should not be ignored. Book an ophthalmology appointment for a comprehensive eye examination and appropriate treatment.',
    severity: 'medium',
    icon: Eye,
  },
  {
    id: 's5',
    question: 'Fever or flu-like symptoms?',
    symptoms: ['Temperature above 100.4°F (38°C)', 'Body aches and fatigue', 'Cough or sore throat', 'Symptoms lasting more than 3 days'],
    recommendation:
      'Most fevers resolve with rest and fluids. If fever is very high, lasts more than 3 days, or is accompanied by severe symptoms, consult our general medicine department.',
    severity: 'low',
    icon: Stethoscope,
  },
];

export const STATS = [
  { value: 250000, suffix: '+', label: 'Patients Treated' },
  { value: 80, suffix: '+', label: 'Expert Doctors' },
  { value: 50, suffix: '+', label: 'Specializations' },
  { value: 15, suffix: '+', label: 'Years of Service' },
];

export const FACILITIES = [
  { icon: Ambulance, label: '24/7 Ambulance' },
  { icon: Scan, label: 'MRI & CT Scan' },
  { icon: FlaskConical, label: 'NABL Lab' },
  { icon: Syringe, label: 'Vaccination Center' },
  { icon: Pill, label: 'In-house Pharmacy' },
  { icon: Calendar, label: 'Online Booking' },
];

export const CONTACT_ICONS = {
  Phone,
  Mail,
  MapPin,
  Clock,
};
