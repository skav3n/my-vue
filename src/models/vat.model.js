class Vat {
  constructor() {
    this.nip = '';
    this.contractor = {};
    this.invoiceNr = '';
    this.dates = {};
    this.total = {
      net: 0,
      vat: 0,
      gross: 0,
    };
    this.sale = {
      rate_23: {
        net: 0,
        vat: 0,
      },
      rate_8: {
        net: 0,
        vat: 0,
      },
      rate_5: {
        net: 0,
        vat: 0,
      },
      rate_0: 0,
    };
    this.saleExempt = 0;
    this.inventoryVat = 0;
  }
}
  
export default Vat;
