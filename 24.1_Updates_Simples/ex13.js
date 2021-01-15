db.movies.updateMany(
  {"title": "Batman", "title": "Home Alone"},
  {$max: {"imdbRating": 17}}
)
