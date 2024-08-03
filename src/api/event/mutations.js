import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent($eventInput: EventInput!) {
    createEvent(eventInput: $eventInput) {
      message
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
