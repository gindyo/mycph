export interface Service {
  name: string;
  description: string;
  imageUrl?: string;
  duration?: string;
  price?: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}
