db.movies.update(
  {"title": "Home Alone"},
  {$inc: {"budget": 5}}
)
