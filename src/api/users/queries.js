import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      firstname
      lastname
      email
    }
  }
`;

export const LOGIN_SUCCESS = gql`
  query LoginSuccess {
    loginSuccess {
      message
      user {
        avatar
        email
        followers
        following
        name {
          firstname
          fullname
          lastname
        }
      }
    }
  }
`;
