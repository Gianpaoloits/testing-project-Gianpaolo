import { Ordine } from "./newOrder";
import { TotaleOrdini } from "./types";


  
export function getAmount(ordine: Ordine): TotaleOrdini {
    // Calcola l'imponibile sommando i prezzi delle giftcard
    const imponibile = ordine.giftcards.reduce((acc, giftcard) => acc + (giftcard.taglio * giftcard.quantita), 0);
  
    // Calcola l'IVA al 22%
    const iva = imponibile * 0.22;
  
    // Calcola il totale da pagare
    const totaleDaPagare = imponibile + iva;
  
    return {
      imponibile,
      iva,
      totaleDaPagare,
    };
  }
  
  // Esempio di utilizzo
  const ordineEsempio: Ordine = {
    datiAnagrafici: {
      codiceFiscale: 'RSSMRA80A01H501Z',
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
    },
    giftcards: [
      { tipologia: 'digitale', taglio: 20, quantita: 2},
      { tipologia: 'cartacea', taglio: 50, quantita: 1},
    ],
  };
  
  const totali = getAmount(ordineEsempio);
  console.log(totali);