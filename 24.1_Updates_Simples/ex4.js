db.movies.update(
  {"title": "Batman"},
  {$inc: {"imdbRating": 2}}
)
