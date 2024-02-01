import React, { lazy, Suspense } from "react";
import { useQuery } from "react-query";
import TopNav from "../components/navbar/top-nav";
import Carousel from "../components/carousel";
import SeeAll from "../@core/utils/see-all";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getEventsNearby } from "../@core/api/events";
import {
  getSpecialOffers,
  getShopEconomial,
  getShopGiftPack,
} from "../@core/api/shopApi";

import MultiImageCarosel from "../components/carousel/multi-img-carousel";

const MyComponent = () => {
  const {
    data: gitfPack,
    isLoading: gitfPackLoading,
    isError: gitfPackError,
  } = useQuery("giftPack", () => getShopGiftPack({ page: 1 }));

  const {
    data: economial,
    isLoading: ecoLoading,
    isError: ecoError,
  } = useQuery("economial", () => getShopEconomial({ page: 1 }));
  const {
    data: specialoffersData,
    isLoading: specialoffersLoading,
    isError: specialoffersError,
  } = useQuery("specialoffersProducts", () => getSpecialOffers({ page: 1 }));

  const {
    data: nearbyEvents,
    isLoading: nearbyEventsLoading,
    isError: nearbyEventsError,
  } = useQuery("nearbyEvents", () => getEventsNearby({ page: 1 }));

  console.log(economial, "ecooooooooooooooooooo");

  return (
    <main className="container ">
      <TopNav />
      {specialoffersLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton count={1} height={200} className="container bg-[white]" />
        </SkeletonTheme>
      ) : (
        <Carousel data={specialoffersData?.specialOffers} />
      )}
      <Suspense fallback={<Skeleton>Loading...</Skeleton>}>
        {nearbyEvents?.length > 0 && (
          <div>
            <SeeAll title="رویدادهای نزدیک" link="/services" />
            <MultiImageCarosel data={nearbyEvents} event />
          </div>
        )}
        <SeeAll title="پکیج های هدیه" link="/" />
        <MultiImageCarosel data={gitfPack?.giftPacks} />
        <SeeAll title="خرید اقتصادی" link="/" />
        <MultiImageCarosel data={economial?.economicalPacks} />
      </Suspense>
    </main>
  );
};

export default MyComponent;
