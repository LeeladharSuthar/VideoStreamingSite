import connectDB from './db/index.js'
import dotenv from 'dotenv'
import {app} from './app.js'

dotenv.config()


connectDB()
.then(()=>{
    const availablePort = process.env.PORT || 8080
    app.listen(availablePort, ()=>{
        console.log(`Server Started listening at PORT: ${availablePort}`)
    })
})
.catch((error)=>{
    console.log("ERROR CONNECTING DB.", error)
})

app.get('/', (req, res)=>{
    res.send('Home route')
})