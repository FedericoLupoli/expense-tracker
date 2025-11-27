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

- [ ] Implementare `src/commands/update.command.js`
  - [ ] Validare parametro `--id` (obbligatorio)
  - [ ] Parametri opzionali: `--description`, `--amount`
  - [ ] Verificare che l'ID esista
  - [ ] Aggiornare solo i campi forniti
  - [ ] Validare amount se fornito (numero positivo)
  - [ ] Output: "Expense updated successfully (ID: X)"

### 6. Comando: Summary

- [ ] Implementare `src/commands/summary.command.js`
  - [ ] Calcolare il totale di tutte le spese
  - [ ] Output base: "Total expenses: $X"
  - [ ] Implementare filtro `--month` (1-12)
  - [ ] Filtrare per mese dell'anno corrente
  - [ ] Output con mese: "Total expenses for [Month]: $X"

### 7. CLI Setup

- [ ] Configurare Commander.js in `bin/index.js`
  - [ ] Registrare tutti i comandi
  - [ ] Configurare opzioni e flag per ogni comando
  - [ ] Gestire errori globali
  - [ ] Messaggi di help per ogni comando

## Additional Features (Optional)

### 8. Categories

- [ ] Aggiungere campo `category` alle spese
- [ ] Implementare `--category` nel comando add
- [ ] Implementare `--category` nel comando update
- [ ] Implementare filtro `--category` nel comando list
- [ ] Implementare filtro `--category` nel comando summary

### 9. Budget Management

- [ ] Creare file per la gestione dei budget mensili
- [ ] Implementare comando `set-budget --month X --amount Y`
- [ ] Mostrare warning quando si supera il budget
- [ ] Implementare comando `view-budget --month X`

### 10. Export to JSON

- [ ] Implementare `src/commands/export.js`
- [ ] Convertire le spese in formato JSON
- [ ] Parametro opzionale `--output` per il nome del file
- [ ] Default: `expenses_export.json`
- [ ] Gestire filtri (mese, categoria) nell'export

## Error Handling & Validation

- [ ] Validare tutti gli input utente
- [ ] Gestire importi negativi
- [ ] Gestire ID non esistenti
- [ ] Gestire formati date invalidi
- [ ] Gestire mesi fuori range (1-12)
- [ ] Gestire file JSON corrotto
- [ ] Messaggi di errore chiari e informativi

## Code Quality

- [ ] Modularizzare il codice in funzioni riutilizzabili
- [ ] Aggiungere commenti al codice
- [ ] Utilizzare chalk per output colorati
- [ ] Gestione consistente degli errori
- [ ] Validazione input centralizzata in `src/utils/validation.util.js`

## Testing

- [ ] Testare tutti i comandi manualmente
- [ ] Testare edge cases (importi negativi, ID invalidi, ecc.)
- [ ] Testare con file vuoto
- [ ] Testare con file non esistente
- [ ] Verificare che i comandi di esempio funzionino correttamente

## Documentation

- [ ] Aggiornare README.md con istruzioni d'uso
- [ ] Documentare tutti i comandi disponibili
- [ ] Aggiungere esempi d'uso
- [ ] Documentare il formato del file JSON
- [ ] Aggiungere note per sviluppatori

---

## Priority Order

1. **Phase 1 - MVP**: Task 1, 2, 3, 4, 6, 7 (Core functionality)
2. **Phase 2 - Complete**: Task 5 (Update command)
3. **Phase 3 - Enhanced**: Task 8, 9, 10 (Additional features)
4. **Phase 4 - Polish**: Error Handling, Code Quality, Testing, Documentation

-
