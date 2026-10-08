
import app from "./app.js";

const PORT = process.env.PORT

app.listen(PORT , () => {
    console.log(`servidor iniciado na porta: ${PORT}`)
})


