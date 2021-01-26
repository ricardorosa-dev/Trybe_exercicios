db.products.aggregate([
  { $addFields: 
    { valor_total_produto: 
      { $multiply: ["$sale_price", "$quantity"] } 
    } 
  },
  { $group: {
    _id: null,
    valor_estoque: { $sum: "$valor_total_produto" }
  } }
]);
