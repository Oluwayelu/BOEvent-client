import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      url
      banner
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
`;

export const GET_EVENT_BY_ID = gql`
  query ($url: String!) {
    event(url: $url) {
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

export const GET_My_EVENTS_CREATED = gql`
  query GetMyEvents {
    myEvents {
      id
      title
      url
      banner
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
`;
