import { toHTML } from './toHTML';

export interface IComponent {
    tagName?: string;
    className?: string;
    children?: object[] | HTMLElement[];
    events?: object[];
    textContent?: string;
    html?: string;
}

export class Component {
    #tagName;
    #className;
    #children;
    #events;
    #textContent;
    #attrs;
    #html;

    constructor({
        tagName,
        className,
        children,
        events,
        textContent,
        html,
        ...attrs
    }: IComponent) {
        this.#tagName = tagName;
        this.#className = className;
        this.#textContent = textContent;
        this.#children = children || [];
        this.#events = events;
        this.#attrs = attrs;
        this.#html = html;
    }

    get attributes() {
        return this.#attrs;
    }

    get html() {
        return this.#html;
    }

    get tagName() {
        return this.#tagName;
    }

    get className() {
        return this.#className;
    }

    get children() {
        return this.#children;
    }

    get events() {
        return this.#events;
    }

    get textContent() {
        return this.#textContent;
    }

    setTagName(tagName: string) {
        this.#tagName = tagName;
    }

    setHTML(html: string) {
        this.#html = html;
    }

    setClassName(className: string) {
        this.#className = className;
    }

    addChildren(children: object[]) {
        for (const child of children) {
            this.#children.push(child);
        }
    }

    setChildren(children: object[]) {
        this.#children = children;
    }

    setEvents(events: object[]) {
        this.#events = events;
    }

    setText(textContent: string) {
        this.#textContent = textContent;
    }

    toHTML() {
        return toHTML(this);
    }
}
