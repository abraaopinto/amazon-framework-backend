const app = require('../src/config/express')();
const port = app.get('port');

app.listen(port, () => console.log(`EXECUTANDO APLICAÇÃO NA PORTA ${port}`));