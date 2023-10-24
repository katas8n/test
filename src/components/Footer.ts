import { Component, IComponent } from '../core/Component';

export class Footer extends Component {
    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        ...attrs
    }: IComponent) {
        super({ tagName, className, children, events, textContent, ...attrs });
        this.setTagName('footer');
        this.setClassName('footer');

        this.setHTML("<h3 class='footer-text'>All rights reserved(c)2023<h3>");
    }
}

export default Footer;
