db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2020-01-01"),
      $lte: ISODate("2020-03-31") 
    } 
  } },
  { $group: { _id: "$clienteId", total: { $sum: 1 } } },
  { $match: { total: { $lt: 3 } } },
  { $count: "Clientes com menos de 3 compras" }
])
