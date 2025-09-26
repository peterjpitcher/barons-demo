import type { SeasonKey } from '@/config/seasons';

export const heroSlides = [
  {
    title: 'Gather at The Cricketers',
    message: 'Welcome to The Barons Family experience — a taste of elevated pub dining with warm Horsell hospitality.',
    ctaLabel: 'Explore menus',
    ctaHref: '/menus',
    image: '/hero-cricketers.jpg',
    alt: 'Sunlit dining table carefully set inside The Cricketers with windows onto the garden',
  },
  {
    title: 'Garden pods, all year round',
    message: 'Snuggle into a heated pod for Sunday roasts, celebrations and cosy evenings under the festoon lights.',
    ctaLabel: 'Private pods',
    ctaHref: '/private-hire',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Heated garden pod at dusk with festoon lighting and comfortable seating',
  },
  {
    title: 'Part of the Barons Family',
    message: 'Eleven pubs and cafés across Surrey and Berkshire, united by friendly teams, fresh menus and flexible spaces.',
    ctaLabel: 'Meet the family',
    ctaHref: '/barons-family',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2022/04/Photo-28-04-2022-16-01-15-1920x1080.jpg',
    alt: 'Barons team raising a toast in the garden at sunset',
  },
];

export const quickLinks = [
  {
    label: 'Book a Table',
    href: '/book',
    description: 'Reserve a cosy corner, pods or patio spots.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg',
    alt: 'Restaurant table set for guests inside The Cricketers',
  },
  {
    label: 'View Menus',
    href: '/menus',
    description: 'Seasonal dishes ready to explore.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg',
    alt: 'Selection of roast dishes and vegetables ready to serve',
  },
  {
    label: 'Private Hire',
    href: '/private-hire',
    description: 'Garden Room, pods and tented spaces.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/2-1600x900.jpg',
    alt: 'Stretch tent at The Cricketers decorated for an event',
  },
  {
    label: 'Join the Barons Club',
    href: '/barons-club',
    description: 'Rewards, birthday treats and invites.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg',
    alt: 'Guests chatting and toasting drinks in the garden',
  },
];

export const highlightDishes = [
  {
    name: 'Sunday Carvery',
    description: 'Choice of roasted meats, giant Yorkshire puddings, seasonal veg and vegetarian wellingtons.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg',
    alt: 'Generous Sunday carvery plate with roast meats, potatoes and vegetables',
  },
  {
    name: 'Aromatic Makhani Curry',
    description: 'Creamy tomato sauce with spiced chicken or paneer, fragrant rice and fresh coriander.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2021/12/IMG_3160-960x540.jpeg',
    alt: 'Bowl of aromatic curry with naan and rice on a wooden table',
  },
  {
    name: 'Heated Garden Pods',
    description: 'Six-seat pods with heaters, Bluetooth sound and table service — perfect for celebrations.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Heated dining pod at dusk with guests enjoying drinks',
  },
  {
    name: 'Biscoff Cheesecake',
    description: 'Vegan showstopper draped in caramel sauce, paired with dairy-free vanilla ice cream.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2021/12/IMG_3137-960x540.jpeg',
    alt: 'Dessert plate with Biscoff cheesecake and ice cream',
  },
];


export const galleryImages = [
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-16-00-14-960x540.jpg',
    alt: 'Garden Room at The Cricketers set for a celebration with festoon lighting',
    caption: 'Garden Room celebrations',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg',
    alt: 'Friends enjoying cocktails inside heated pods at dusk',
    caption: 'Pods & terrace evenings',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg',
    alt: 'Interior dining room with natural light and laid tables',
    caption: 'Light-filled dining room',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2022/01/Photo-07-01-2022-10-44-35-960x540.jpg',
    alt: 'Sunday roast spread with meats, vegetables and gravy',
    caption: 'Sunday roast service',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Garden pod exterior lit up with candles and lanterns',
    caption: 'Signature pods',
  },
  {
    src: 'https://assets.baronspubs.com/uploads/sites/2/2021/12/IMG_3160-960x540.jpeg',
    alt: 'Chef plating a main course with precision at the pass',
    caption: 'Chef at the pass',
  },
];

export type SampleEvent = {
  title: string;
  date: string;
  summary: string;
  category: string;
  seasons: SeasonKey[];
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  alt?: string;
};

