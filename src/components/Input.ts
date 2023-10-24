import { Component, IComponent } from '../core/Component';

export class Input extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('input');
        this.setClassName('input');
    }
}
