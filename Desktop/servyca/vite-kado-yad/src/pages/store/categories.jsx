import Categories from "../../components/categories/index";
import TopNav from "../../components/navbar/top-nav";
import { useShopCategories } from "../../@core/api/querys";
import BackButton from "../../@core/utils/back-button";
import PageLoader from "../../@core/utils/PageLoader";

function CategoriesPage() {
  const {
    data: categoriesData,
    isLoading,
    isError,
    error,
  } = useShopCategories();

  return (
    <PageLoader isLoading={isLoading}>
      <div className="container">
        <TopNav />
        <div className="ml-3">
          <BackButton title="Categories" />
        </div>

        {isError && <p>Error fetching categories: {error.message}</p>}
        {categoriesData && <Categories data={categoriesData?.data} />}
      </div>
    </PageLoader>
  );
}

export default CategoriesPage;
