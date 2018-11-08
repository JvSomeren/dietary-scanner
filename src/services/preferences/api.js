const allergies = [
  {
    id: 1,
    name: 'lactose'
  },
  {
    id: 2,
    name: 'peanuts'
  },
  {
    id: 3,
    name: 'nuts'
  },
  {
    id: 4,
    name: 'gluten'
  }
];

export const getAvailableAllergies = () => {
  return new Promise((resolve) => {
    resolve(allergies);
  });
};
