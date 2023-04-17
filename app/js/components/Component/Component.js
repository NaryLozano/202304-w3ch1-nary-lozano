class Component {
  element;
  constructor(parentElement, tagName) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
  }
}

export default Component;
