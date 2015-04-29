export default (element, vPatch) => {
  const {patch} = vPatch['0'];
  Object.keys(patch).forEach((attribute) => {
    if (patch[attribute] == null) element.removeAttribute(attribute);
    else element.setAttribute(attribute, patch[attribute]);
  });
};
