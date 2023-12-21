import getCurrentUser from "@/app/actions/getCurrent";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import ClientOnly from "@/app/components/ClientOnly";
import geteReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string,
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await geteReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState/>
  }

  return(
    <div>
      <ClientOnly>
        <ListingClient 
          listing={listing}
          currentUser={currentUser}
          reservations={reservations}
        />
      </ClientOnly>
     
    </div>
  )
}

export default ListingPage;