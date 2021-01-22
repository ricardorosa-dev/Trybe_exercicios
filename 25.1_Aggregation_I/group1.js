db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      count: { $sum: 1 }
    }
  }
])
