import Team from '../app';

test('checking the iteration for output to the character', () => {
  const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const char2 = {
    name: 'Маг',
    type: 'Magic',
    health: 40,
    level: 3,
    attack: 50,
    defence: 5,
  };

  const myTeam = new Team();
  myTeam.addAll(char1, char2);

  const iterator = myTeam[Symbol.iterator]();

  // Первый вызов next() должен вернуть первый элемент
  const iterationResult1 = iterator.next();
  expect(iterationResult1.value).toEqual(char1);
  expect(iterationResult1.done).toBeFalsy();

  // Второй вызов next() должен вернуть второй элемент
  const iterationResult2 = iterator.next();
  expect(iterationResult2.value).toEqual(char2);
  // expect(iterationResult2.done).toBeFalsy();

  // Третий вызов next() должен вернуть { value: undefined, done: true }
  const iterationResult3 = iterator.next();
  expect(iterationResult3.value).toBeUndefined();
  expect(iterationResult3.done).toBeTruthy();

  const myTeam2 = new Team();
  myTeam2.add(char1);

  const iterator2 = myTeam2[Symbol.iterator]();

  // Первый вызов next() должен вернуть первый элемент
  const iterationResult4 = iterator2.next();
  expect(iterationResult4.value).toEqual(char1);
  expect(iterationResult4.done).toBeFalsy();

  // Ошибка при повторном добавлении игрока
  const myTeam3 = new Team();
  myTeam3.add(char1);
  expect(() => myTeam3.add(char1)).toThrow('Вы не можете добавить персонажа дважды');
});
