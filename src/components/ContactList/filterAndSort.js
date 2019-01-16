export default function filterAndSort(items, search) {
  const q = search.toLowerCase();

  return items
    .filter(
      contact =>
        contact.name.last.toLowerCase().startsWith(q) ||
        contact.name.first.toLowerCase().startsWith(q),
    )
    .sort((a, b) => a.name.first.localeCompare(b.name.first));
}
