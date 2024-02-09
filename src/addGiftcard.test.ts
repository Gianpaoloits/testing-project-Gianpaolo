import { addGiftcard } from "./addGiftcard";
import { Ordine } from "./types";

describe('addGiftcard tests', () => {
// Happy Path
test('dovrebbe aggiungere una nuova giftcard', () => {
    const ordineTest: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [],
    };

    const nuovoOrdine = addGiftcard(ordineTest, 'digitale', 20, 2);

    expect(nuovoOrdine.giftcards).toHaveLength(1);
    expect(nuovoOrdine.giftcards[0]).toEqual({
      tipologia: 'digitale',
      taglio: 20,
      quantita: 2,
      prezzo: 10,
    });
  });

  // Special Cases
  test('Dovresti aggiornare la quantità per una giftcard esistente nell \'\ordine', () => {
    const ordineIniziale: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [{ tipologia: 'digitale', taglio: 20, quantita: 1}],
    };

    const nuovoOrdine = addGiftcard(ordineIniziale, 'digitale', 20, 2);

    expect(nuovoOrdine.giftcards).toHaveLength(1);
    expect(nuovoOrdine.giftcards[0]).toEqual({
      tipologia: 'digitale',
      taglio: 20,
      quantita: 3, // La quantità dovrebbe essere aggiornata
      prezzo: 10,
    });
  });

  // Eccezioni
  test('should throw an error for negative quantity', () => {
    const ordineIniziale: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [],
    };

    expect(() => addGiftcard(ordineIniziale, 'digitale', 20, -2)).toThrow('La quantità deve essere maggiore di 0');
  });

  test('should update quantity for an existing giftcard in the order', () => {
    const ordineIniziale: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [
        {
          tipologia: 'digitale',
          taglio: 20,
          quantita: 1,
        },
      ],
    };

    const nuovoOrdine = addGiftcard(ordineIniziale, 'digitale', 20, 2);

    // Verifica che la quantità sia stata aggiornata per la giftcard esistente
    expect(nuovoOrdine.giftcards).toHaveLength(1);
    expect(nuovoOrdine.giftcards[0]).toEqual({
      tipologia: 'digitale',
      taglio: 20,
      quantita: 3, // La quantità dovrebbe essere aggiornata
    });
  });
});