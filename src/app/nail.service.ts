import { Injectable } from '@angular/core';
import { Service } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class NailService {
  private services: Service[] = [
    {
      name: 'Manicure',
      description: 'A classic manicure with nail shaping, cuticle care, and polish.',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Pedicure',
      description: 'A relaxing pedicure with a foot soak, exfoliation, and polish.',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Gel Manicure',
      description: 'A long-lasting manicure with gel polish that stays shiny for weeks.',
      imageUrl: '/assets/placeholder.png'
    },
    {
      name: 'Nail Art',
      description: 'Custom nail art designs to express your unique style.',
      imageUrl: '/assets/placeholder.png'
    },
  ];

  getServices(): Service[] {
    return this.services;
  }
}
