db.vendas.aggregate([
  { $group: { _id: "$clienteId", vezes: { $sum: 1 }} },
  { $match: { vezes: { $gt: 5 } } },
  { $count: "clientes" }
])

// O meu funciona. Abaixo outra possibilidade, do course
// Esse exemplo abaixo usa OUTRO GROUP!

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);
