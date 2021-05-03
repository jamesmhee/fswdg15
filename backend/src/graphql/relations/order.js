import { OrderTC, ProductTC, UserTC } from "../../models";

OrderTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({
      username:source.ownerName,
    }),
  },
  projection: { ownerName: 1 },
});
OrderTC.addRelation("products", {
  resolver: () => ProductTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({
      appearInOrder: {
        orderOwner: source.ownerName,
      },
    }),
  },
  projection: { ownerName: 1 },
});