export const sampleEvents: SampleEvent[] = [
  {
    title: 'Buy One Get One FREE Voucher Sale',
    date: '29 September · 4–8.30pm',
    summary: 'Pick up a GBP 50 dining voucher and receive a bonus GBP 50 voucher on us — exclusive Barons Family offer.',
    category: 'Seasonal Offer',
    seasons: ['classic', 'christmas'],
    ctaLabel: 'Claim voucher',
    ctaHref: '/whats-on',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/Pubs-2025-Voucher-Sale-Poster-440x248.png',
    alt: 'Poster artwork advertising the Barons voucher sale',
  },
  {
    title: 'Horsell Jazz Hounds',
    date: '27 October · 7.30–9.30pm',
    summary: 'Live jazz returns to the Garden Room with small plates, smoky cocktails and a relaxed vibe.',
    category: 'Live Music',
    seasons: ['classic'],
    ctaLabel: 'Book jazz night',
    ctaHref: '/whats-on',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-15-57-17-1600x900.jpg',
    alt: 'Garden Room set for evening live music with candles and tables',
  },
  {
    title: 'Charity Pub Quiz',
    date: 'Fortnightly Tuesdays · 8–10pm',
    summary: 'Elliott’s quiz nights supporting Woking & Sam Beare Hospice — teams of up to six, bar tabs for winners.',
    category: 'Quiz Night',
    seasons: ['classic', 'spring'],
    ctaLabel: 'Reserve your table',
    ctaHref: '/book',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg',
    alt: 'Pub interior with groups of friends enjoying quiz night',
  },
  {
    title: 'Festive Showcase Tasting',
    date: '19 November · 6–8pm',
    summary: 'Preview our Christmas menus with canapés, fizz and décor ideas for your seasonal gathering.',
    category: 'Seasonal Offer',
    seasons: ['christmas'],
    ctaLabel: 'Secure tickets',
    ctaHref: '/whats-on',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/2-1600x900.jpg',
    alt: 'Festive dining table decorated with candles and greenery',
  },
  {
    title: 'Spring Garden Party',
    date: '20 April · 1–5pm',
    summary: 'Live acoustic sets, seasonal spritz bar and sharing boards in the blossom-filled garden.',
    category: 'Spring Feature',
    seasons: ['spring'],
    ctaLabel: 'Plan your party',
    ctaHref: '/private-hire',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg',
    alt: 'Springtime garden celebration with guests raising drinks',
  },
  {
    title: 'Fizz Friday Garden Sessions',
    date: 'Every Friday · 5–9pm',
    summary: 'Live DJ, sharing boards and two-for-one English sparkling wine to welcome the weekend.',
    category: 'Weekly Ritual',
    seasons: ['classic', 'spring'],
    ctaLabel: 'Reserve a pod',
    ctaHref: '/book',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2022/08/Photo-12-08-2022-19-03-32-440x248.jpg',
    alt: 'Outdoor table with fizz and sharing boards at dusk',
  },
  {
    title: 'Family Pizza Sundays',
    date: 'Sundays · 12–6pm',
    summary: 'Build-your-own pizzas for kids, Aperol towers for grown-ups and lawn games across the terrace.',
    category: 'Family Favourite',
    seasons: ['classic', 'spring'],
    ctaLabel: 'See pizza shack menu',
    ctaHref: '/menus',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Family gathered around a pizza shack table enjoying slices',
  },
  {
    title: 'Chef’s Table: Sussex Estates Wine Dinner',
    date: '7 February · 7–10pm',
    summary: 'Five courses from Chef Ellie paired with boutique English wines, hosted in the Garden Room.',
    category: 'Chef Series',
    seasons: ['classic'],
    ctaLabel: 'Join the waitlist',
    ctaHref: '/barons-club',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2021/12/IMG_3160-960x540.jpeg',
    alt: 'Close-up of plated main course with wine glass in foreground',
  },
];

export const privateSpaces = [
  {
    name: 'The Garden Room',
    capacity: 'Seats 28 · Receptions up to 100',
    blurb: 'Light-filled room overlooking the garden with exclusive patio access, Bluetooth sound and styling options.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/Photo-28-04-2022-15-57-17-1600x900.jpg',
    alt: 'Garden Room set for a private celebration with long tables',
  },
  {
    name: 'Pods & Umbrella Terrace',
    capacity: 'Pods of 6 · Up to 30 combined',
    blurb: 'Heated pods and a stretch umbrella create a flexible outdoor lounge with zero hire fee (deposit applies).',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/1-1600x900.jpg',
    alt: 'Row of heated dining pods under festoon lights in the evening',
  },
  {
    name: 'Under the Tent',
    capacity: 'Seats 40 · Standing 60',
    blurb: 'All-weather marquee-style space with festoon lighting, close to the outside bar for easy service.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/2-1600x900.jpg',
    alt: 'Stretch tent event space with styled tables and lighting',
  },
  {
    name: 'Restaurant Nooks',
    capacity: 'Clusters of 12–20',
    blurb: 'Semi-private spaces inside the pub for intimate dinners, tasting menus or brunch clubs.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg',
    alt: 'Cosy dining nook with upholstered seating and warm lighting',
  },
  {
    name: 'The Snug',
    capacity: 'Up to 12 guests',
    blurb: 'Tucked beside the fireplace with heritage artwork and soft seating, ideal for elevated tasting menus.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1280x720.jpg',
    alt: 'Intimate snug space with banquette seating and open fire',
  },
  {
    name: 'The Willow Lawn',
    capacity: 'Outdoor receptions up to 120',
    blurb: 'Blank-canvas lawn framed by mature willows — perfect for stretch tents, lawn games and summer celebrations.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2025/09/3-1600x900.jpg',
    alt: 'Lawn with festoon lighting ready for an outdoor reception',
  },
];

