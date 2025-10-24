import express from 'express';
//import categoryRouter from './src/routes/category.route.js';
import dotenv from "dotenv";
import sentimientosRouter from './src/routes/sentimientos.route.js';
import visionRouter from './src/routes/vision.route.js';

dotenv.config();
const PORT=process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', async (req, res) => {
  try{
    res.render('home/index');
  }catch(error){
    console.error('Error al cargar la página de inicio:', error);
    res.status(500).send('Error al cargar la página de inicio');
  }
});

app.use(sentimientosRouter);
app.use(visionRouter);

app.listen(PORT, ()=>{
  console.log(`🕺 I'M ALIVE => PORT: ${PORT}`);
})