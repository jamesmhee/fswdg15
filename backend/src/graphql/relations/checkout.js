import { CheckoutTC, UserTC } from "../../models";

CheckoutTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.ownerName }),
  },
  projection: { ownerName: 1 },
});