
export type EventType = 'Casamento' | '15 Anos' | null;
export type VibeType = 'Clássico' | 'Boho' | 'Moderno' | null;

export interface MoodboardResult {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}
