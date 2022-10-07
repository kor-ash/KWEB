const express = require('express');
const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.render('login.pug')
})
app.post('/login',(req,res)=>{
    const id=req.body.id
    const pw=req.body.pw
    return res.send(`Id:${id}, Password:${pw}`)
}) 
app.listen(port, () => console.log(`Server listening on port ${port}!`));