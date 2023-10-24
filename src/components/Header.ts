import { Component, IComponent } from '../core/Component';
import { Button } from './Button';

export class Header extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('header');
        this.setClassName('header');
        this.setChildren([
            new Button({
                textContent: 'Login'
            }),
            new Button({
                textContent: 'Register'
            })
        ]);
    }
}
