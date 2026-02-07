export type GalleryItem = {
  id: string;
  ratio: 'wide' | 'square' | 'tall';
};

export const galleryItems: GalleryItem[] = [
  { id: 'g-1', ratio: 'wide' },
  { id: 'g-2', ratio: 'square' },
  { id: 'g-3', ratio: 'tall' },
  { id: 'g-4', ratio: 'square' }
];
