db.clientes.aggregate([
  { $addFields: {
    idade: { 
      $floor: { 
        $divide: [
          { $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] }, 
            86400000] }, 365] } } 
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras_cliente"
  } }
]);
