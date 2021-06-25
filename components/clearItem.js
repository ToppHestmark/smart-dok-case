import { listStorageKey } from "../config/listKey.js";
import createNewList from "./createNewList.js";
import { saveToStorage } from "../utils/storage.js";

export default function clearItem(listItems) {
  const trashBtn = document.querySelectorAll("#clear");

  trashBtn.forEach((can) => {
    can.addEventListener("click", removeFromList);
  });

  function removeFromList(event) {
    const itemToBeDelete = parseInt(event.target.dataset.id);

    const newList = listItems.filter((item) => itemToBeDelete !== item.id);
    listItems = newList;

    createNewList(listItems);
    saveToStorage(listStorageKey, listItems);
    clearItem(listItems);
  }
}
