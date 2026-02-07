import type { ImageMetadata } from 'astro';
import bakirImage from '../../assets/bakir.png';
import brassImage from '../../assets/brass.jpg';
import geridonusumImage from '../../assets/geridonusum.png';
import stainlessChromeImage from '../../assets/stainlessChrome.png';

export type GalleryItem = {
  id: string;
  ratio: 'wide' | 'square' | 'tall';
  image: ImageMetadata;
};

export const galleryItems: GalleryItem[] = [
  { id: 'copper', ratio: 'square', image: bakirImage },
  { id: 'brass', ratio: 'square', image: brassImage },
  { id: 'chrome', ratio: 'tall', image: stainlessChromeImage },
  { id: 'yard', ratio: 'wide', image: geridonusumImage }
];
