import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;
const enumStatus = {
  SUCCESS: "Success",
  WAITING: "Waiting",
};
const OrderSchema = new Schema({
  status: {
    type: String,
    enum: Object.keys(enumStatus),
    default: "Waiting",
    index: true,
  },
  ownerName: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
  totalPrice: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const OrderModel = mongoose.model("Order", OrderSchema);

export const OrderTC = composeWithMongoose(OrderModel, baseOptions);

export default OrderModel;
