export default (element, vPatch) => {
  const {patch: {attributes}} = vPatch['0'];
  Object.keys(attributes).forEach((attribute) => {
    if (attributes[attribute] == null) element.removeAttribute(attribute);
    else element.setAttribute(attribute, attributes[attribute]);
  });
};
