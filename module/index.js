// NOTE: This module is meant for non-ES6 environments. It includes polyfills.
// In an ES6 environment we recommend this instead:
//
//     import {patchElement, vNode, vPatch} from 'virtual-dom-lite/module';
//

import './polyfills';

import patchElement from './patchElement';
import vNode from './vNode';
import vPatch from './vPatch';

export default {patchElement, vNode, vPatch};
