import Link from 'next/link';
import Image from 'next/image';
import type { Pet } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type PetCardProps = {
  pet: Pet;
};

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={pet.imageUrl}
            alt={`A photo of ${pet.name}`}
            fill
            className="object-cover"
            data-ai-hint={pet.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-headline mb-2">{pet.name}</CardTitle>
            <Badge variant="secondary">{pet.type}</Badge>
        </div>
        <p className="text-muted-foreground">{pet.breed}</p>
        <p className="text-sm text-muted-foreground">{pet.age} year{pet.age > 1 ? 's' : ''} old</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href={`/pets/${pet.id}`}>
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
