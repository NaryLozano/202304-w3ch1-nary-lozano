import Component from "../Component/Component.js";

class Button extends Component {
  type;
  text;

  constructor(parentElement, text, type) {
    super(parentElement, "button", "character__action btn");
    this.text = text;
    this.type = type;
    this.renderHtml();
  }

  renderHtml() {
    this.element.textContent = this.text;
    this.element.type = this.type;
  }
}

export default Button;
