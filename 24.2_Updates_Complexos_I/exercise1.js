db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } },
  { upsert: true }
)
