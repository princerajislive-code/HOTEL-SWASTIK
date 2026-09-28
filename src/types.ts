export type ThemeMode = 'day' | 'night';

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number; // 1-5
  highlight?: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  altText: string;
}

export interface DayStageItem {
  id: string;
  stage: string;
  timeRange: string;
  title: string;
  description: string;
  image: string;
  ambience: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'rooms' | 'dining' | 'ambience';
  image: string;
  caption: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  serviceType: 'stay' | 'dining' | 'event' | 'general';
  message: string;
}
