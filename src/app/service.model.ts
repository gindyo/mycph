export interface Service {
  name: string;
  description: string;
  imageUrl?: string;
  duration?: string;
  price?: string;
  notes?: string; // Optional note to display with an asterisk at the bottom of the card
}

export interface ServiceCategory {
  category: string;
  description: string;
  services: Service[];
}
