import {
  createNewList,
  clearItem,
} from "./components/index.js";
import { saveToStorage, getDataFromStorage } from "./utils/storage.js";
import { listStorageKey } from "./config/listKey.js";

const listItems = getDataFromStorage(listStorageKey);
createNewList(listItems);
clearItem(listItems);

const listInput = document.querySelector("input");
window.onload = listInput.focus();
const button = document.querySelector("button");
button.addEventListener("click", addItem);

function addItem() {
  const idNumber = new Date().getTime();
  const itemValue = listInput.value.trim();

  if (itemValue.length > 1) {
    const newItem = {
      id: idNumber,
      item: itemValue,
    };

    listInput.value = "";
    listInput.focus();
    listItems.push(newItem);
    createNewList(listItems);
    saveToStorage(listStorageKey, listItems);
  }
}