let piece = "cavalo"
let resposta;

console.log(piece.toLowerCase());
switch (piece.toLowerCase()) {
    case "peao":
    case "peão":
        resposta = "Para frente, uma casa. Come na diagonal, também uma casa.";
        break;
    case "torre":
        resposta = "Verticais e horizontais";
        break;
    case "bispo":
        resposta = "Diagonais.";
        break;
    case "cavalo":
        resposta = "Em L.";
        break;
    case "dama":
        resposta = "Qualquer direção.";
        break;
    case "rei":
        resposta = "Qualquer direção, porém só uma casa.";
        break;
    default:
        resposta = "Essa peça não existe!"
}

console.log(resposta);