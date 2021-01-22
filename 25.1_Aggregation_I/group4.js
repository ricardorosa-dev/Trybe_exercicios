db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalTransactions: {
        $sum: "$value",
      },
      count: { $sum: 1 }
    }
  },
  { 
    $match: { "totalTransactions": { $gt: 1000 } }
  }
])
