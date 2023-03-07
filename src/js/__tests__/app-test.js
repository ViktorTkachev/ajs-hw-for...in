import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const sortedProps = ['name', 'level'];

test('should not modify the original object', () => {
  orderByProps(obj, sortedProps);
  expect(obj).toEqual({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  });
});

test('should sort the specified properties in the correct order', () => {
  const result = orderByProps(obj, sortedProps);
  expect(result[0]).toEqual({ key: 'name', value: 'мечник' });
  expect(result[1]).toEqual({ key: 'level', value: 2 });
});

test('should sort the remaining properties in alphabetical order', () => {
  const result = orderByProps(obj, sortedProps);
  expect(result[2]).toEqual({ key: 'attack', value: 80 });
  expect(result[3]).toEqual({ key: 'defence', value: 40 });
  expect(result[4]).toEqual({ key: 'health', value: 10 });
});

test('should handle a sortProps array with non-existent properties', () => {
  const result = orderByProps(obj, ['name', 'level', 'nonexistent']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
