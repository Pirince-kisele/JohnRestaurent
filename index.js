const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) =>{
  res.render('pages/index' , {
    title: 'Home',
    name: 'David'
  } )
});



app.listen(port, () =>{

  console.log('server is running on port', port)
});
  

