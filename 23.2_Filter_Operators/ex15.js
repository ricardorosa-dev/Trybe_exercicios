db.superheroes.find({
  $and: [{
    $and: [
      {"aspects.weight": {$gte: 80}},
      {"aspects.weight": {$lte: 100}}
    ]}, 
    {$or: [
      {"race": "Human"},
      {"race": "Mutant"}
    ]},
    {"publisher": {$not: {$eq: "DC Comics"}}}
  ]
}).pretty()
