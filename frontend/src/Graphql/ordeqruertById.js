import gql from "graphql-tag";


export const ORDERS_QUERY_BY_ID = gql`
query ($id:MongoID!){
    order(filter:{_id:$id}){
      status
      ownerName
      timestamp
      totalPrice
      owner {
          username
          fullname
          tel
      }
      products {
        name
        
      }
    }
  }
  `