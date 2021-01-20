db.movies.updateMany(
  { title: "Home Alone" },
  { $set: { cast: [ 
    {
      "actor": "Macaulay Culkin",
      "character": "Kevin"
    },
    {
      "actor": "Joe Pesci",
      "character": "Harry"
    },
    {
      "actor": "Daniel Stern"
    }
  ] } },
  { upsert: true }
)
