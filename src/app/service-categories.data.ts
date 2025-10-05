import { ServiceCategory } from './service.model';

export const serviceCategories: ServiceCategory[] = [

  {
    category: 'Manicure',
    description: 'SERVICES.MANICURE.CATDESC',
    services: [
      {
        name: 'SERVICES.MANICURE.NAME1',
        duration: '1 hour.',
        description: 'SERVICES.MANICURE.DESC1',
        price: '300 kr.',
      },
      {
        name: 'SERVICES.MANICURE.NAME2',
        duration: '1 hr. – 2 hr. and 15 min.',
        description: 'SERVICES.MANICURE.DESC2',
        price: 'from 350 kr.',
      },
      {
        name: 'SERVICES.MANICURE.NAME3',
        duration: '15 minutes',
        description: 'SERVICES.MANICURE.DESC3',
        price: '100 kr.',
      },
      {
        name: 'SERVICES.MANICURE.NAME4',
        duration: '15 minutes',
        description: 'SERVICES.MANICURE.DESC4',
        price: '100 kr.',
      },
    ],
  },
  {
    category: 'Pedicure',
    description: 'SERVICES.PEDICURE.CATDESC',
    services: [
      {
        name: 'SERVICES.PEDICURE.NAME1',
        duration: '40 min – 1 hr.',
        description: 'SERVICES.PEDICURE.DESC1',
        price: 'from 350 kr.',
      },
      {
        name: 'SERVICES.PEDICURE.NAME2',
        duration: '1 hour and 15 minutes – 1 hour and 30 minutes',
        description: 'SERVICES.PEDICURE.DESC2',
        price: 'from 450 kr.',
      },
      {
        name: 'SERVICES.PEDICURE.NAME3',
        duration: '1 hour and 30 minutes – 1 hour and 45 minutes',
        description: 'SERVICES.PEDICURE.DESC3',
        price: 'from 600 kr.',
      },
      {
        name: 'SERVICES.PEDICURE.NAME4',
        duration: '15 minutes',
        description: 'SERVICES.PEDICURE.DESC4',
        price: '100 kr.',
      },
      {
        name: 'SERVICES.PEDICURE.NAME5',
        duration: '15 minutes',
        description: 'SERVICES.PEDICURE.DESC5',
        price: '100 kr.',
      },
    ],
  },
  

  {
    category: 'Reinforcement',
    description: 'SERVICES.REINFORCEMENT.CATDESC',
    services: [
      {
        name: 'SERVICES.REINFORCEMENT.NAME1',
        duration: '1 hour and 45 minutes – 2 hours and 45 minutes',
        description: 'SERVICES.REINFORCEMENT.DESC1',
        price: 'from 600 kr.',
      },
      {
        name: 'SERVICES.REINFORCEMENT.NAME2',
        duration: '2 hrs. – 3 hrs.',
        description: 'SERVICES.REINFORCEMENT.DESC2',
        price: 'from 650 kr.',
      },
      {
        name: 'SERVICES.REINFORCEMENT.NAME3',
        duration: '2 hrs. and 30 mins. – 3 hrs.',
        description: 'SERVICES.REINFORCEMENT.DESC3',
        price: 'from 770 kr.',
      },
      {
        name: 'SERVICES.REINFORCEMENT.NAME4',
        duration: '30 minutes',
        description: 'SERVICES.REINFORCEMENT.DESC4',
        price: '300 kr.',
      },
    ],
  },
  {
    category: 'Brows and Lashes',
    description: 'SERVICES.BROWS.CATDESC',
    services: [
      {
        name: 'SERVICES.BROWS.NAME1',
        duration: '1 hour and 30 minutes.',
        description: 'SERVICES.BROWS.DESC1',
        price: '600 kr.',
      },
      {
        name: 'SERVICES.BROWS.NAME2',
        duration: '20 minutes',
        description: 'SERVICES.BROWS.DESC2',
        price: '150 kr.',
      },
      {
        name: 'SERVICES.BROWS.NAME3',
        duration: '1 hour.',
        description: 'SERVICES.BROWS.DESC3',
        price: '500 kr.',
      },
      {
        name: 'SERVICES.BROWS.NAME4',
        duration: '20 mins – 35 mins',
        description: 'SERVICES.BROWS.DESC4',
        price: 'from 200 kr.',
      },
    ],
  }
  
];
