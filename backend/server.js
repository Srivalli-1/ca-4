const mongoose=require('mongoose')

const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())

app.use(cors())

const dotenv=require('dotenv')
dotenv.config()

const PORT=process.env.port||4004

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('mongodb connected'))
.catch((err)=> console.log(err))

const abc=require('./Routes')
app.use('/routes',abc)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`server is running susscessfully ${PORT}`)
})