import { pets } from '@/lib/data';
import PetFilters from '@/components/pet-filters';

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Find Your New Best Friend
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our wonderful pets waiting for a loving home. Use the filters below to find your perfect match.
        </p>
      </div>
      <PetFilters pets={pets} />
    </div>
  );
}
