import { chalk, storage, messages } from "../utils/imports.js";

export function summaryCommand(month = null) {
  const expenses = storage.readStorage();
  let filteredExpenses = expenses;

  if (month == null) {
    // se month non è specificato, mostra tutto
    let totalAmount = 0;
    expenses.forEach((expense) => {
      totalAmount += expense.amount;
    });

    console.log(
      chalk.green(`${messages.Info.TotalExpenses}: €${totalAmount.toFixed(2)}`),
    );
  } else {
    // filtra le spese per il mese specificato
    const monthInt = parseInt(month, 10);
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
      console.error(chalk.red(`${messages.Error.InvalidMonth}`));
      process.exit(1);
    }

    filteredExpenses = expenses.filter((expense) => {
      const expenseMonth = parseInt(expense.date.split("-")[1], 10);
      return expenseMonth === monthInt;
    });
    let totalAmount = 0;
    filteredExpenses.forEach((expense) => {
      totalAmount += expense.amount;
    });

    console.log(
      chalk.green(
        `${messages.Info.TotalExpenses} (${
          messages.Info.Month
        }: ${monthInt}): €${totalAmount.toFixed(2)}`,
      ),
    );
  }
}
