import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser"
import geteReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return(
      <ClientOnly>
        <EmptyState 
          title='Unauthorized'
          subtitle='Please login'
        />
      </ClientOnly>
    )
  }

  const reservations = await geteReservations({
    // This was supposed to be authorId why?
    userId: currentUser.id
  })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState 
          title='No reservations found'
          subtitle='Looks like you have no reservations on your property'
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ReservationsClient 
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default ReservationsPage;