import express, { Request, Response, NextFunction} from 'express' ;
const router = express.Router() ;

router.get("/", function(req: Request, res: Response, next){
    res.send("API is working properly");
})

export default router ;