import { DatiAnagrafici, Giftcard, Ordine } from "./types";


export function newOrder(datiAnagrafici: DatiAnagrafici): Ordine | null {
  if (!datiAnagrafici.nome || !datiAnagrafici.cognome || !datiAnagrafici.codiceFiscale || !datiAnagrafici.email) {
    throw new Error('Dati anagrafici incompleti'); // Solleva un'eccezione quando i dati sono incompleti
  }

  if (datiAnagrafici.nome.length > 40) {
    throw new Error('Troppi caratteri sul nome');
  }

  if (datiAnagrafici.codiceFiscale.length !== 16) {
    throw new Error('Il codice fiscale deve essere lungo 16 caratteri');
  }

  // Simuliamo la generazione di un numero di ordine univoco
  const numeroOrdine = Math.floor(Math.random() * 1000) + 1;

  // Inizializziamo l'array delle giftcards
  const giftcards: Giftcard[] = [];

  // Creiamo l'oggetto con i dati dell'ordine
  const datiOrdine: Ordine = {
    datiAnagrafici,
    giftcards,
  };

  return datiOrdine;
}

module.exports = { newOrder };

export { Ordine };
