import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";

class CharactersList extends Component {
  characters;

  constructor(parentElement, characters) {
    super(parentElement, "ul", "characters-list row list-unstyled");
    this.characters = characters;

    this.renderhtml();
  }

  renderhtml() {
    this.characters.forEach((character) => {
      new CardComponent(this.element, character);
    });
  }
}

export default CharactersList;
