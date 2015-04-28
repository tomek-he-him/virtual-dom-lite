import {jsdom} from 'jsdom';
import domify from 'domify';

const {document} = jsdom().defaultView;

export default (html) => domify(html, document);
