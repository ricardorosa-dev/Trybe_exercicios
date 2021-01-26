db.products.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      valor_estoque: { $multiply: ["$sale_price", "$quantity"] }
    }
  }
]);
