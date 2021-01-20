db.movies.updateOne(
  { title: "Batman" },
  { $set: {
    "cast.$[elemento].actor": ["Christian Bale"]
  } },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
);

db.movies.updateOne(
  { title: "Batman" },
  { $set: {
    "cast.$[elemento].actor": ["Michael Cain"]
  } },
  { arrayFilters: [{ "elemento.character": "Alfred" }] }
);

db.movies.updateOne(
  { title: "Batman" },
  { $set: {
    "cast.$[elemento].actor": ["Heath Ledger"]
  } },
  { arrayFilters: [{ "elemento.character": "Coringa" }] }
);



