export type TipologiaGiftcard = 'digitale' | 'cartacea';
export type TaglioGiftcard = 10 | 20 | 50 | 100;

export interface Giftcard {
    tipologia: TipologiaGiftcard;
    taglio: TaglioGiftcard;
    quantita: number;
    prezzo: number;
  }

  export interface DatiAnagrafici {
    nome: string;
    cognome: string;
    codiceFiscale : string;
    email : string;
    // Altri dati anagrafici necessari
}

export interface Ordine {
    datiAnagrafici: DatiAnagrafici;
    giftcards: Giftcard[];
  }

export interface TotaleOrdini {
    imponibile: number;
    iva: number;
    totaleDaPagare: number;
  }
