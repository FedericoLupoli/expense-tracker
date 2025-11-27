# Expense Tracker - TODO List

## Core Features (Required)

### 1. Data Storage & Management

- [x] Creare il modulo per la gestione del file JSON (`src/utils/storage.util.js`)
  - [x] Funzione per leggere le spese dal file
  - [x] Funzione per scrivere le spese nel file
  - [x] Generazione automatica degli ID progressivi
  - [x] Gestione della creazione del file se non esiste

### 2. Comando: Add Expense

- [x] Implementare `src/commands/add.command.js`
  - [x] Validare parametri `--description` e `--amount`
  - [x] Validare che l'amount sia un numero positivo
  - [x] Aggiungere la data corrente automaticamente
  - [x] Salvare la spesa nel file JSON
  - [x] Output: "Expense added successfully (ID: X)"

### 3. Comando: List Expenses

- [x] Implementare `src/commands/list.command.js`
  - [x] Leggere tutte le spese dal file
  - [x] Formattare l'output in formato tabella
  - [x] Colonne: ID, Date, Description, Amount
  - [x] Gestire il caso di lista vuota

### 4. Comando: Delete Expense

- [x] Implementare `src/commands/delete.command.js`
  - [x] Validare parametro `--id`
  - [x] Verificare che l'ID esista
  - [x] Rimuovere la spesa dal file
  - [x] Output: "Expense deleted successfully"
  - [x] Error handling per ID non esistente

### 5. Comando: Update Expense

- [x] Implementare `src/commands/update.command.js`
  - [x] Validare parametro `--id` (obbligatorio)
  - [x] Parametri opzionali: `--description`, `--amount`
  - [x] Verificare che l'ID esista
  - [x] Aggiornare solo i campi forniti
  - [x] Validare amount se fornito (numero positivo)
  - [x] Output: "Expense updated successfully (ID: X)"

### 6. Comando: Summary

- [x] Implementare `src/commands/summary.command.js`
  - [x] Calcolare il totale di tutte le spese
  - [x] Output base: "Total expenses: $X"
  - [x] Implementare filtro `--month` (1-12)
  - [x] Filtrare per mese dell'anno corrente
  - [x] Output con mese: "Total expenses for [Month]: $X"

### 7. CLI Setup

- [x] Configurare Commander.js in `bin/index.js`
  - [x] Registrare tutti i comandi
  - [x] Configurare opzioni e flag per ogni comando
  - [x] Gestire errori globali
  - [ ] Messaggi di help per ogni comando
