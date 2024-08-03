import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCycle, AnimatePresence } from 'framer-motion';

import { useToast } from 'hooks';
import { AuthContext } from 'context';
import { Landing } from 'components/layout';
import { Spinner } from 'components/widgets';
import { EXPLORE_EVENTS } from 'routes/CONSTANTS';
import { GET_EVENT_BY_ID } from 'api/event/queries';
import { FOLLOW, UNFOLLOW } from 'api/users/mutations';

import BookEventView from './View';
import { Checkout } from 'components/modules';

export const BookEventContainer = () => {
  const { url } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useCycle(false, true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfTickets, setNoOfTickets] = useState(1);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_EVENT_BY_ID, {
    variables: {
      url,
    },
  });

  if (error) {
    toast('error', error?.message);

    setTimeout(() => {
      navigate(EXPLORE_EVENTS);
    }, 5000);
  }

  useEffect(() => {
    setIsFollowing(() => {
      return data?.event.organizer.followers.includes(user?.id);
    });
  }, [data?.event.organizer.followers, user?.id]);

  useEffect(() => {
    refetch({ url });
    setIsOrganizer(() => {
      return user?.id ? data?.event.organizer.id === user?.id : true;
    });
    data?.event.ticket.type === 'paid' && setTotalPrice(data?.event.ticket.price * noOfTickets);
  }, [
    noOfTickets,
    isOrganizer,
    isFollowing,
    data?.event.ticket.type,
    data?.event.organizer.id,
    user?.id,
  ]);

  const [followUser, {}] = useMutation(FOLLOW, {
    variables: {
      userId: data?.event.organizer.id,
    },
  });

  const [unfollowUser, {}] = useMutation(UNFOLLOW, {
    variables: {
      userId: data?.event.organizer.id,
    },
  });

  const ticket = (type = 'add') => {
    setNoOfTickets((prev) => {
      if (type === 'sub') {
        if (prev > 1) {
          return prev - 1;
        }
        return 1;
      } else {
        return prev + 1;
      }
    });
  };

  const follow = () => {
    console.log(data?.event.organizer);
    isFollowing
      ? unfollowUser({
          variables: {
            userId: data?.event.organizer.id,
          },
        })
          .then((res) => {
            setIsFollowing(false);
            toast('success', res?.data.unFollow.message);
          })
          .catch((err) => {
            toast('error', err?.message);
          })
      : followUser({
          variables: {
            userId: data?.event.organizer.id,
          },
        })
          .then((res) => {
            setIsFollowing(true);
            toast('success', res?.data.follow.message);
          })
          .catch((err) => {
            toast('error', err?.message);
          });
  };

  return (
    <Landing>
      {loading || !data?.event ? (
        <div className="h-[90vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <BookEventView
            ticket={ticket}
            noOfTickets={noOfTickets}
            totalPrice={totalPrice}
            loading={loading}
            event={data?.event}
            follow={follow}
            isFollowing={isFollowing}
            isOrganizer={isOrganizer}
            bookEvent={() => setOpen()}
          />
          {open && (
            <AnimatePresence>
              <Checkout
                close={() => setOpen()}
                data={{ ...data?.event, noOfTickets, totalPrice }}
              />
            </AnimatePresence>
          )}
        </>
      )}
    </Landing>
  );
};
