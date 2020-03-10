export const props = {
  query: { species: 'Human' },
  selectedCharacter: { id: 1 },
  onSelect: jest.fn()
};

export const data = {
  results: [
    {
      id: 1,
      name: 'Rick'
    },
    {
      id: 2,
      name: 'Morty'
    },
    {
      id: 3,
      name: 'Dr. Nefario'
    }
  ]
};
