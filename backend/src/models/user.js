import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";
import { composeWithMongooseDiscriminators } from "graphql-compose-mongoose";
const { Schema } = mongoose;
const DKey = "role";
const enumUserRole = {
  ADMIN: "Admin",
  CUSTOMER: "Customer",
};
const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: Object.keys(enumUserRole),
      default: "Customer",
      index: true,
    },
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, require: true, bcrypt: true },
    fullname: { type: String, required: true, trim: true },
    email: { type: String },
    tel: { type: String },
  },
  { discriminatorKey: DKey }
);

UserSchema.plugin(bcrypt);
const AdminSchema = new Schema({});
const CustomerSchema = new Schema({
});

export const UserModel = mongoose.model("User", UserSchema);
export const AdminModel = UserModel.discriminator(
  enumUserRole.ADMIN,
  AdminSchema
);
export const CustomerModel = UserModel.discriminator(
  enumUserRole.CUSTOMER,
  CustomerSchema
);

export const UserTC = composeWithMongooseDiscriminators(UserModel).removeField(
  "password"
);
export const AdminTC = UserTC.discriminator(AdminModel, {
  name: enumUserRole.ADMIN,
});
export const CustomerTC = UserTC.discriminator(CustomerModel, {
  name: enumUserRole.CUSTOMER,
});

export default UserModel;
