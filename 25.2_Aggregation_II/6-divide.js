db.products.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      preco_desconto50: { $divide: ["$sale_price", 2] }
    }
  }
]);