export const familyVenues = [
  {
    name: 'The Star · Leatherhead',
    description: 'Dog-friendly pub with a sunny garden and play area — perfect for family get-togethers.',
    image: 'https://assets.baronspubs.com/uploads/sites/3/2019/01/Barons-Pub-Company-The-Star-8-640x360.jpg',
    alt: 'Exterior of The Star pub with guests dining outdoors',
  },
  {
    name: 'The Bletchingley Arms · Bletchingley',
    description: 'Village favourite with outdoor huts, pods and a lively community programme.',
    image: 'https://assets.baronspubs.com/uploads/sites/7/2019/03/Barons-pub-Company-Bletchingley-Arms-5.jpg',
    alt: 'Bletchingley Arms exterior with pod seating in the garden',
  },
  {
    name: 'The Curious Pig · Copthorne',
    description: 'Latest Barons addition with boutique bedrooms and all-day dining.',
    image: 'https://assets.baronspubs.com/uploads/sites/8/2018/09/black-boy-interior-1-2.jpg',
    alt: 'Stylish Barons pub interior with rich colours and seating',
  },
  {
    name: 'The Inn at West End · West End',
    description: 'Boutique rooms, grapevine courtyard and breakfasts from 7am for locals on the go.',
    image: 'https://assets.baronspubs.com/uploads/sites/10/2019/02/inn-westend-interior-front.jpg',
    alt: 'Inn at West End interior with natural light and laid tables',
  },
  {
    name: 'Heather Farm Café · Horsell Common',
    description: 'Lakeside café with walks, brunch and plenty of space for four-legged friends.',
    image: 'https://assets.baronspubs.com/uploads/sites/2/2020/02/Barons-Pub-Company-Cricketers-exterior-22-960x540.jpg',
    alt: 'Wide view of The Cricketers exterior and garden seating',
  },
  {
    name: 'The Crown & Cushion · Minley',
    description: 'Country coaching inn with rustic beams, log fires and live music Thursdays.',
    image: 'https://assets.baronspubs.com/uploads/sites/6/2019/01/Barons-Pub-Company-Crown-and-Cushion-1.jpg',
    alt: 'Rustic interior at the Crown & Cushion with timber beams',
  },
  {
    name: 'The Horseshoe · Warlingham',
    description: 'Fresh pizzas, garden huts and a buzzing weekend brunch service.',
    image: 'https://assets.baronspubs.com/uploads/sites/5/2019/01/Barons-pub-Company-The-Horseshoe-14-640x360.jpg',
    alt: 'Horseshoe pub garden with covered huts',
  },
  {
    name: 'The Jovial Sailor · Ripley',
    description: 'Riverside walks, dog-friendly bar, and a newly refreshed terrace.',
    image: 'https://assets.baronspubs.com/uploads/sites/9/2019/02/jovial-sailor-bar-1.jpg',
    alt: 'Bar area of the Jovial Sailor with rustic styling',
  },
  {
    name: 'The Rose & Crown · Thorpe',
    description: 'Thatched gem with private huts, play area and hearty Sunday roasts.',
    image: 'https://assets.baronspubs.com/uploads/sites/4/2018/10/rose-and-crown-huts-1-640x360.jpg',
    alt: 'Rose & Crown garden huts at twilight',
  },
  {
    name: 'The Shinfield Arms · Shinfield',
    description: 'Open kitchen, craft beer rotation and a relaxed coworking-friendly lounge.',
    image: 'https://assets.baronspubs.com/uploads/sites/8/2018/09/black-boy-interior-1-2.jpg',
    alt: 'Shinfield Arms dining room with modern furnishings',
  },
  {
    name: 'Meade Hall · Chobham',
    description: 'Grade II listed banqueting hall for weddings, medieval feasts and grand celebrations.',
    image: 'https://assets.meadehall.co.uk/uploads/2021/03/Meade-Hall-wedding-set-up-9-440x248.jpg',
    alt: 'Meade Hall wedding setup with long banqueting tables',
  },
];

