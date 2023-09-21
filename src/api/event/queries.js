import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      banner
      description
      price
      summary
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
`;

export const GET_EVENT_BY_ID = gql`
  query ($eventId: String!) {
    event(id: $eventId) {
      id
      title
      banner
      description
      price
      summary
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
      organizer {
        name {
          fullname
        }
        followers
        id
      }
    }
  }
`;
