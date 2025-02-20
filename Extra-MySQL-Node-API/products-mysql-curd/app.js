const express = require('express')
const Product = require('./models/product')
const productRoutes = require('./routes/productRoutes')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())

app.use(cors())

Product.sync().then(()=>console.log('Database Synced successfully'))
                .catch((err)=> console.log('Error Syncing database: ', err))

app.use('/products', productRoutes)
app.use((req,res, next)=>{
    res.status(404).json({error: 'Route not found'})
})

app.listen(port, ()=>console.log(`Server running at http://localhost:${port}`))