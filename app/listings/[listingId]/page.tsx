import getCurrentUser from "@/app/actions/getCurrent";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import ClientOnly from "@/app/components/ClientOnly";

interface IParams {
  listingId?: string,
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
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
        />
      </ClientOnly>
     
    </div>
  )
}

export default ListingPage;