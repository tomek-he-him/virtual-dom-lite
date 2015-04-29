export default (element, patch) => {
  const firstPatch = patch['0'].patch;
  for (let attribute in firstPatch) if (firstPatch.hasOwnProperty(attribute)) {
    if (firstPatch[attribute] == null) {
      element.removeAttribute(attribute);
    }
    else element.setAttribute(attribute, firstPatch[attribute]);
  }
};
