import jwt from "jsonwebtoken"


export const authUser = async (req, res) => {
    try{
        const token = req.cookies.token || req.header.authorization.split(' ')[ 1 ];
        
        if (!token) {
           return res.status(401).send({ error: " Unauthentication User" });
            
        }
        // const token = req.header('Authorization').replace('Bearer', '')



        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(error){
        res.status(401).send({error: "Please Authentication" });
    }
};
