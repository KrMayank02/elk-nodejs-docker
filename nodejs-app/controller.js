import logger from "./logger.js"

const homeController = (req,res) =>{
    try{
        logger.info("Welcome to Home Page of Node-js Application")
        res.send("Welcome to Home Page of Node-js Application")
    }catch(error){
        console.log(error)
    }
}

const postController = (req,res) => {
    try{
        logger.info("Welcome to Post page")
        res.send("Welcome to Post page")
    }catch(error){
        console.log(error)
    }
}

const controllers = { homeController, postController}

export default controllers
