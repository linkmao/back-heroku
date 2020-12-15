const express = require ('express');
const morgan = require('morgan');
const apiRouter= require('./routes');
const bodyPArser = require('body-parser');	
const cors = require('cors');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
	res.send('Hello world');
});


app.use('/api',apiRouter);


app.set('PORT',  process.env.PORT || 3000);
app.listen(app.get('PORT'),()=>{
	console.log('server up');
});