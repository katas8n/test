import './style.css';

import { render, appendElement } from './core/index';

import { Form, Header, Footer, Main } from './components/index';
import { App } from './components/App';

export enum form {
    login = 'login',
    register = 'register'
}

const main = new Main({
    children: [
        new Form({
            type: form.register
        })
    ]
});

const appChildren = [new Header({}), main, new Footer({})];

const app = new App({
    children: appChildren
}).toHTML();

const body = document.getElementsByTagName('body');

appendElement(body[0], app);
