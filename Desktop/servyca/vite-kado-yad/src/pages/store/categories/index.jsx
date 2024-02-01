import TopNav from "../../../components/navbar/top-nav";
import StorePageSlides from "../../../components/carousel/store-page-slides";
import BackButton from "../../../@core/utils/back-button";
import { useShopCategories } from "../../../@core/api/querys";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { shopCategoryPage } from "../../../@core/api/shopApi";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton component

const CategoryPage = () => {
  // const router = useRouter();
  const { categories } = useParams();
  const { data: categoriesData } = useShopCategories();
  const selectedCategory = categoriesData?.data?.find(
    (item) => item.name?.toLowerCase() === categories?.toLowerCase()
  );
  const categoryId = selectedCategory?.id;

  const {
    data: filteredExpertData,
    isLoading,
    isError,
  } = useQuery(
    ["shopCategoryPage", categoryId],
    () => shopCategoryPage({ categoryId, page: 1 }),
    {}
  );

  if (!selectedCategory) {
    return <p>Category not found</p>;
  }

  return (
    <div className="container">
      <TopNav />
      <div className="ml-3">
        <BackButton title={selectedCategory.name} />
      </div>

      <div className="grid mt-5 grid-cols-2  gap-1 items-center">
        {isLoading
          ? // Display a skeleton loading effect while data is loading
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skeleton-item">
                <Skeleton height={200} />
              </div>
            ))
          : // Render the actual content when data is loaded
            filteredExpertData?.data.map((item, index) => (
              <StorePageSlides
                key={index}
                style="bg-white !w-[88%] mx-auto"
                item={item}
              />
            ))}
      </div>
    </div>
  );
};

export default CategoryPage;
