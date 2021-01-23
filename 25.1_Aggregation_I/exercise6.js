db.clientes.aggregate([
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1  } } },
  { $sort: { "_id.uf": 1 } }
])

// O $sort foi ideia minha
