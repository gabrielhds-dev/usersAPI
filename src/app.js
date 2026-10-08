
import express from 'express'
import router from './routes/users.routes.js'
import errorMiddlewares from './middlewares/users.middlewares.error.js'

const app = express()
app.use(express.json())

app.use("/users" , router)

app.use(errorMiddlewares)

export default app