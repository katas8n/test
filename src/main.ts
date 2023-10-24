import './style.css';

import {
    Component,
    toHTML,
    render,
    appendElement,
    appendElements
} from './core/index';

import { Form, Header, Footer } from './components/index';

const app = [new Header({}), new Form({}), new Footer({})];

const body = document.getElementsByTagName('body');

body[0].append(...app);
