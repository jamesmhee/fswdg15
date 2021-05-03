import moment from "moment";
import { PaymentTC, OrderTC, UserTC } from "../../models";

PaymentTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});
PaymentTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.ownerName }),
},
  projection: { ownerName: 1 },
});

PaymentTC.addRelation("order", {
  resolver: () => OrderTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ ownerName: source.orderOwner }),
},
  projection: { orderOwner: 1 },
});
