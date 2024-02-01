import React from "react";
import { useQuery } from "react-query";
import TopNav from "../../components/navbar/top-nav";
import BackButton from "../../@core/utils/back-button";
import StorePageSlides from "../../components/carousel/store-page-slides";
import { getSuggestions } from "../../@core/api/shopApi";
import Skeleton from "react-loading-skeleton";

function SuggestionsForYou() {
  const {
    data: suggestionsData,
    isLoading,
    isError,
    error,
  } = useQuery("suggestionsForYou", getSuggestions);

  if (isLoading) {
    return (
      <div className="px-4 container">
        <TopNav cartIcon />
        <div className="mx-3">
          <BackButton title={<Skeleton width={120} />} />
        </div>
        <div className="grid mt-5 grid-cols-2 mdgrid-cols-3 gap-1 items-center">
          {[...Array(6).keys()].map((index) => (
            <StorePageSlides
              key={index}
              style="bg-white mx-auto"
              item={<Skeleton height={300} />}
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching suggestions: {error.message}</p>;
  }

  return (
    <div className="px-4 container">
      <TopNav cartIcon />
      <div className="mx-3">
        <BackButton title="Suggestions For You" />
      </div>
      <div className="grid mt-5 grid-cols-2 mdgrid-cols-3 gap-1 items-center">
        {suggestionsData?.data?.suggestionsForYou?.map((item, index) => (
          <StorePageSlides
            key={index}
            style="bg-white !w-[153px] mx-auto"
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default SuggestionsForYou;
