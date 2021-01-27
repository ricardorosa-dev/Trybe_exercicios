db.vendas.aggregate([
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  { $group: { _id: "$clienteId", vezes: { $sum: 1 } } }
]);


db.clientes.aggregate([
  { $lookup: {
    from: "vendas",
    as: "compras_cliente",
    pipeline: [
      { $match: { "itens.nome": "QUEIJO PRATO" } },
      { $group: { _id: "$clienteId", vezes: { $sum: 1 } } }
    ]
  } },
]);

// falta a quantidade de cada queijo
