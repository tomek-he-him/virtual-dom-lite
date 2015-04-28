import test from 'tape-catch';
import element from '../test-tools/element';
import h from 'virtual-dom/h';
import diff from 'virtual-dom/diff';
import vNodify from '../../source/tools/vNodify';

import updateElement from '../../source/tools/updateElement';

function dewhitespace(string) {
  return string.replace(/\s/g, '');
}

test('tools/updateElement:  ' +
  'Works.', (is) => {
    let element1 = element(
      '<div ' +
        'class="anything" ' +
        'align="left" ' +
        'id="element-id" ' +
        'data-something="good" ' +
        '>' +
      '</div>'
    );

    updateElement(element1,
      { '0':
        { type: 4,
          patch: {
            class: 'class one two three',
            'data-something': 'even better',
            checked: '',
            id: undefined
          }
        }
      }
    );

    is.equal(dewhitespace(element1.outerHTML),
      dewhitespace(
        '<div ' +
          'class="class one two three" ' +
          'align="left" ' +
          'data-something="even better" ' +
          'checked="" ' +
          '>' +
        '</div>'
      ),
      'with a lightweight duck-typed diff'
    );

    let element2 = element(
      '<div ' +
        'class="anything" ' +
        'align="left" ' +
        'id="element-id" ' +
        'data-something="good" ' +
        '>' +
      '</div>'
    );

    updateElement(element2,
      diff(
        h('div', {
          class: 'anything',
          align: 'left',
          id: 'element-id',
          'data-something': 'good',
        }),
        h('div', {
          class: 'class one two three',
          align: 'left',
          'data-something': 'even better',
          checked: ''
        })
      )
    );

    is.equal(dewhitespace(element2.outerHTML),
      dewhitespace(
        '<div ' +
          'class="class one two three" ' +
          'align="left" ' +
          'data-something="even better" ' +
          'checked="" ' +
          '>' +
        '</div>'
      ),
      'with a real VirtualNode'
    );

    let element3 = element(
      '<div ' +
        'class="anything" ' +
        'align="left" ' +
        'id="element-id" ' +
        'data-something="good" ' +
        '>' +
      '</div>'
    );

    updateElement(element3,
      diff(vNodify(element3),
        vNodify(element(
          '<div ' +
            'class="class one two three" ' +
            'align="left" ' +
            'data-something="even better" ' +
            'checked="" ' +
            '>' +
          '</div>'
        ))
      )
    );

    is.equal(dewhitespace(element3.outerHTML),
      dewhitespace(
        '<div ' +
          'class="class one two three" ' +
          'align="left" ' +
          'data-something="even better" ' +
          'checked="" ' +
          '>' +
        '</div>'
      ),
      'with vNodified DOM elements'
    );

    is.end();
  }
);
