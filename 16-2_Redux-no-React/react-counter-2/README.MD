# React-Redux como estamos vendo na Trybe

## Organização por pastas 

Estamos colocando os arquivos em pastas específicas, de forma organizada. O `store` fica em uma pasta chamada store, as `actions` e os tipos de actions (`action.types`) ficam em uma pasta chamada actions, os `reducers` ficam na pasta reducers, estando o combineReducers no index.js dessa pasta, e os `componentes` ficam na pasta components. Não é difícil fazer isso, só temos que lembrar que precisamos importar os arquivos e funções sempre que precisarmos deles.
<br /><br />

## Componentes funcionais

Até então estávamos usando componentes de classe. Vejamos agora um componente funcional:

```JSX
function TrafficSignal({ signalColor }) {
  return (
    <div>
        <img className="signal" src={ renderSignal(signalColor) } alt="" />
    </div>
  );
}

const mapStateToProps = state => ({
  signalColor: state.signal.color
});
```

Os componentes funcionais tem algumas particularidades. As principais são as seguintes:
-  Em vez de terem um método render() e dentro um return, eles possuem somente o return, que já traz as informações.
- Quando usamos o `mapStateToProps` e tornamos o state acessível ao componente como `props`, em componentes de classe precisamos escrever `this.props.meuestado` para acessar, enquanto que em componentes funcionais, esses estados são mapeados no mapStateToProps, passados como parâmetros do componente, e podem ser usados diretamente.

## mapDispatchToProps
Ainda não tínhamos visto essa função. Tínhamos visto que o `store` passado para o componente através do `<Provider>`, e conectado através do `connect()()`, traz junto com o state a função `dispatch()`, que é usada quando um estado precisa ser alterado, o que ela faz é disparar as actions, passando também alguma informação quando necessário.
<br>
Se tínhamos um botão de incremento, que chamava uma função,
```JSX
<button onClick={ this.increment }>+</button>
```
a lógica dessa função então chamava o dispatch, passando o tipo da action, que será então recebido pelo reducer, que fará a mudança no estado. A desvantagem desse modo de alterar os estados é que para cada action tínhamos que escrever uma função diferente.

```JSX
increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }
```

Agora com o mapDispatchToProps, todas as actions chamadas por um mesmo componente serão tratadas por essa função:

```JSX
const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch({ type: 'CHANGE_SIGNAL', payload })
});
```
E a action chamada, por exemplo em um clique de botão, fica assim:

```JSX
<button onClick={ () => changeSignal('red') } type="button">Red</button>
```

Mudando o valor passado para a action de 'red' para 'green' ou 'yellow', o reducer receberá essa action com valores diferentes.

Atenção, o mapDispatchToProps será passado como segundo parâmetro do connect:

```JSX
export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
```
## Variáveis de tipos de actions
Buscando uma melhor padronização e também facilitar o debug, os `tipos` das nossas `actions` são colocadas em variáveis de nome idêntico à string que define o tipo da action, e em vez de serem passadas como strings, são importadas e passadas como variáveis. Isso é feito principalmente para que, caso ocorra um erro de digitação, o Redux, não encontrando a variável, acuse um erro imediatamente. Um erro de digitação de uma string não é tão claramente acusado, e isso pode gerar um longo tempo de debug. Além disso, deixando todas em um arquivo separado, dentro da pasta actions, por exemplo com nome action_types.js, o código fica bem mais organizado.

```JSX
export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
```
As actions ficam em um arquivo separado e são exportadas para serem usadas pelo componente. 

```JSX
export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});
```
Tudo o que a action faz é enviar ao reducer um objeto com um `type` específico para que o reducer saiba o que fazer, e nesse caso também enviará informações, nomeadas aqui de `payload`, que são passadas como parâmetro quando a action é chamada. O reducer então altera o estado da aplicação.

```JSX
<button onClick={ () => changeSignal('green') } type="button">Green</button>
```

## CombineReducers
Até agora só fizemos aplicações aplicações pequenas, e por isso só precisamos de um `reducer`. Aplicações maiores podem ter vários reducers, e por isso precisamos de um método chamado `combineReducers`, que juntará todos os reducers em um só, para poder ser exportado para o componente. O combineReducers pode ser colocado no index.js da pasta reducers e é utilizado dessa forma:

```JSX
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export default combineReducers({
  movieReducer,
});
```
## Reducers com spread operator
Utilizaremos agora o `spread operator` no retorno do reducer. 

```JSX
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}
```
O objeto que representa o estado nesse caso seria `{signal: {color: 'red'}}`, como podemos ver abaixo:

```JSX
const initialState = {
  signal: {
    color: 'red',
  },
}
```
Passar o spread operator como retorno do reducer, garante que o Redux compare o estado atual com uma cópia dele, mantendo a imutabilidade, uma boa prática.



