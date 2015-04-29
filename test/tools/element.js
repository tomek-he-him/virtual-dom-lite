/* jshint -W079 */ // NOTE: “browser: false” works not in v2.7.0

import {jsdom} from 'jsdom';
import domify from 'domify';

const {document} = jsdom().defaultView;

export default (html) => domify(html, document);
