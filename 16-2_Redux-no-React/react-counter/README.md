Um aplicativo de contador simples que que tem um número inicial no _state_, nesse caso 0, e que permite alterar esse número através de dois botões, de + e &ndash;.

Esse exemplo foi tirado de um [vídeo no YouTube](https://www.youtube.com/watch?v=sX3KeP7v7Kg), que no entanto está em inglês. Portanto, decidi re-escrever aqui em português, adicionando meus comentários quando pude ser útil.

Os arquivos iniciais da aplicação escrita em React, são os seguintes:

App.js
```Javascript
import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

export default App;

```

A única coisa que o App.js faz aqui é importar o componente Counter e renderizar ele, dentro de um `<div>`.
\
\
Counter (o único componente)
```Javascript
import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={ this.decrement }>&ndash;</button>
          <span>{ this.state.count }</span>
          <button onClick={ this.increment }>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;

```
Nesse componente fazemos o seguinte:
- Criamos um state. Aprendemos a criar o componente sempre dentro de um `constructor`, mas não é necessário. Nesse state criamos somente o estado do nosso contador, iniciando com 0. Poderia ser qualquer valor que eu quisesse.
- Criamos duas funções, uma para aumentar o número em 1, e outra para diminuir o número em 1. As duas fazem isso modificando o state, através do `setState({})`. O state estará ligado ao número que aparecerá na tela, de modo que alterando o state, o número na tela mudará também.
\
PS.: Usei arrow functions pra criar as funções somente para não precisar fazer o `bind`.
- Dentro do `render()` coloquei um botão contendo o símbolo de &ndash;, um `<span>` contendo o número, e outro botão contendo o símbolo de +.
\
\
O botão de &ndash; chama a função `this.decrement` através do onClick. 
O botão de + chama a função `this.increment`, também através do onClick.
Dentro do `<span>` coloquei o número que temos guardado no estado, usando `{this.state.count}`.

A aplicação React é só isso, e funciona perfeitamente. É verdade que utilizar o Redux para uma aplicação pequena é esforço desnecessário e uma má prática. Porém, para podermos aprender de forma simples como criar as partes do Redux no React, vamos transformar essa aplicação simples em uma aplicação Redux.
<br/>
<br/>

## Transformando a aplicação React em Redux
<br />

> Caso você ainda não tenha instalado o Redux e o react-redux (que faz a conexão entre os dois) nessa aplicação, precisa fazê-lo no terminal, usando:  
npm install redux react-redux

<br />

Agora, começaremos deletando o que é específico do React, e teremos que mudar no Redux.  
Em Counter.js:
- Retiramos o _state_, já que vamos fazer com que o Redux controle o estado da aplicação.
- Retiramos também o `setState({})`das funções `increment` e `decrement`
POR QUE???

```Javascript
  increment = () => {
    // Adicionar novo valor
  }

  decrement = () => {
    // Adicionar novo valor
  }
  ```
  - Com o Redux controlando nossa aplicação, o número do contador virá de uma `props` passada ao componente, então temos que mudar o valor dentro do `<span>` para vir de uma props. **Enquando fazemos as alterações, a aplicação irá quebrar, não tenha medo**.
  
  ```JSX
  <span>{ this.props.count }</span>
  ```  
<br/>

## 1. Conectando o componente ao Redux (Connect)
- Primeiro, no componente Counter, vamos importar o Connect, da biblioteca react-redux, que fará a conexão entre os dois.
```JSX
import {connect} from 'react-redux';
```
E adicionamos o `connect` ao export, no fim do arquivo do componente.

```JSX
export default connect()(Counter);
```
Essa função connect recebe o componente Counter e retorna um componente Counter conectado com o Redux.  
Mas ainda precisamos dizer quais informações devem ser conectadas entre o React e o Redux. Fazemos isso através da função `mapStateToProps`, que conectará o componente ao estado global do Redux, e fornecerá acesso a esse estado através de uma `props` específica.

```JSX
const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
```

A aplicação ainda não funcionará, porque ainda não criamos nosso state global. Vamos fazer isso agora:

## 2. Criando o store (estado global do Redux)

No App.js, importamos o `createStore` do Redux. E vamos importar tabém o componente `Provider`. O que esse componente faz é tornar o estado disponível à função `connect` que escrevemos no último passo.

```JSX
import {createStore} from 'redux';
import { Provider } from 'react-redux';
```
Então, acima da declaração do componente App, criamos o store, e encapsulamos tudo o que está sendo renderizado pelo App dentro do componente `<Provider>`, e passamos o store como props do componente Provider.

```JSX
const store = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}
```

O createStore recebe como parâmetro um estado inicial, que ainda não criamos. Vamos criar ele através da funçao `reducer`, que criaremos acima da constante store. Além de retornar o estado inicial, a função reducer vai ser chamada toda vez que uma `action` for chamada, ou seja, toda vez que uma funcionalidade da aplicação precisar ser utilizada. Quem vai fazer a conexão e garantir o funcionamento da funcionalidade é a função reducer.  
O segundo parâmetro da função reducer é uma action. Utilizando um `switch` dentro da função, o reducer saberá identificar qual action está sendo chamada (através da propriedade `type`, que deve estar presente em cada action), e o que deve fazer. É importante que haja uma opção `default`, que simplesmente retorna o state, caso a action chamada não seja reconhecida pelo reducer!

```JSX
const INITIAL_STATE = {
  count: 0,
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
      default:
       return state;
  }
}

const store = createStore(reducer);
```

Agora a aplicação deve ter voltado a aparecer. Porém, os botões ainda não estão funcionando, porque retiramos a implementação inicial e não adicionamos nada até agora. Vamos fazer isso:

## 3. Conectar as actions (com o dispatch())

A função `dispatch(action)` é utilizada toda vez que o state precisa ser mudado no Redux. E ela pode ser utilizada no componente como uma prop, graças ao connect. Vamos preencher a implementação das funções imcrement e decrement, que havíamos retirado, no Counter.js.

```JSX
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
  ```
  
  Pronto! Recapitulando: criamos o estado global de nossa aplicação Redux através do `createStore()`, que recebe como parâmtetro um `reducer`, que decide o estado inicial, além do que fazer com cada `action` recebida, ou seja, é a função que irá lidar com as funcionalidades da nossa aplicação. O store (junto com a função dispatch) é então passada para os componentes através do `Provider`. Nosso componente Counter é conectado ao Redux através da fução `connect()()`do react-redux, que torna o state disponível ao componente como uma prop, e permite a ele também disparar actions, através do `dispatch()`. Quando os botões dentro do componente são clicados, ações são despachadas (dispatch) e caturadas pelo reducer, que altera o estado, e todas vez que o estado é alterado, o Provider renderiza novamente o componente, e vemos o número mudar na tela!
  
  Se gostou, por favor vá até o vídeo original e deixe um like! 




