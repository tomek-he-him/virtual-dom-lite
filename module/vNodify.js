import hashifyAttributes from './hashifyAttributes';

let vNodeProto = {
  tagName: 'DIV',
  children: [],
  type: 'VirtualNode',
  version: '2'
};

export default function vNodify(element) {
  let vNode = Object.create(vNodeProto);
  vNode.properties = hashifyAttributes(element.attributes);
  if (element.tagName) vNode.tagName = element.tagName;
  return vNode;
}
