import { gql } from '@apollo/client'

export const CART_QUERY = gql` 

query {
    carts{
      count
      ownerId
      productCart
      price
      name
    }
  }
`