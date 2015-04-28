import test from 'tape-catch';
import element from '../test-tools/element';

import hashifyAttributes from '../../source/tools/hashifyAttributes';

test('tools/hashifyAttributes:  ' +
  'Converts an element to a list of attributes.', (is) => {
    is.deepEqual(
      hashifyAttributes([
        { name: 'class', value: 'class one two three' },
        { name: 'id', value: 'element-id' }
      ]),
      {
        class: 'class one two three',
        id: 'element-id'
      },
      'on a duck-typed element'
    );

    is.deepEqual(
      hashifyAttributes(element(
        '<div ' +
          'class="anything" ' +
          'align="left" ' +
          '>' +
        '</div>'
      ).attributes),
      {
        class: 'anything',
        align: 'left'
      },
      'on a jsdom element'
    );

    is.end();
  }
);
