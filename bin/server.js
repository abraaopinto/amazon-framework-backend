const app = require('../src/config/express')();
const port = app.get('port');

console.log(app);
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});