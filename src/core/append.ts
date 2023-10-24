export const appendElement = (
    node: HTMLElement,
    element: HTMLElement
): void => {
    node.append(element);
};

export const appendElements = (node: HTMLElement, elements: HTMLElement[]) => {
    node.append(...elements);
};
