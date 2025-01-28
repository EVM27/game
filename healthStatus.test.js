import { healthStatus } from './healthStatus';

describe('healthStatus', () => {
  it('should return "healthy" when health is greater than 50', () => {
    const character = { name: 'Mage', health: 90 };
    expect(healthStatus(character)).toBe('healthy');
  });

  it('should return "wounded" when health is between 50 and 15', () => {
    const character = { name: 'Warrior', health: 30 };
    expect(healthStatus(character)).toBe('wounded');
  });

  it('should return "critical" when health is less than or equal to 15', () => {
    const character = { name: 'Archer', health: 10 };
    expect(healthStatus(character)).toBe('critical');
  });
});