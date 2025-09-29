import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceCategory } from '../service.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.html',
  styleUrls: ['./price-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListComponent {
  readonly serviceCategories: ServiceCategory[] = [
    {
      category: 'Open service information',
      services: [
        {
          name: 'Signature dry manicure',
          duration: '1 hr. - 2 hr. and 15 min.',
          description:
            'Cutting the nails, shaping, removing the cuticles by electric nail machine, polishing the surface of the nails by file or applying nail polish, finishing with cream and hand massage',
          price: 'from 350 kr.',
        },
        {
          name: 'Remove gellac/Removing gellac',
          duration: '15 minutes',
          description: '',
          price: '100 kr.',
        },
        {
          name: '1 SOS nail /Repair broken nail',
          duration: '15 minutes',
          description: '',
          price: '100 kr.',
        },
      ],
    },
    {
      category: 'Reinforcement',
      services: [
        {
          name: 'Reinforcement of natural nails short 3mm/ Reinforcement of own nails with gel',
          duration: '1 hour and 45 minutes - 2 hours and 45 minutes',
          description: 'Strengthening of the natural nails with gel',
          price: 'from 600 kr.',
        },
        {
          name: 'Reinforcement of natural nails up to 6mm tip',
          duration: '2 hrs. - 3 hrs.',
          description: '',
          price: 'from 650 kr.',
        },
        {
          name: 'Reinforcement of natural nails 6mm and up length of the tip',
          duration: '2 hrs. and 30 mins. - 3 hrs.',
          description: '',
          price: 'from 770 kr.',
        },
        {
          name: 'Remove of gel or gel extensions nails',
          duration: '30 minutes',
          description: 'Removing the old product and a small manicure',
          price: '300 kr.',
        },
      ],
    },
    {
      category: 'Combi hands and feet',
      services: [
        {
          name: 'Signature dry mani + pedi',
          duration: '2 hours.',
          description: 'Signature dry manicure and dry pedicure',
          price: '700 kr.',
        },
        {
          name: 'Signature dry Manicure and Pedicure +gellac/shellac',
          duration: '2 hrs and 30 mins - 3 hrs and 30 mins',
          description: 'Combo Signature dry Manicure and pedicure and gel lacquer colouring',
          price: 'from 1,100 kr.',
        },
      ],
    },
    {
      category: 'Pedicure',
      services: [
        {
          name: 'Mini pedicure (toes only)',
          duration: '40 min - 1 hr.',
          description:
            'Cleaning the feet with disinfectant, removing the cuticles, cutting the nails, shaping the nails and applying nail polish, finishing with cuticle oil',
          price: 'from 350 kr.',
        },
        {
          name: 'Signature dry pedicure',
          duration: '1 hour and 15 minutes - 1 hour and 30 minutes',
          description:
            'Disinfect the feet with alcohol solution, removing the cuticles and clean the nails from the ptherigium, cutting the nails, shaping the nails, removing the calluses from the heals and applying nail polish, finishing with foot cream and massage',
          price: 'from 450 kr.',
        },
        {
          name: 'SPA Pedicure',
          duration: '1 hour and 30 minutes - 1 hour and 45 minutes',
          description:
            'Signature dry Pedicure, Disinfect the feet with alcohol solution, removing the cuticles and clean the nails from the ptherigium, cutting the nails, shaping the nails, removing the calluses from the heals and applying nail polish, finishing with scrub +mask and cream massage',
          price: 'from 600 kr.',
        },
        {
          name: 'Remove gel polish',
          duration: '15 minutes',
          description: '',
          price: '100 kr.',
        },
        {
          name: '1 SOS gel nail',
          duration: '15 minutes',
          description: '',
          price: '100 kr.',
        },
      ],
    },
    {
      category: 'Rules',
      services: [
        {
          name: "Children's Manicure/Kids manicure with nail polish",
          duration: '30 minutes',
          description: "We don't do shellac or gel on kids under 16 years!!!",
          price: '280 kr.',
        },
      ],
    },
  ];
}
