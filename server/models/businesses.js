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
  }
];

export default businesses;
