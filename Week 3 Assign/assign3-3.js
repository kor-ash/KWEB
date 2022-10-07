const express = require('express');
const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/factorial',(req,res)=>{
    return res.redirect(`/factorial/${req.query.number}`)
})
app.get('/factorial/:number',(req,res)=>{
    let num=req.params.number
    let ans=1;
    for(let i=1;i<=parseInt(num);i++)
    {
        ans*=i;
    }
    return res.send(`factorial(${num}) is ${ans}`)
})
app.listen(port, () => console.log(`Server listening on port ${port}!`));