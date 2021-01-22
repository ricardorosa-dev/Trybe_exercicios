db.transactions.aggregate([{
  $lookup: {
    from: "clients",
    localField: "item",
    foreignField: "to",
    as: "transacoes-recebidas"
  }
}])
