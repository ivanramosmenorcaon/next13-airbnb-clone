import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import getCategories from "@/app/actions/getCategories";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();
  const categories = await getCategories({ language: "es" });
  
  if (!listing) {
    return (
      <>
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />
    </>
  );
};

export default ListingPage;
