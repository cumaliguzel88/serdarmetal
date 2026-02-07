export type ProcessStep = {
  id: 'contact' | 'pricing' | 'delivery';
  titleKey: string;
  descriptionKey: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 'contact',
    titleKey: 'process.contact.title',
    descriptionKey: 'process.contact.description'
  },
  {
    id: 'pricing',
    titleKey: 'process.pricing.title',
    descriptionKey: 'process.pricing.description'
  },
  {
    id: 'delivery',
    titleKey: 'process.delivery.title',
    descriptionKey: 'process.delivery.description'
  }
];
