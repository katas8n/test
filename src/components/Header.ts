import { Component, IComponent } from '../core/Component';

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
    }
}
