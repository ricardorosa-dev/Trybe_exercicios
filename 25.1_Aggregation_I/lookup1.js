db.transactions.aggregate({
  $lookup: {
    from: "clients",
    localField: "name",
    foreignField: "from",
    as: "transações",
  }  
})
