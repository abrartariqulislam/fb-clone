const createHttpError = require("http-errors")

// users controller
exports.usersAll = async (req, res, next)=>{
    try {
        res.send("user route");
    } catch(error){
        next (createHttpError(error))
    }
}


