import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
    register(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
      email
      avatar
      name {
        firstname
        lastname
        fullname
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;
