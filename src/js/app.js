export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Вы не можете добавить персонажа дважды');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  [Symbol.iterator]() {
    const arrayCharacters = Array.from(this.members);
    let index = -1;
    return {
      next() {
        index += 1;
        return {
          value: arrayCharacters[index],
          done: index >= arrayCharacters.length,
        };
      },
    };
  }
}
