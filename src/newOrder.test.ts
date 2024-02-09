const { newOrder } = require('./newOrder');

describe('newOrder tests', () => {
  // Happy Path
  test('newOrder dovrebbe creare un ordine valido', () => {
    const datiAnagraficiCliente = {
      nome: 'Mario',
      cognome: 'Rossi',
      codiceFiscale: 'GBNGPL92H28F205K',
      email: 'mario.rossi@gmail.com',
    };

    const nuovoOrdine = newOrder(datiAnagraficiCliente);
    expect(nuovoOrdine).toBeDefined();
  });

  // Special Cases
  test('Il nuovo ordine dovrebbe lanciare un errore per mancanza di dati', () => {
    const datiAnagraficiCliente = {
      nome: 'Mario',
      // Mancano cognome e mail e codice fiscale
    };

    expect(() => newOrder(datiAnagraficiCliente)).toThrow('Dati anagrafici incompleti');
  });

  test('dovrebbe lanciare un errore per dati incompleti', () => {
    const datiAnagraficiCliente = {
      nome: '',
      cognome: '',
      codiceFiscale: '',
      email: '',
    };
  
    expect(() => newOrder(datiAnagraficiCliente)).toThrow('Dati anagrafici incompleti');
  });

  test('Dovrebbe lanciare un errore perchè ha più di 40 caratteri', () => {
    const datiAnagraficiCliente2 = {
      nome: 'MarioMarioMarioMarioMarioMarioMarioMarioMarioMarioMario', // Più di 40 caratteri
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      codiceFiscale: 'RSSMRA80A01H501Z',
    };

    expect(() => newOrder(datiAnagraficiCliente2)).toThrow('Troppi caratteri sul nome');
  });

  test('Il codice fiscale dovrebbe essere di 16 caratteri', () => {
    const datiAnagraficiCliente = {
      nome: 'Mario',
      cognome: 'Rossi',
      codiceFiscale: 'GBNGPL92H28F205KA', // Codice fiscale con 17 caratteri
      email: 'mario.rossi@gmail.com',
    };
  
    expect(() => newOrder(datiAnagraficiCliente)).toThrow('Il codice fiscale deve essere lungo 16 caratteri');
  });
});