export const testimonials = [
  {
    quote: 'Great staff, lovely food and beautiful building. The beer garden has plenty of room for the children to play. Ideal!',
    context: 'Google Review · August 2025',
  },
  {
    quote: 'We booked the Garden Room and terrace for a party and had a wonderful time. The team were totally flexible to our requirements.',
    context: 'Private hire guest · May 2025',
  },
  {
    quote: 'Quizmaster Elliott always brings the energy — great cause, great food, great night out.',
    context: 'Charity Quiz regular',
  },
];

export const contactDetails = {
  address: 'Horsell Birch, Woking, Surrey GU21 4XB',
  phone: '01483 762363',
  email: 'manager.thecricketers@baronspubs.com',
  openingHours: ['Mon–Sat · 11:00am – 11:00pm', 'Sun · 11:00am – 10:30pm'],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/thecricketershorsell/' },
    { label: 'Facebook', href: 'https://www.facebook.com/crickshorsell' },
  ],
};

export const locationHighlights = [
  '5 minutes from Horsell Common for pre-lunch strolls (AllTrails route coming soon).',
  'Heated pods and tented seating make alfresco dining effortless year-round.',
  'Dogs welcome in the bar, garden and pods with water bowls & biscuits ready.',
];

export const bookingFaqs = [
  {
    question: 'Do you take walk-ins?',
    answer: 'Absolutely — we always keep a portion of the bar and garden pods available for walk-in guests. Booking guarantees your preferred space.',
  },
  {
    question: 'Can I bring the dog?',
    answer: 'Dogs are welcome in the bar, terrace and pods. Let us know in the notes and we will have water bowls and biscuits ready.',
  },
  {
    question: 'How long is the table held?',
    answer: 'We hold bookings for 15 minutes. If you’re running late give the team a call and we’ll do our best to keep the table.',
  },
  {
    question: 'Is there a deposit for pods?',
    answer: 'Pods require a GBP 25 deposit which is fully redeemable against your final bill. For peak dates it increases to GBP 50.',
  },
];

export const bookingOccasions = [
  'Casual lunch',
  'Celebration dinner',
  'Date night',
  'Family gathering',
  'Business meeting',
  'Sunday carvery',
];

export const bookingAreas = ['Main restaurant', 'Garden pod', 'Terrace umbrella', 'Bar', 'Garden Room'];

export const hireOccasions = ['Birthday celebration', 'Wedding after party', 'Corporate away day', 'Charity fundraiser', 'Life celebration', 'Children’s party'];

export const hireBudgets = ['Under £500', '£500 – £1,000', '£1,000 – £2,000', '£2,000+'];

export const hireTimings = ['Breakfast / morning', 'Lunch', 'Afternoon tea', 'Evening', 'Full day'];

export const teamContacts = [
  {
    role: 'General Manager',
    name: 'Ellie Blackburn',
    email: 'ellie.blackburn@baronspubs.com',
    phone: '01483 762363',
  },
  {
    role: 'Events & Private Hire',
    name: 'Mark Lamont',
    email: 'events.thecricketers@baronspubs.com',
    phone: '01483 762363',
  },
  {
    role: 'Barons Family Support',
    name: 'Barons Guest Services',
    email: 'hello@baronspubs.com',
    phone: '01252 783553',
  },
];

export const newsletterInterests = [
  'Seasonal menus',
  'Live music & entertainment',
  'Family activities',
  'Wine & spirits tastings',
  'Exclusive offers',
  'Private hire news',
];

export const newsletterVenues = ['The Cricketers', 'Any Barons pub nearby', 'Heather Farm Café', 'Pods & outdoor dining', 'Staycations'];

export const loyaltyVenues = [
  'The Cricketers · Horsell',
  'The Star · Leatherhead',
  'The Bletchingley Arms · Bletchingley',
  'The Jovial Sailor · Ripley',
  'The Horseshoe · Warlingham',
  'The Crown & Cushion · Minley',
  'The Inn at West End · West End',
];

export const pressHighlights = [
  'Surrey Life: “The Cricketers brings the magic back to pub dining with its heated pods.”',
  'Muddy Stilettos: “Private hire perfection — flexible spaces and joyful hosts.”',
  'The Times (Weekend): “One of Surrey’s best Sunday roasts — don’t miss the cauliflower cheese.”',
];

export const baronsStats = [
  { label: 'Venues across Surrey & Berkshire', value: '11' },
  { label: 'Pods & huts available to book', value: '36' },
  { label: 'Barons Club members', value: '48k+' },
  { label: 'Local suppliers partnered with', value: '72' },
];

export const chefNotes = [
  'Our sourdough pizza dough proves for 48 hours for extra flavour and crunch.',
  'Sunday roasts use Red Tractor beef and free-range chicken delivered every morning.',
  'Ask about the seasonal low & no list — we shake zero-proof spritzes with house cordials.',
  'Vegetarian and vegan dishes are curated with feedback from the Barons Veg Society focus group.',
];
