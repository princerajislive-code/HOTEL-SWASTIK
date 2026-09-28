import { ReviewItem, ExperienceItem, DayStageItem, GalleryItem } from '../types';

import heroFacadeImg from '../assets/images/regenerated_image_1790591337375.png';
import heroDuskImg from '../assets/images/swastik_exterior_dusk_1790589776878.jpg';
import deluxeRoomImg from '../assets/images/swastik_deluxe_room_1790587687761.jpg';
import restaurantAmbienceImg from '../assets/images/swastik_restaurant_ambience_1790587699987.jpg';
import diningCuisineImg from '../assets/images/swastik_dining_cuisine_1790587712938.jpg';
import nightGlowImg from '../assets/images/swastik_night_glow_1790587725121.jpg';
import lobbyLoungeImg from '../assets/images/regenerated_image_1790589972097.png';

export const HOTEL_IMAGES = {
  heroFacade: heroFacadeImg,
  heroDusk: heroDuskImg,
  deluxeRoom: deluxeRoomImg,
  restaurantAmbience: restaurantAmbienceImg,
  diningCuisine: diningCuisineImg,
  nightGlow: nightGlowImg,
  lobbyLounge: lobbyLoungeImg,
};

export const HOTEL_INFO = {
  name: 'HOTEL SWASTIK',
  nameDevanagari: 'स्वास्तिक होटल',
  tagline: 'Stay. Dine. Experience.',
  subTagline: 'A refined hospitality experience on Grand Trunk Road, Mohania.',
  address: '5J96+53P, Grand Trunk Rd, Mohania, Bihar 821109',
  plusCode: '5J96+53P',
  city: 'Mohania',
  district: 'Kaimur',
  state: 'Bihar',
  pincode: '821109',
  phone: '+91 8405918172',
  phoneDisplay: '+91 84059 18172',
  whatsappNumber: '917654224826',
  whatsappDisplay: '+91 76542 24826',
  rating: '3.8',
  reviewCount: 140,
  category: 'Hotel & Restaurant',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Swastik+Mohania+Grand+Trunk+Road+Bihar+821109',
  developerCredit: {
    name: 'RoadsideDeveloper',
    whatsapp: '+91 7654224826',
    call: '+91 8405918172',
  }
};

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Puja Rai',
    date: 'Verified Google Review',
    text: 'Deluxe rooms are best with good food and service.',
    rating: 5,
    highlight: 'Deluxe rooms & food',
  },
  {
    id: 'rev-2',
    author: 'Saurabh Singh',
    date: 'Verified Google Review',
    text: 'We ordered less spicy food items.',
    rating: 4,
    highlight: 'Customized dining',
  },
  {
    id: 'rev-3',
    author: 'Debasis Karmakar',
    date: 'Verified Google Review',
    text: 'This is a budget hotel that offers some amenities',
    rating: 4,
    highlight: 'Budget comfort on GT Road',
  },
];

export const SWASTIK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'stay',
    number: '01',
    title: 'Stay',
    subtitle: 'Comfortable Hotel Accommodation',
    description: 'Thoughtfully maintained rooms crafted for highway travelers, visiting families, and executives seeking peaceful rest along the Grand Trunk Road.',
    image: deluxeRoomImg,
    altText: 'Hotel Swastik deluxe accommodation with warm ambient lighting',
  },
  {
    id: 'dine',
    number: '02',
    title: 'Dine',
    subtitle: 'Food and Dining Experience',
    description: 'Freshly prepared vegetarian and non-vegetarian selections made with care, offering comforting flavors and custom preparations according to guest preferences.',
    image: diningCuisineImg,
    altText: 'Traditional Indian dining at Hotel Swastik restaurant',
  },
  {
    id: 'gather',
    number: '03',
    title: 'Gather',
    subtitle: 'Space for Guests & Families',
    description: 'Welcoming dining halls and reception areas accommodating travelers, family stopovers, and small gatherings with attentive personal service.',
    image: restaurantAmbienceImg,
    altText: 'Welcoming dining and gathering hall at Hotel Swastik',
  },
  {
    id: 'connect',
    number: '04',
    title: 'Connect',
    subtitle: 'Easy Access from Grand Trunk Road',
    description: 'Prime arterial positioning on NH-19 (GT Road) in Mohania, providing direct vehicular access, spacious parking, and effortless onward transit.',
    image: heroFacadeImg,
    altText: 'Hotel Swastik facade on Grand Trunk Road Mohania',
  },
];

