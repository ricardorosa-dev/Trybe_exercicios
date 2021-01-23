db.clientes.aggregate([
  { $match: { 
    sexo: "FEMININO", 
    dataNascimento: { $gte: ISODate("1995-01-01T00:00:00.000Z"), $lte: ISODate("2005-01-01T00:00:00.000Z") } }
  }
]);
