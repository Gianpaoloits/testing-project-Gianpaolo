export interface TotaliGiftCard {
    imponibile: number;
    iva: number;
    totaleDaPagare: number;
  }
  
export function getAmount(): TotaliGiftCard {
    // Simuliamo un importo totale delle giftcard
    const importoTotaleGiftCard = 100; // Da sostituire con il calcolo reale
  
    // Calcoliamo l'IVA al 22%
    const iva = importoTotaleGiftCard * 0.22;
  
    // Calcoliamo il totale da pagare (imponibile + IVA)
    const totaleDaPagare = importoTotaleGiftCard + iva;
  
    // Creiamo l'oggetto con i totali
    const totali: TotaliGiftCard = {
      imponibile: importoTotaleGiftCard,
      iva,
      totaleDaPagare,
    };
  
    return totali;
  }
  
  // Esempio di utilizzo della funzione
export const totaliGiftCard: TotaliGiftCard = getAmount();
  console.log(totaliGiftCard);
  