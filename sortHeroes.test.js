import { sortHeroes } from './sortHeroes';

describe('sortHeroes', () => {
  it('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'Warrior', health: 10 },
      { name: 'Mage', health: 100 },
      { name: 'Archer', health: 80 }
    ];
    const sortedHeroes = [
      { name: 'Mage', health: 100 },
      { name: 'Archer', health: 80 },
      { name: 'Warrior', health: 10 }
    ];

    expect(sortHeroes(heroes)).toEqual(sortedHeroes);
  });
});