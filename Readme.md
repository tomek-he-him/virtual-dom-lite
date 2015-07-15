[![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/virtual-dom-lite.svg?style=flat-square
)](https://coveralls.io/r/tomekwi/virtual-dom-lite
) [![Travis – build status
](https://img.shields.io/travis/tomekwi/virtual-dom-lite/master.svg?style=flat-square
)](https://travis-ci.org/tomekwi/virtual-dom-lite
) [![David – status of dependencies
](https://img.shields.io/david/tomekwi/virtual-dom-lite.svg?style=flat-square
)](https://david-dm.org/tomekwi/virtual-dom-lite
) [![Stability: unstable
](https://img.shields.io/badge/stability-unstable-yellowgreen.svg?style=flat-square
)](https://nodejs.org/api/documentation.html#documentation_stability_index
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square
)](https://github.com/airbnb/javascript
)



virtual-dom-lite
================

**A partial implementation of [virtual-dom][]**  
**3 separate modules á 200 bytes*.**

**Perfect for libraries.**

<sup>*&emsp;Transpiled to ES5 and minzipped, the last time I checked.</sup>

[virtual-dom]:  https://github.com/Matt-Esch/virtual-dom  "A Virtual DOM and diffing algorithm"




**⚠ Heads up!** This is totally a work in progress. [Thoughts and ideas][] are very welcome.

[Thoughts and ideas]:  https://github.com/tomekwi/virtual-dom-lite/issues




Installation
------------

```sh
$ npm install virtual-dom-lite
```




Usage
-----


1) Import the module:

```js
import {patchElement, vNode, vPatch} from 'virtual-dom-lite/module';
```

– or in ES5:

```js
var virtualDOMLite = require('virtual-dom-lite');

var patchElement = virtualDOMLite.patchElement;
var vNode = virtualDOMLite.vNode;
var vPatch = virtualDOMLite.vPatch;
```


2) Profit!

```js
const div = document.createElement('div');

const vDiv = vNode(div);                 // Compatible virtual-dom as well!
const patch = vPatch({class: 'a b c'});  // Compatible virtual-dom as well!

patchElement(div, patch);
div.outerHTML;
//» <div class="a b c"></div>
```




Caveats
-------

`vNode` and `patchElement` only support the `attributes` property. `vPatch` only sets attributes. If you construct your diffs using virtual-dom, remember about it:

```js
const {diff, h} = require('virtual-dom');

patchElement(div, diff(
  h('div', {class: 'a'}),
  h('div', {class: 'b'})
));  // Won’t work.

patchElement(div, diff(
  h('div', {attributes: {class: 'a'}}),
  h('div', {attributes: {class: 'b'}})
));  // Works!
```




License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
