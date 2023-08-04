import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent($eventInput: EventInput!) {
    createEvent(eventInput: $eventInput) {
      message
      event {
        id
        title
        banner
        description
        organizer
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
  }
`;
