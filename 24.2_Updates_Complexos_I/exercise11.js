db.movies.updateOne(
  { title: "Batman" },
  { $set: {
    "cast.$[elemento].actor": "Christian Bale"
  } },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
)
