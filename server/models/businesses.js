const businesses = [
  {
    id: 1,
    business_name: 'getea',
    category: 'hospitality',
    phone_number: '07034521998',
    email: 'gatea@mail.com',
    address: '123 jade street',
    city: 'ikeja',
    state: 'lagos',
    description: 'A hotel and suite facility',
    reviews: [
      {
        id: 1,
        name: 'jill',
        review: 'great',
        businessesid: 1
      },
      {
        id: 2,
        name: 'jake',
        review: 'they need to improve',
        businessesid: 1,
      }
    ]
  },
  {
    id: 2,
    business_name: 'chiefs FC',
    category: 'sports',
    phone_number: '07034431099',
    email: 'chiefsfc@gmail.com',
    address: '123 cook street',
    city: 'owerri',
    state: 'imo',
    description: 'A football club',
    reviews: [
      {
        id: 1,
        name: 'stark',
        review: 'good',
        businessesid: 2
      },
      {
        id: 2,
        name: 'drake',
        review: 'Bad',
        businessesid: 2,
      }
    ]
  }
];

export default businesses;
