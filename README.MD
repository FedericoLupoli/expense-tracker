# Expense Tracker 💰

Un'applicazione CLI (Command Line Interface) per tracciare le tue spese personali, costruita con Node.js.

> 📖 [Progetto Originale](https://roadmap.sh/projects/expense-tracker)

## 📋 Indice

- [Expense Tracker 💰](#expense-tracker-)
  - [📋 Indice](#-indice)
  - [✨ Caratteristiche](#-caratteristiche)
  - [🔧 Prerequisiti](#-prerequisiti)
  - [📦 Installazione](#-installazione)
  - [🚀 Utilizzo](#-utilizzo)
    - [Esecuzione diretta](#esecuzione-diretta)
    - [Dopo l'installazione globale](#dopo-linstallazione-globale)
  - [📝 Comandi Disponibili](#-comandi-disponibili)
    - [`add` - Aggiungere una spesa](#add---aggiungere-una-spesa)
    - [`list` - Visualizzare tutte le spese](#list---visualizzare-tutte-le-spese)
    - [Comandi in sviluppo](#comandi-in-sviluppo)
  - [📁 Struttura del Progetto](#-struttura-del-progetto)
  - [🛠️ Tecnologie Utilizzate](#️-tecnologie-utilizzate)
  - [💻 Sviluppo](#-sviluppo)
    - [Struttura dei dati](#struttura-dei-dati)
    - [Contribuire](#contribuire)
    - [Roadmap](#roadmap)
  - [📄 Licenza](#-licenza)
  - [👤 Autore](#-autore)

## ✨ Caratteristiche

- ✅ Aggiungere nuove spese con descrizione e importo
- ✅ Visualizzare tutte le spese registrate
- 🔄 Eliminare spese esistenti (in sviluppo)
- 🔄 Aggiornare spese esistenti (in sviluppo)
- 🔄 Visualizzare il riepilogo delle spese totali (in sviluppo)
- 💾 Archiviazione dati in formato JSON
- 🎨 Output colorato per una migliore leggibilità
- 📅 Tracciamento automatico della data

## 🔧 Prerequisiti

- Node.js (versione 14 o superiore)
- npm o yarn

## 📦 Installazione

1. Clona il repository:

```bash
git clone https://github.com/FedericoLupoli/expense-tracker.git
cd expense-tracker
```

2. Installa le dipendenze:

```bash
npm install
```

3. Rendi l'applicazione eseguibile globalmente (opzionale):

```bash
npm link
```

## 🚀 Utilizzo

### Esecuzione diretta

```bash
node bin/index.js <comando> [opzioni]
```

### Dopo l'installazione globale

```bash
expense-tracker <comando> [opzioni]
```

## 📝 Comandi Disponibili

### `add` - Aggiungere una spesa

Aggiungi una nuova spesa con descrizione e importo.

```bash
expense-tracker add --description "Pranzo" --amount 15.50
# Output: Spesa aggiunta con successo (ID: 1)
```

**Parametri:**

- `-d, --description <description>` (obbligatorio): Descrizione della spesa
- `-a, --amount <amount>` (obbligatorio): Importo della spesa (numero positivo)

### `list` - Visualizzare tutte le spese

Mostra l'elenco di tutte le spese registrate.

```bash
expense-tracker list
```

**Output di esempio:**

```
Elenco delle spese:
ID: 1  Descrizione: Pranzo  Importo: €15.50  Data: 27-11-2025
ID: 2  Descrizione: Caffè  Importo: €3.00  Data: 27-11-2025
```

### Comandi in sviluppo

I seguenti comandi sono pianificati ma non ancora implementati:

- `delete --id <id>`: Elimina una spesa
- `update --id <id> [--description] [--amount]`: Aggiorna una spesa esistente
- `summary [--month <month>]`: Mostra il riepilogo delle spese totali

## 📁 Struttura del Progetto

```
expense-tracker/
├── bin/
│   ├── index.js           # Entry point dell'applicazione CLI
│   └── data/
│       └── storage.json   # File di storage delle spese
├── src/
│   ├── commands/
│   │   ├── add.command.js     # Comando per aggiungere spese
│   │   └── list.command.js    # Comando per listare spese
│   └── utils/
│       ├── misc.util.js       # Utilità varie (data, ecc.)
│       └── storage.util.js    # Gestione del file JSON
├── package.json
├── README.md
└── TODO.md
```

## 🛠️ Tecnologie Utilizzate

- **Node.js**: Runtime JavaScript
- **Commander.js**: Framework per applicazioni CLI
- **Chalk**: Libreria per output colorato nel terminale
- **ES Modules**: Moduli JavaScript moderni

## 💻 Sviluppo

### Struttura dei dati

Le spese sono memorizzate in formato JSON con la seguente struttura:

```json
[
  {
    "id": 1,
    "description": "Pranzo",
    "amount": 15.5,
    "date": "27-11-2025"
  }
]
```

### Contribuire

Contributi, issue e feature request sono benvenuti! Consulta il file `TODO.md` per vedere le funzionalità pianificate.

### Roadmap

Consulta il file [TODO.md](./TODO.md) per la lista completa delle funzionalità pianificate e dello stato di avanzamento del progetto.

## 📄 Licenza

ISC

## 👤 Autore

**Federico Lupoli**

- GitHub: [@FedericoLupoli](https://github.com/FedericoLupoli)

---

⭐ Se questo progetto ti è stato utile, lascia una stella!
