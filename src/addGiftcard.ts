import { Ordine } from "./newOrder";
import { TaglioGiftcard, TipologiaGiftcard } from "./types";

function addGiftcard(ordine: Ordine, tipologia: TipologiaGiftcard, taglio: TaglioGiftcard, quantita: number, prezzo: number): Ordine {
    // Verifica dati anagrafici
    if (!ordine.datiAnagrafici.codiceFiscale || !ordine.datiAnagrafici.nome || !ordine.datiAnagrafici.cognome || !ordine.datiAnagrafici.email) {
      throw new Error('Dati anagrafici incompleti');
    }
  
    // Verifica quantità valida
    if (quantita <= 0) {
      throw new Error('La quantità deve essere maggiore di 0');
    }
  
    // Verifica se la giftcard è già presente nell'ordine
    const giftcardIndex = ordine.giftcards.findIndex(
      (gc) => gc.tipologia === tipologia && gc.taglio === taglio
    );
  
    if (giftcardIndex !== -1) {
      // Aggiorna la quantità se la giftcard è già presente
      ordine.giftcards[giftcardIndex].quantita += quantita;
    } else {
      // Aggiungi una nuova giftcard all'ordine
      ordine.giftcards.push({ tipologia, taglio, quantita, prezzo });
    }
  
    return ordine;
}

// Esempio di utilizzo
const ordineIniziale: Ordine = {
  datiAnagrafici: {
    codiceFiscale: 'RSSMRA80A01H501Z',
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
  },
  giftcards: [],
};

const nuovoOrdine = addGiftcard(ordineIniziale, 'digitale', 20, 2, 10);
console.log(nuovoOrdine);