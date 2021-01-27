db.clientes.aggregate([
  { $addFields: {
    idade: { 
      $floor: { 
        $divide: [
          { $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] }, 
            86400000] }, 365] } } 
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras_cliente"
  } },
  { $match: { 
    "compras_cliente.dataVenda": { 
      $gte: ISODate("2019-06-01"), 
      $lte: ISODate("2020-03-31") } 
    }
  },
  { $addFields: { totalVendas: { $size: "$compras_cliente" }  } },
  { $sort: { "totalVendas": -1 } },
  { $limit: 10 },
  { $unwind: "$compras_cliente" },
  { $addFields: { 
    "compras_cliente.valorComDesconto": { 
      $subtract: [ "$compras_cliente.valorTotal" , 
      { $multiply: ["$compras_cliente.valorTotal", 0.10] }] 
    } 
    }  },
  { $group: { _id: "$endereco.uf", total: { $sum: 1 }} },
  { $sort: { total: -1 } },
  { $limit: 5 }
])
