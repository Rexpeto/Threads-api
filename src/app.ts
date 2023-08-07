import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import router from './routes'

const app = express()

// ? Enable response json
app.use(express.json())

// ? Initial cors
app.use(cors())

// ? Dynamics routers
app.use(router)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`⚡ Working by the port ${PORT}`)
})
