import { getAmount } from "./getAmount";
import { Ordine } from "./types";

describe('getAmount tests', () => {
  // Happy Path
  test('Dovrebbe calcolare il costo totale', () => {
    const ordineTest: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [
        { tipologia: 'digitale', taglio: 20, quantita: 2 },
        { tipologia: 'cartacea', taglio: 50, quantita: 1 },
      ],
    };

    const totali = getAmount(ordineTest);

    expect(totali.imponibile).toBe(20 * 2 + 50 * 1);
    expect(totali.iva).toBe((20 * 2 + 50 * 1) * 0.22);
    expect(totali.totaleDaPagare).toBe((20 * 2 + 50 * 1) + (20 * 2 + 50 * 1) * 0.22);
  });

  // Special Cases
  test('Dovrebbe esserci come risultato 0 come costo totale con un array vuoto', () => {
    const ordineSenzaGiftcards: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [],
    };

    const totaliSenzaGiftcards = getAmount(ordineSenzaGiftcards);

    expect(totaliSenzaGiftcards.imponibile).toBe(0);
    expect(totaliSenzaGiftcards.iva).toBe(0);
    expect(totaliSenzaGiftcards.totaleDaPagare).toBe(0);
  });

  // Edge Case
  test('Deve gestire il caso limite con la quantità massima per una gift card', () => {
    const ordineConQuantitaMassima: Ordine = {
      datiAnagrafici: {
        nome: 'Mario',
        cognome: 'Rossi',
        codiceFiscale: 'RSSMRA80A01H501Z',
        email: 'mario.rossi@example.com',
      },
      giftcards: [
        { tipologia: 'digitale', taglio: 20, quantita: Number.MAX_SAFE_INTEGER },
      ],
    };

    const totaliConQuantitaMassima = getAmount(ordineConQuantitaMassima);

    // Verifica che non ci siano errori di overflow o altro
    expect(totaliConQuantitaMassima.imponibile).toBe(Number.MAX_SAFE_INTEGER * 20);
    expect(totaliConQuantitaMassima.iva).toBe((Number.MAX_SAFE_INTEGER * 20) * 0.22);
    expect(totaliConQuantitaMassima.totaleDaPagare).toBe((Number.MAX_SAFE_INTEGER * 20) + (Number.MAX_SAFE_INTEGER * 20) * 0.22);
  });
});
