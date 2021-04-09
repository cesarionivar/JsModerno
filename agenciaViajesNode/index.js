import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG (jade)
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.currentYear = year.getFullYear();
  
  return next();
});
 

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});