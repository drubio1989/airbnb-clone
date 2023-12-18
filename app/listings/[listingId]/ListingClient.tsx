'use client'

import { SafeUser, SafeListing } from '@/app/types';
import { Reservation } from '@prisma/client'
import { useMemo } from 'react';
import { categories } from '@/app/components/navbar/Categories';
import ListingHead from '../../components/listings/ListingHead';
import ListingInfo from '@/app/components/listings/ListingInfo';
import Container from '@/app/components/Container';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing &  {
    user: SafeUser
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser
}) => {

  const category = useMemo(() => {
    const filteredCategories = categories.filter((item) => item.label === listing.category);
    return filteredCategories[0] || null;
 }, [listing.category]);

  return (
   <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className='
            grid
            grid-cols-1
            md:grid-cols-7
            md:gap-10
            mt-6
          '>
           <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            > 

            Something
            </div>
          </div>
        </div>
      </div>
   </Container>
  )
}

export default ListingClient