import { listStorageKey } from "../config/listKey.js";
import { saveToStorage } from "../utils/storage.js";

const createNewList = (listItems) => {
  const newListContainer = document.querySelector("#newList-container");
  newListContainer.innerHTML = "";

  listItems.sort((a, b) => b.id - a.id)

  listItems.forEach((listItem) => {
    let checked = "";

    {
      listItem.complete ? (checked = "checked") : "";
    }

    newListContainer.innerHTML += `
      <li>
        <i 
          type="button" 
          id="clear" 
          class="fa fa-trash" 
          data-id="${listItem.id}"
          >
        </i>
        <input ${checked} type="checkbox" data-id="${listItem.id}" />
        <span class="${checked}" > ${listItem.item} </span>
      </li>
    `;
  });

  const checkBoxes = document.querySelectorAll("li input");
  checkBoxes.forEach((box) => {
    box.addEventListener("click", toggleComplete);
  });

  function toggleComplete(event) {
    const id = event.target.dataset.id;
    const checked = event.target.checked;

    const updatedList = updateList(listItems, id, checked);
    saveToStorage(listStorageKey, updatedList);
    createNewList(updatedList);
  }
};

function updateList(listItems, id, checked) {
  const thisItemIndex = listItems.findIndex((item) => {
    const itemId = parseInt(id);
    if (item.id === itemId) return true;
  });

  listItems[thisItemIndex].complete = checked;

  return listItems;
}

export default createNewList;
