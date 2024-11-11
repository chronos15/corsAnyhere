const corsAnywhere = require('cors-anywhere');

// Configurações de URL e Porta
const host = 'localhost';
const port = 8080; // Substitua pela porta desejada

// Criação do servidor
corsAnywhere.createServer({
  originWhitelist: [], // Lista vazia permite todos os domínios
  // Remover o `requireHeader`
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere está rodando em http://${host}:${port}`);
});
