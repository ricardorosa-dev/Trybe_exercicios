db.movies.updateOne(
  { title: "Batman" },
  { $push: { "cast.$[elemento].actor": { $each: ["Michael Keaton", "Val Kilmer", "George Clooney"] } } },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
)
