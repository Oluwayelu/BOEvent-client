import { gql } from '@apollo/client';

export const CREATE_BOOKING = gql`
  mutation CreateBooking($bookingInput: BookingInput!) {
    createBooking(bookingInput: $bookingInput) {
      message
      booking {
        id
        email
        name {
          firstname
          lastname
          fullname
        }
      }
    }
  }
`;
