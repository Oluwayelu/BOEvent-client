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

export const FOLLOW = gql`
  mutation Follow($userId: String!) {
    follow(userId: $userId) {
      message
      user {
        email
        following
        followers
      }
    }
  }
`;

export const UNFOLLOW = gql`
  mutation UnFollow($userId: String!) {
    unFollow(userId: $userId) {
      message
      user {
        email
        following
        followers
      }
    }
  }
`;
