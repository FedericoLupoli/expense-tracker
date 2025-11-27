// Dipendenze esterne
export { default as fs } from "fs";
export { default as path } from "path";
export { default as chalk } from "chalk";

// Utilities interne
export * as storage from "./storage.util.js";
export { getCurrentDate } from "./misc.util.js";

// Messaggi
import messagesData from "./messages.json" with { type: "json" };
export const messages = messagesData;
