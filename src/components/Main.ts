import { Component, IComponent } from '../core/Component';

export class Main extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('main');
        this.setClassName('main');
    }
}
