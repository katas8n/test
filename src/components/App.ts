import { Component, IComponent } from '../core/Component';

export class App extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('div');
        this.setClassName('app');
    }
}
