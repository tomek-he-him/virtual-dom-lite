[![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/virtual-dom-lite.svg?style=flat-square
)](https://coveralls.io/r/tomekwi/virtual-dom-lite
) [![Travis – build status
](https://img.shields.io/travis/tomekwi/virtual-dom-lite/master.svg?style=flat-square
)](https://travis-ci.org/tomekwi/virtual-dom-lite
) [![David – status of dependencies
](https://img.shields.io/david/tomekwi/virtual-dom-lite.svg?style=flat-square
)](https://david-dm.org/tomekwi/virtual-dom-lite
) [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-yellow.svg?style=flat-square
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

– or – in an ES5 environment:

```js
require('virtual-dom-lite/polyfills');
var virtualDOMLite = require('virtual-dom-lite');

var patchElement = virtualDOMLite.patchElement;
var vNode = virtualDOMLite.vNode;
var vPatch = virtualDOMLite.vPatch;
```


2) *Coming soon…*




API
===

*Coming soon…*





License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
