//  Data base kaise connect rahega vo hai isme

import mongoose from "mongoose";


function connect() {
      mongoose.connect(process.env.MONGO_URI)
            .then(()=> {
                  console.log("connected to MongoDB");
            })
            .catch(err => {
                  console.log(err);
            })
}

export default connect