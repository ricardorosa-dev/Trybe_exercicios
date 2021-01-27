db.vendas.aggregate([
  { $unwind: "$itens" },
  { $match: { "itens.nome": "QUEIJO PRATO" } },
  { $lookup: {
    from: "clientes",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "cliente"
  } },
  { $unwind: "$cliente" },
  { $project: { 
    _id: 0, 
    nome: "$cliente.nome", 
    uf: "$cliente.endereco.uf", 
    totalConsumido: "$itens.quantidade" 
  } },
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 }
]);


// Algo está incorreto na minha query. A do gabarito retorna 44

db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade"
      }
    }
  },
  {
    $sort: { totalConsumido: -1 }
  },
  { $limit: 1 },
  {
    $lookup: {
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);
