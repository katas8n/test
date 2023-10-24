import { Component, IComponent } from '../core/Component';

export class Form extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('form');
        this.setClassName('form');
    }
}
