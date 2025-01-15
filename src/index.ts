import bucket from "./db";
import express, { Express, Request, Response } from 'express';
import cors from 'cors'

const app : Express = express();
app.use(cors())

const port : number = 3000;


app.use(express.json());

app.post('/user',async(req:Request,res:Response)=>
{
    try{
        const {name,age,email} = req.body;
        const savedata = await bucket.create({name,age,email})
        if(!savedata)
        {
          throw Error('not user_data saved sucessfully!')
        }
       res.status(200).json({
        status : "sucessfully created !",
        user : savedata,
       })

    }catch(err)
    {
      console.log('something might wrong !'+ err)
    }
})

app.get('/',async(req:Request,res:Response)=>
{
    try{
       const mightdata = await bucket.find();
       if(!mightdata)
       {
        console.log('data is not in the db!')
       }
       res.status(200).json({
        status:"fetch sucessfully!",
        data : mightdata,
       })
    }catch(err)
    {
     console.log('something might wrong here!'+err)
    }
})

app.listen(port,()=>
{
    console.log(`listening on port :${port}`)
})
