export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getDataFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
