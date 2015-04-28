import test from 'tape-catch';
import isVNode from 'virtual-dom/vnode/is-vnode';
import element from '../test-tools/element';

import vNodify from '../../source/tools/vNodify';

test('tools/vNodify:  ' +
  'Converts an element to a VirtualNode.', (is) => {
    let node1 = vNodify({
      attributes: [
        { name: 'class', value: 'class one two three' },
        { name: 'id', value: 'element-id' }
      ]
    });

    is.ok(isVNode(node1),
      'a duck-typed element'
    );

    is.deepEqual(node1.properties,
      {
        class: 'class one two three',
        id: 'element-id'
      },
      '— getting `properties` right'
    );

    is.equal(node1.tagName,
      'DIV',
      '— returning a <div> by default'
    );

    is.notOk(node1.hasOwnProperty('tagName'),
      '— directly from the prototype'
    );

    let node2 = vNodify(element(
      '<custom-element ' +
        'class="anything" ' +
        'align="left" ' +
        '>' +
      '</custom-element>'
    ));

    is.ok(isVNode(node2),
      'a jsdom custom element'
    );

    is.deepEqual(node2.properties,
      {
        class: 'anything',
        align: 'left'
      },
      '— getting `properties` right'
    );

    is.equal(node2.tagName,
      'CUSTOM-ELEMENT',
      '— returning a <custom-element>'
    );

    is.end();
  }
);
