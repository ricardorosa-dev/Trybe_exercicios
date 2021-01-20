db.movies.updateOne(
  { title: "Batman" },
  { $set: { cast: [
    {
      "character": "Batman"
    },
    {
      "character": "Alfred"
    },
    {
      "character": "Coringa"
    }
  ] } }
)
