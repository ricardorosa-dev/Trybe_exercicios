db.movies.update(
  {"title": "Batman"},
  {$mul: {"imdbRating": 4}}
)
