const mongoose = require("mangoose");
const connectionRequestSchema = new mongoose.schema({


fromUserId: {
             type: mongoose.schema.Types.ObjectId,
             required: true,
},
toUserId: {
             type: mongoose.schema.Types.ObjectId,
             required: true,

},
status:{
         type:String,
         required: true,
         enum:{
            value:  [ignore, intersted, accepted, rejected],
            message: `{VALUE}  is incorrect status type}`
         },
},
},

    {timestamp:true}
);


 const ConnectionRequestModel=new mongoose.model(
   "ConnectionRequest" ,connectionRequestSchema
);

module.exports = ConnectionRequestModel;