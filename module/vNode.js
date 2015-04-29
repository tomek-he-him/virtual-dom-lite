let vNodeProto = {
  tagName: 'DIV',
  children: [],
  type: 'VirtualNode',
  version: '2'
};

export default (element) => {
  let vNode = Object.create(vNodeProto);

  const properties = vNode.properties = {};
  [].slice.call(element.attributes)
    // NOTE: This should be `Array.from`, but there’s no support for that in
    // node 0.12.
    .forEach((attribute) => {
      properties[attribute.name] = attribute.value;
    })
  ;

  if (element.tagName) vNode.tagName = element.tagName;
  return vNode;
};
