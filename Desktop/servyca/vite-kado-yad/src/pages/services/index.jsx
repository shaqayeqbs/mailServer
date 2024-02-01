import React from "react";
import TopNav from "../../components/navbar/top-nav";
import BackButton from "../../@core/utils/back-button";
import Categories from "../../components/categories/index";

function ServiceCategories() {
  return (
    <>
      <TopNav />
      <div className="px-4">
        {" "}
        <BackButton title="what kind of service do you want?" />
      </div>

      <Categories link="/services" />
    </>
  );
}

export default ServiceCategories;
