import mongoose ,{Schema,model} from "mongoose";


const mongourl:string = "mongodb://mukundmongo:27017/user_data";

mongoose.connect(mongourl)
.then(()=>
{
    console.log('database connected sucessfully!');

}).catch((err)=>
{
    console.log('database not connected'+ err)
})


interface User{
 name : string,
 age : number,
 email : string
};

const userschema = new Schema <User>({
    name: {
        type : String,required:true,
    },
    age: {
        type : Number ,required:true,
    },
    email : {
        type : String , required:true
    }
});

const bucket = mongoose.model<User>('data',userschema);

export default bucket;
