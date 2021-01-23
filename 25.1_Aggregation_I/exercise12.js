db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"), 
        $lte: ISODate("2020-12-31") 
      } 
    } 
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "clientes"
    }
  },
  { $group: { _id: "$clientes.endereco.uf", compras: { $sum: 1 } } },
  { $sort: { compras: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, uf: "$_id", totalVendas: "$compras" } }
])