export const DAY_STAGES: DayStageItem[] = [
  {
    id: 'morning',
    stage: 'Morning',
    timeRange: '06:00 AM – 11:00 AM',
    title: 'A Calm Beginning',
    description: 'Golden morning light breaks over Grand Trunk Road. Hot spiced tea, warm breakfast, and a quiet, refreshing start to your journey.',
    image: heroFacadeImg,
    ambience: 'Crisp morning air, fresh chai, daylight glow',
  },
  {
    id: 'afternoon',
    stage: 'Afternoon',
    timeRange: '12:00 PM – 04:30 PM',
    title: 'A Place To Pause',
    description: 'A comforting sanctuary from the highway sun. Cool air-conditioned rooms and freshly cooked lunch to recharge before continuing your travels.',
    image: restaurantAmbienceImg,
    ambience: 'Cool indoor refuge, wholesome lunch, peaceful break',
  },
  {
    id: 'evening',
    stage: 'Evening',
    timeRange: '05:00 PM – 08:30 PM',
    title: 'Golden Hour Hospitality',
    description: 'Warm amber lanterns light up the corridors as dinner preparations begin. The aroma of freshly cooked Indian specialties welcomes weary travelers.',
    image: diningCuisineImg,
    ambience: 'Warm lantern glow, fragrant kitchen, lively gatherings',
  },
  {
    id: 'night',
    stage: 'Night',
    timeRange: '09:00 PM – Midnight',
    title: 'An Evening To Remember',
    description: 'Candlelit tables, tranquil night ambience, and deep, restful sleep in comfortable deluxe rooms while the highway rests.',
    image: nightGlowImg,
    ambience: 'Quiet corridors, soothing shadows, peaceful slumber',
  },
];

export const MENU_CATEGORIES = [
  {
    id: 'indian',
    name: 'Indian Specialties',
    description: 'Aromatic gravies, rich tandoori breads, and fragrant regional preparations.',
    badge: 'Guest Favorite',
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Delights',
    description: 'Pure seasonal vegetables, paneer classics, and slow-simmered lentils made fresh.',
    badge: 'Comfort Classics',
  },
  {
    id: 'non-veg',
    name: 'Non-Vegetarian',
    description: 'Fresh chicken and egg preparations cooked with balanced Indian spices.',
    badge: 'Freshly Prepared',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    description: 'Wok-tossed noodles, fried rice, and savory Indo-Chinese favorites.',
    badge: 'Popular Choice',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Traditional sweets and chilled desserts to complete your meal.',
    badge: 'Sweet Finish',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Kulhad tea, rich filter coffee, fresh lime sodas, and cold soft drinks.',
    badge: 'Highway Refreshment',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hotel Swastik Facade',
    category: 'exterior',
    image: heroFacadeImg,
    caption: 'Prominently situated on Grand Trunk Road in Mohania, Bihar.',
  },
  {
    id: 'gal-2',
    title: 'Deluxe Room Accommodation',
    category: 'rooms',
    image: deluxeRoomImg,
    caption: 'Well-appointed deluxe rooms praised by guests for comfort and service.',
  },
  {
    id: 'gal-3',
    title: 'Restaurant Ambience',
    category: 'dining',
    image: restaurantAmbienceImg,
    caption: 'Warm ambient setting for family dining and highway stopovers.',
  },
  {
    id: 'gal-4',
    title: 'Culinary Selections',
    category: 'dining',
    image: diningCuisineImg,
    caption: 'Freshly cooked Indian preparations with customizable spice levels.',
  },
  {
    id: 'gal-5',
    title: 'Evening Atmosphere',
    category: 'ambience',
    image: nightGlowImg,
    caption: 'Tranquil evening glow and hospitality after sundown.',
  },
  {
    id: 'gal-6',
    title: 'Reception & Hospitality Lounge',
    category: 'ambience',
    image: lobbyLoungeImg,
    caption: 'Warm teak wood, brass accents, and welcoming Indian hospitality.',
  },
];
