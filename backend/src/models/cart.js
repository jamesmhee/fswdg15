import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose from "mongoose";

const { Schema } = mongoose;
const CartSchema = new Schema({
  totalCount: { type: Number, default: 0 },
  ownerName: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
  totalPrice: { type: Number, default: 0 },
});

export const CartModel = mongoose.model("Cart", CartSchema);

export const CartTC = composeWithMongoose(CartModel);

export default CartModel;
