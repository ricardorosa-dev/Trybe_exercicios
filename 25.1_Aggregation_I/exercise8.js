db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  { 
    $project: {
      _id: 0, 
      nome: "$nome", 
      compras: { $sum: "$compras.valorTotal" } 
    } 
  },
  { $sort: { "compras": -1 } },
  { $limit: 5 }
]);

// A resposta certa é bem diferente do que eu fiz, o que eu fiz ficou mais complexo, contém o nome do cliente, eu usei o $lookup, porém não vi que havia vendas a serem feitas e outras já feitas

db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
    }
  },
  {
    $group: {
       _id: "$clienteId",
       valorTotal: {
          $sum: "$valorTotal"
       }
    }
  },
  {
    $sort: {
      valorTotal: -1
    }
  },
  {
    $limit: 5
  }
]);


