export type Pet = {
  id: string;
  name: string;
  type: 'Dog' | 'Cat' | 'Rabbit' | 'Bird';
  breed: string;
  age: number; // in years
  imageUrl: string;
  imageHint: string;
  description: string;
  healthStatus: string;
  careRequirements: string[];
};
