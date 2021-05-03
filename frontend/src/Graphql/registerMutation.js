import { gql } from '@apollo/client'

export const REGISTER_MUTATION = gql`
mutation($record:CreateOneUserInput!){
    createUser(record:$record){
      record {
        _id
        fullname
        username
        role
      }
    }
  }
`
