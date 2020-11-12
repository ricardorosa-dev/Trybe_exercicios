export const REQUEST_IMAGE = 'REQUEST_IMAGE'; //só muda o isFetching
export const GET_IMAGE = 'GET_IMAGE'; // pega o src da imagem
export const FAILED_REQUEST = 'FAILED_REQUEST'; // trata um possível erro da API

function requestImage() {
  return { type: REQUEST_IMAGE };
}

function getImage(json) {
  return { type: GET_IMAGE, payload: json.message };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error }
}

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestImage()); // mudou pra isFetching: true
    return fetch('https://dog.ceo/api/breeds/image/random') // faz a requisição
      .then((response) => response.json())
      .then(
        (json) => dispatch(getImage(json)),
        (error) => dispatch(failedRequest(error))
      );
  }
}
