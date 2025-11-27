import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "bin/data");
const storageFilePath = path.join(dataDir, "storage.json");

export const ensureDataDirExists = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

export const ensureStorageFileExists = () => {
  ensureDataDirExists();
  if (!fs.existsSync(storageFilePath)) {
    fs.writeFileSync(storageFilePath, JSON.stringify([]));
  }
};

export const readStorage = () => {
  ensureStorageFileExists();
  const data = fs.readFileSync(storageFilePath, "utf-8");
  return JSON.parse(data);
};

export const writeStorage = (data) => {
  ensureStorageFileExists();
  fs.writeFileSync(storageFilePath, JSON.stringify(data, null, 2));
};

export const getNextID = () => {
  const storage = readStorage();
  const newId = storage.length > 0 ? storage[storage.length - 1].id + 1 : 1;
  return newId;
};
