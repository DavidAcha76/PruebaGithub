import { pets } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Heart, Stethoscope, ListChecks, PawPrint } from 'lucide-react';
import PetCareTips from '@/components/pet-care-tips';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type PetProfilePageProps = {
  params: {
    id: string;
  };
};

export default function PetProfilePage({ params }: PetProfilePageProps) {
  const pet = pets.find(p => p.id === params.id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={pet.imageUrl}
            alt={`A photo of ${pet.name}`}
            fill
            className="object-cover"
            data-ai-hint={pet.imageHint}
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">{pet.type}</Badge>
            <h1 className="text-5xl font-bold font-headline">{pet.name}</h1>
            <p className="text-xl text-muted-foreground">{pet.breed}</p>
            <p className="text-lg text-muted-foreground">{pet.age} year{pet.age > 1 ? 's' : ''} old</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Heart className="text-accent"/> About {pet.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{pet.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Stethoscope className="text-accent"/> Health Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{pet.healthStatus}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><ListChecks className="text-accent" /> Care Needs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {pet.careRequirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-12">
        <PetCareTips species={pet.type} />
      </div>
    </div>
  );
}
