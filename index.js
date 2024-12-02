require ('dotenv').config()
const express =require ('express')
const app =express()
const port =3000
app.get('/',(req,res)=>
{
    res.send("hello world")
})
app.get('/twitter',(req,res)=>
{
    res.send("sakshi kharchan")
})
app.get('/login',(req,res)=>
{
    res.send('<h1>please login at my server page</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})
app.listen(process.env.PORT,() =>
{
  console.log('example app listening on port ${port}')  
})
