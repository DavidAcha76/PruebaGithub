'use client';

import { useState, useMemo } from 'react';
import type { Pet } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PetCard from './pet-card';
import { Search, X } from 'lucide-react';

type PetFiltersProps = {
  pets: Pet[];
};

const petTypes: Pet['type'][] = ['Dog', 'Cat', 'Rabbit', 'Bird'];

export default function PetFilters({ pets }: PetFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<Pet['type'] | 'All'>('All');

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      const matchesType = selectedType === 'All' || pet.type === selectedType;
      const matchesSearch = searchTerm.trim() === '' || 
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [pets, searchTerm, selectedType]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
  };

  return (
    <div>
      <div className="bg-card p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant={selectedType === 'All' ? 'secondary' : 'ghost'} onClick={() => setSelectedType('All')}>All</Button>
          {petTypes.map(type => (
            <Button key={type} variant={selectedType === type ? 'secondary' : 'ghost'} onClick={() => setSelectedType(type)}>
              {type}s
            </Button>
          ))}
        </div>
        <Button variant="ghost" onClick={resetFilters} className="text-muted-foreground">
          <X className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      {filteredPets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No pets match your criteria.</p>
        </div>
      )}
    </div>
  );
}
