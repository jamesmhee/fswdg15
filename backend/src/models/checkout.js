import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;
const CheckoutSchema = new Schema({
  firstname: { type: String, required: true},
  lastname: { type: String, required: true},
  email: { type: String },
  tel: { type: String, required: true,},
  county: { type: String },
  city: { type:String },
  state: { type:String  },
  address: { type:String},
  zip: {type:String},

  ownerName: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },

});
export const CheckoutModel = mongoose.model("Checkout", CheckoutSchema);

export const CheckoutTC = composeWithMongoose(CheckoutModel);

export default CheckoutModel;
