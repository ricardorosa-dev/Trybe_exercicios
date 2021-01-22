db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transações recebidas"
    }
  }
]);
