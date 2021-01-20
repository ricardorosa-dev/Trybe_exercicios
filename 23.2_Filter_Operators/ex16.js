db.superheroes.find({
  "race": {$exists: false}
}).pretty()
