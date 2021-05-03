import "./mongoose-connect";
import { CustomerModel, AdminModel, ProductModel, CartModel} from "./models";
import admins from "./data/admins.json";
import customers from "./data/customers.json";
import products from "./data/products.json";
import carts from "./data/carts.json";

const migrate = async () => {
  await AdminModel.create(admins.map((user) => ({ ...user })));
  await CustomerModel.create(customers.map((user) => ({ ...user })));
  await ProductModel.create(products.map((product) => ({ ...product })));
  await CartModel.create(carts.map((cart) => ({ ...cart })));
  console.log("Migrate completed");
};
migrate();
