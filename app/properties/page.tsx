import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title='unauthorized'
        subtitle='Please login'
      />
    )
  }

  const listings = await getListings({
    params: currentUser.id
  })

  if (listings.length === 0) {
    return (
      <EmptyState
        title='no properties found'
        subtitle='Looks like you have no properties to list.'
      />
    )
  }

  return(
    <PropertiesClient 
      listings={listings}
      currentUser={currentUser}
    />
  )
}

export default PropertiesPage;