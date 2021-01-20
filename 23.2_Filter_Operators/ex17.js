db.superheroes.find({
  "aspects.hairColor": {$exists: true}
}).pretty()
