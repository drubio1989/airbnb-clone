import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import geteReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title='unauthorized'
        subtitle='Please login'
      />
    )
  }

  const reservations = await geteReservations({
    userId: currentUser.id
  })

  if (reservations.length === 0) {
    return (
      <EmptyState
        title='no trips found'
        subtitle='Looks like you have no trips'
      />
    )
  }

  return(
    <TripsClient 
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default TripsPage;