import { gql } from '@apollo/client';

export const GET_BOOKINGS = gql`
  query GetBookings {
    bookings {
      id
      email
      country
      state
      address
      postal
      name {
        firstname
        lastname
        fullname
      }
      event {
        id
        title
        url
        banner
        description
        category
        ticket {
          type
          price
          stock
          stockType
        }
        time {
          endDate
          endTime
          startDate
          startTime
        }
        venue {
          location
          type
        }
      }
    }
  }
`;

export const GET_BOOKING = gql`
  query ($id: String!) {
    booking(id: $id) {
      id
      email
      country
      state
      address
      postal
      name {
        firstname
        lastname
        fullname
      }
      event {
        id
        title
        url
        banner
        description
        category
        summary
        ticket {
          type
          price
          stock
          stockType
        }
        time {
          endDate
          endTime
          startDate
          startTime
        }
        venue {
          location
          type
        }
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetBookings {
    orders {
      id
      email
      country
      state
      address
      postal
      name {
        firstname
        lastname
        fullname
      }
      event {
        id
        title
        url
        banner
        description
        category
        ticket {
          type
          price
          stock
          stockType
        }
        time {
          endDate
          endTime
          startDate
          startTime
        }
        venue {
          location
          type
        }
      }
    }
  }
`;
