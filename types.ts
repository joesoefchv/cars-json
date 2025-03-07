export interface Manufacturer {
  id: string;
  name: string;
  logoUrl: string;
  foundedYear: number;
  headquarters: string;
}

export interface Car {
  id: string;
  name: string;
  description: string;
  horsepower: number;
  isElectric: boolean;
  releaseDate: string;
  imageUrl: string;
  category: string;
  features: string[];
  manufacturer: Manufacturer;
}
