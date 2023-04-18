import Component from "../Component/Component.js";
import King from "../../characters/King/King.js";

class CardComponent extends Component {
  characters;

  constructor(parentElement, characters) {
    super(parentElement, "li", "character col");
    this.characters = characters;
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
    <div class="card character__card">
          <img src="../../img/${
            this.characters.characterData.imageSource
          }" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              this.characters.characterData.name
            } & ${this.characters.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.characters.characterData.age} yrs</li>
                <li>
                  State:${
                    this.characters.isAlive
                      ? `<i class="fas fa-thumbs-up"></i>`
                      : `<i class="fas fa-thumbs-down"></i>`
                  }

                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              ${
                this.characters?.yearsOfReign
                  ? `<li>Years of Reign:${this.characters.yearsOfReign}</li>`
                  : ""
              }
                ${
                  this.characters?.weapon
                    ? `<li>Weapon: ${this.characters.weapon}</li>`
                    : ""
                }
                ${
                  this.characters?.dexterity
                    ? `<li>Dexterity: ${this.characters.dexterity}</li>`
                    : ""
                }
                ${
                  this.characters?.kissAssLevel
                    ? `<li>Kiss Ass level: ${this.characters.kissAssLevel}</li>`
                    : ""
                }
                ${
                  this.characters?.advises
                    ? `<li>Advises to: ${this.characters.advises.characterData.name}</li>`
                    : ""
                }
                ${
                  this.characters?.serves
                    ? `<li>Serves to: ${this.characters.serves.characterData.name}</li>`
                    : ""
                }
                
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          ${
            this.characters.constructor.name === "King"
              ? `<i class="emoji">👑 </i>`
              : ""
          }
          ${
            this.characters.constructor.name === "Advisor"
              ? `<i class="emoji">🎓  </i>`
              : ""
          }
          ${
            this.characters.constructor.name === "Squire"
              ? `<i class="emoji">🛡 </i>`
              : ""
          }
          ${
            this.characters.constructor.name === "Fighter"
              ? `<i class="emoji">🗡 </i>`
              : ""
          }
        </div>
          <div class="communications">
    <p class="communications__text display-1">A sentence someone says</p>
    <img class="communications__picture" src="img/no-one.jpg" alt="Name and family of who speaks" />
  </div>
    `;
  }
}
export default CardComponent;
