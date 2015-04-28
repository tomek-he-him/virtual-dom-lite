import test from 'tape-catch';
import diff from 'virtual-dom/diff';
import h from 'virtual-dom/h';
import objectContains from '../test-tools/objectContains';

import vPatchify from '../../source/tools/vPatchify';

test('tools/vPatchify:  ' +
  'Produces a VirtualPatch-compatible object.', (is) => {
    is.ok(
      objectContains(
        diff(
          h('svg', {
            a: '1',
            b: '2',
            'c-c': '3'
          }),
          h('svg', {
            a: '1',
            'c-c': '4',
            d: '4'
          })
        ),
        vPatchify({
          b: undefined,
          'c-c': '4',
          d: '4'
        })
      ),
      'a subset of the original VirtualPatch'
    );

    is.end();
  }
);
