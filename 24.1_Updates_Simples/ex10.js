db.movies.updateOne(
  {"title": "Home Alone"},
  {$currentDate: {"lastModified": {$type: "timestamp"}}}
)
