import express from 'express';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

app.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
  res.send('Inicio');
});
app.get('/nosotros', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
  res.send('Nosotros');
});
app.get('/contacto', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
  res.send('Contacto');
});

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});