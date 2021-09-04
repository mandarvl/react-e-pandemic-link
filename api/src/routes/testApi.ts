import express, { Request, Response, NextFunction} from 'express' ;
const router = express.Router() ;

router.get("/", function(req: Request, res: Response, next){
    res.send("Ao tsara izy zany");
})

export default router ;