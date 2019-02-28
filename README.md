# react-native-weather-forecast

### Objetivo:

Construir um aplicativo que efetue a chamada de uma API, fazendo a pesquisa da previsão do tempo de
uma determinada cidade e demonstre os dados retornados pela API na tela de forma que o usuário possa
entendê-la.
A tela inicial do aplicativo deve conter um campo de pesquisa pelo nome da cidade e uma área de
apresentação dos dias de previsão do tempo. Ao efetuar a pesquisa, a área de apresentação será preenchida
com os dados da previsão. Ao clicar sobre um dia específico, o usuário visualizará os dados detalhados sobre
a previsão daquele dia.
O aplicativo resultante deverá ser publicado no GitHub, juntamente com um arquivo README que
detalhe o funcionamento, as dependências (caso existirem) e também como deve ser executado.

Observações:

- Implementar o aplicativo utilizando React Native;
- Utilizar a API de previsão de 5 dias do site https://openweathermap.org;
- Publicar o aplicativo no GitHub e enviar o link do repositório;

### Dependencias

- Emulador (XCode, Android Studio, GenyMotion ou outros). Pode-se utilizar um celular com Android desde que esteja habilitado o modo de desenvolvedor com depuração USB;
- Node v11.1.0 (Não foi testado com anteriores mas acredito que funcione tbm);

### Execução

1. Dentro da pasta do projeto rodar o comando `yarn`;
2. Ainda dentro da pasta, use `react-native run-ios` (caso utilize mac) ou `react-native run-android` (Windowns/Mac) para realização de ambos é necessário possuir previamente as configurações de emulação seja no XCode ou GenyMontion/Android Studio. Pode ser utilizado com algun celular com Android (DevTools e depuração USB habilitadas);

**Resultado**

- Em minha proposta, achei mais viavel segmentar em duas telas, isso porque podem existir cidades de outros paises com o mesmo nome na listagem de busca, assim como possibilitar de fato existir uma listagem e seleção.
- Notei que a utilização dessa API em sua versão FREE, inviabiliza que o App fique de bem estruturado com todos os horarios, pois como pode-se notar (https://openweathermap.org/price) o plano FREE possibilita apenas forecast com intervalos de 3hrs e não é possivel obter todas as previsões de um dia pois se torna um recurso pago.

![alt text](https://media.giphy.com/media/8P7qwFB0NdKLJNwI8m/giphy.gif)
