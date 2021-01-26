db.clientes.aggregate([
  { $addFields: {
    idade: { 
      $floor: { 
        $divide: [
          { $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] }, 
            86400000] }, 365] } } 
  } },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $group: { _id: null, count: { $sum: 1 } } }
]);

// A resposta no course conta usando o $count

db.clientes.aggregate([
  { $addFields: {
    idade: { 
      $floor: { 
        $divide: [
          { $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] }, 
            86400000] }, 365] } } 
  } },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: "clientes_18a25" }
]);

