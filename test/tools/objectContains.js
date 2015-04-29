export default function objectContains(container, contained) {
  for (let key of Object.keys(contained)) {
    const item = contained[key];
    if (!container.propertyIsEnumerable(key)) return false;

    const containerItem = container[key];
    if (item !== null && typeof item === 'object') {
      if (containerItem === null || typeof(containerItem) !== 'object') {
        return false;
      }
      if (!objectContains(containerItem, item)) return false;

    } else if (containerItem !== item) return false;
  }

  return true;
}
