interface DatiAnagrafici {
    nome: string;
    cognome: string;
    codiceFiscale : string;
    email : string;
    // Altri dati anagrafici necessari
}
interface DatiOrdine {
    numeroOrdine: number;
    // Altri dati dell'ordine necessari
  }
  
function newOrder(datiAnagrafici : DatiAnagrafici) {
    
  if (!datiAnagrafici.nome || !datiAnagrafici.cognome || !datiAnagrafici.codiceFiscale || !datiAnagrafici.email) {
    throw new Error('Dati anagrafici incompleti');
  }

  if (datiAnagrafici.nome.length > 40) {
    throw new Error('Troppi caratteri sul nome');
  }
  
    // Simuliamo la generazione di un numero di ordine univoco
    const numeroOrdine = Math.floor(Math.random() * 1000) + 1;
  
    // Creiamo l'oggetto con i dati dell'ordine
    const datiOrdine: DatiOrdine = {
      numeroOrdine,
      // Aggiungere altri dati dell'ordine in base alle necessità
    };
  
    return datiOrdine;
  }

module.exports = { newOrder };