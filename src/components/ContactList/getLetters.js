const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const other = /^[^a-z]/i;

export default function getLetters(contacts) {
  const findId = predicate => {
    const match = contacts.find(predicate);
    return match && match.id;
  };

  const indexes = letters.map(letter => ({
    letter,
    id: findId(contact => contact.name.first.toUpperCase().startsWith(letter)),
  }));

  indexes.push({
    letter: '#',
    id: findId(contact => other.test(contact.name.first)),
  });

  return indexes;
}
