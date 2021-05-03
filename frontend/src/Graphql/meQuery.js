import { gql } from '@apollo/client'

export const ME_QUERY = gql`
query {
  me {
    _id
    role
    username
    fullname
    email
    tel
  }
}
`