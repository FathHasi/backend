const express = require('express')
const bookRouter = require('./routes/bookRouter')
const authorRouter = require('./routes/authorRouter')
const userRouter = require('./routes/userRouter')
const loginRouter =require('./routes/loginRouter')
const homeRouter = require('./routes/homeRouter')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/books', bookRouter)
app.use('/authors',authorRouter)
app.use('/users',userRouter)
app.use('/logins', loginRouter)
app.use('/homes', homeRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(()=> console.log("connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://haseebahasbullah7313:IBmHPqfkGmUHbEzA@cluster0.bznso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}




