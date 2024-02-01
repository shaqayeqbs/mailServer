import React from "react";
import { useQuery } from "react-query";
import Categories from "../../components/categories";
import TopNav from "../../components/navbar/top-nav";
import Carousel from "../../components/carousel";
import SeeAll from "../../@core/utils/see-all";
import MultiImageCarosel from "../../components/carousel/multi-img-carousel";
import { shopCategories } from "../../@core/api/shopApi";
import {
  getShopProducts,
  getShopSuperDiscount,
  getSpecialOffers,
} from "../../@core/api/shopApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; // Import Skeleton

function Store() {
  // Fetch categories data using react-query
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery("shopCategories", () => shopCategories({ page: 1 }));

  // Fetch shop products data
  const {
    data: shopProductsData,
    isLoading: shopProductsLoading,
    isError: shopProductsError,
  } = useQuery("shopProducts", () => getShopProducts({ page: 1 }));

  // Fetch super discount products data
  const {
    data: superDiscountData,
    isLoading: superDiscountLoading,
    isError: superDiscountError,
  } = useQuery("superDiscountProducts", () =>
    getShopSuperDiscount({ page: 1 })
  );
  const {
    data: specialoffersData,
    isLoading: specoaoffersLoading,
    isError: specialoffersError,
  } = useQuery("specialoffersProducts", () => getSpecialOffers({ page: 1 }));
  console.log("special", specialoffersData);
  return (
    <div className="container">
      <TopNav cartIcon />

      {/* Carousel for Super Discount */}
      {superDiscountLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton count={1} height={200} className="container bg-[white]" />
        </SkeletonTheme>
      ) : (
        <Carousel data={specialoffersData?.specialOffers} />
      )}
      <h2 className="font-bold text-right px-5  pb-3 text-m">دسته بندی ها</h2>
      {/* Categories */}
      <div className=" px-5">
        {categoriesLoading ? (
          <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
            <Skeleton
              count={4}
              height={100}
              className="my-custom-categories-skeleton flex justify-between"
            />
          </SkeletonTheme>
        ) : categoriesError ? (
          <p>Error fetching categories</p>
        ) : (
          <Categories data={categoriesData?.data} more style="" />
        )}
      </div>

      {/* New Arrivals */}
      <SeeAll title="پرفروش ترین ها" link="/store/new-arrivals" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-new-arrivals-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      {/* Super Discount */}
      <SeeAll title="خرید اقتصادی" link="/store/super-discount" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-super-discount-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      {/* Suggestions */}
      <SeeAll title="پرطرفدارها" link="/store/suggestion-for-you" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-suggestions-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      <div className="mb-28"></div>
    </div>
  );
}

export default Store;
