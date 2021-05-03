import { gql } from '@apollo/client'
export const UPDATE_CART_MUTATION = gql`
mutation($id:MongoID!,$record:UpdateByIdProductInput!){
  updateProductById(_id:$id, record:$record){
    recordId
    record{
      name
      detail{
        monitor
        cpu
        gpu
        storage
        ram
        os
        brand
      }
      price
      url
      isRecommended
      appearInCart{
        cartOwner
        quantity
      }
      appearInOrder{
        orderOwner
        quantity
      }
      _id
    }
    error{
      message
    }
  }
}
`