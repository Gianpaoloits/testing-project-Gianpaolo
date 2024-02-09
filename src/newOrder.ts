interface DatiAnagrafici {
    nome: string;
    cognome: string;
    indirizzo: string;
    // Altri dati anagrafici necessari
}
interface DatiOrdine {
    numeroOrdine: number;
    // Altri dati dell'ordine necessari
  }
  
export function newOrder(datiAnagrafici: DatiAnagrafici): DatiOrdine {
    
  if (!datiAnagrafici.nome || !datiAnagrafici.cognome || !datiAnagrafici.indirizzo) {
    throw new Error('Dati anagrafici incompleti');
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
  
  // Esempio di utilizzo della funzione
export const datiAnagraficiCliente: DatiAnagrafici = {
    nome: "Mario",
    cognome: "Rossi",
    indirizzo: "Via Example 123",
    // Altri dati anagrafici
  };
  
export const nuovoOrdineCliente: DatiOrdine = newOrder(datiAnagraficiCliente);
  console.log(newOrder);
  