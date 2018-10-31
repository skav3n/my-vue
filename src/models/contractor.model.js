class Contractor {
  constructor(name='', nip='', street='', code='', city='') {
    this.name = name;
    this.nip = nip;
    this.address = {
      street,
      code,
      city,
    };
  }
}

export default Contractor;
