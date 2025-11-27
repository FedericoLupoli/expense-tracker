import { chalk, storage, messages } from "../utils/imports.js";

export const deleteCommand = (id) => {
  const storageData = storage.readStorage();
  const index = storageData.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log(chalk.red(`${messages.Error.ExpenseNotFound} ${id}.`));
    return;
  }

  storageData.splice(index, 1);
  storage.writeStorage(storageData);
  console.log(
    chalk.green(
      `${messages.Success.ExpenseDeleted} ${messages.Info.ID}: ${id}.`,
    ),
  );
};
