export default function updateElement(element, diff) {
  const { patch } = diff['0'];
  for (let attribute in patch) if (patch.hasOwnProperty(attribute)) {
    if (patch[attribute] == null) {
      element.removeAttribute(attribute);
    }
    else element.setAttribute(attribute, patch[attribute]);
  }
}
