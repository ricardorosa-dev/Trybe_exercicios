db.products.aggregate([
  { 
    $project: { 
      _id: 0, 
      name: 1, 
      floor: { $floor: "$sale_price" }, 
      sale_price: 1, 
      ceil: { $ceil: "$sale_price" } } 
    }
])
