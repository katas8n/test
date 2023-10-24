import { Component, IComponent } from '../core/Component';
import { Button } from './Button';
import { Input } from './Input';
import { form } from '../main';

interface IForm extends IComponent {
    type: form;
}

export class Form extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        type,
        ...attrs
    }: IForm) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('form');
        this.setClassName('form');

        if (type && type === form.login) {
            this.addChildren([
                new Input({
                    placeholder: 'login',
                    value: 'kirka6061512@icloud.com'
                }),
                new Input({ placeholder: 'password' }),
                new Button({
                    textContent: 'Regiser'
                })
            ]);
        } else if (type && type === form.register) {
            this.addChildren([
                new Input({ placeholder: 'login' }),
                new Input({ placeholder: 'passowrd' }),
                new Input({ placeholder: 'Confirm passowrd' }),
                new Button({
                    textContent: 'Login'
                })
            ]);
        } else {
            new Error('Something ');
        }
    }
}
