import test from 'tape-catch';
import diff from 'virtual-dom/diff';
import h from 'virtual-dom/h';
import isSubset from 'is-subset';

import {vPatch} from '../module/index';

test('vPatch:  ' +
  'Produces a VirtualPatch-compatible object.', (is) => {
    is.ok(
      isSubset(
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
        vPatch({
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
