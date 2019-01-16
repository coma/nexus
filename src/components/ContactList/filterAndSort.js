export default function filterAndSort(items, search) {
  const q = search.toLowerCase();

  return items
    .sort((a, b) => a.name.first.localeCompare(b.name.first))
    .filter(
      contact =>
        contact.name.last.toLowerCase().startsWith(q) ||
        contact.name.first.toLowerCase().startsWith(q),
    );
}
