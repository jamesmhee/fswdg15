import { gql } from "@apollo/client";

export const SHOW_CART_QUERY = gql`
  query($username: String!) {
    customers(filter: { username: $username }) {
      username
    }
    cart(filter: { ownerName: $username }) {
      totalCount
      totalPrice
      ownerName
    }
    products(filter: { appearInCart: { cartOwner: $username } }) {
      _id
      appearInCart {
        cartOwner
        quantity
      }
      name
      price
    }
  }
`;
