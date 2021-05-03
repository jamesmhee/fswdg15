import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  nameoncard: { type: String, require: true, index: true},
  cardnumber: { type: String, require: true, index:true},
  expdate: { type: String, require: true, index:true},
  cvcode: { type: String, require: true, index:true},
  timestamp: { type: Date, default: Date.now },
  ownerName: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
  orderOwner: {
    type: String,
    require: true,
    index: true,
    ref: "Order",
  },
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const PaymentModel = mongoose.model("Payment", PaymentSchema);

export const PaymentTC = composeWithMongoose(PaymentModel, baseOptions);

export default PaymentModel;
