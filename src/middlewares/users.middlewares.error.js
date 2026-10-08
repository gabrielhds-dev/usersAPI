
function errorMiddlewares(err , req , res , next){
    console.error(err)

    return res.status(500).json({
        error: "erro no servidor"
    })
}

export default errorMiddlewares