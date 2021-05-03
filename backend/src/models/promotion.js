import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PromotionSchema = new Schema({
  name: { type: String, require: true, index: true },
  detail: { type: String, require: true },
  code: { type: String, index: true },
  timestamp: { type: Date, default: Date.now },
  timeexpire: { type: Date },
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const PromotionModel = mongoose.model("Promotion", PromotionSchema);

export const PromotionTC = composeWithMongoose(PromotionModel, baseOptions);

export default PromotionModel;
