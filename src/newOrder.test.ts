const orderTest = require('./newOrder');

describe('newOrder tests', () => {
    //Happy Path
test('newOrder dovrebbe creare un ordine valido', () => {
  const datiAnagraficiCliente = {
    nome: 'Mario',
    cognome: 'Rossi',
    codiceFiscale : 'GBNGPL92H28F205K',
    email : 'mario.rossi@gmail.com'
  };

  const nuovoOrdine = orderTest.newOrder(datiAnagraficiCliente);
  expect(nuovoOrdine).toHaveProperty('numeroOrdine');
});

//Special Cases
test('newOrder should throw an error for incomplete customer data', () => {
  const datiAnagraficiCliente = {
    nome: 'Mario',
    // Mancano cognome e mail e codice fiscale
  };

  expect(() => orderTest.newOrder(datiAnagraficiCliente)).toThrow('Dati anagrafici incompleti');
});

test('dovrebbe creare un cliente con dati vuoti', () => {
    const datiAnagraficiCliente = {
      nome: '',
      cognome: '',
      codiceFiscale: '',
      email : '',
    };

    const nuovoOrdine = newOrder(datiAnagraficiCliente);
    expect(nuovoOrdine).toBeNull();
    
  });

  test('Dovrebbe lanciare un errore perchè ha più di 40 caratteri', () => {
    const datiAnagraficiCliente2 = {
      nome: 'MarioMarioMarioMarioMarioMarioMarioMarioMarioMarioMario', // Più di 40 caratteri
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      codiceFiscale: 'RSSMRA80A01H501Z',
    };
    
    const nuovoOrdine2 = newOrder(datiAnagraficiCliente2);
    expect(nuovoOrdine2).toThrow('Troppi caratteri sul nome');
  });

});