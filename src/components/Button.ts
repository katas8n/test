import { Component, IComponent } from '../core/Component';

export class Button extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('button');
        this.setClassName('btn');
        this.setEvents({
            click: e => {
                e.preventDefault();
            }
        });
    }
}
