import CharactersList from "./components/CharactersList/CharactersList.js";
import characters from "./characters.js";
const app = document.querySelector(".app");

const characterList = new CharactersList(app, characters);
const charterListSelected = document.querySelector(".characters-list");
