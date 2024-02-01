import React from "react";
import TopNav from "../../components/navbar/top-nav";
import BackButton from "../../@core/utils/back-button";
import RecomendedSlides from "../../components/carousel/recomended-slides";
import RecomendedData from "../../@core/data/recomended";
function Services() {
  return (
    <>
      <TopNav />
      <div className="p-3">
        <BackButton title="Recommended Services" />
      </div>
      <div className="grid grid-cols-2 ">
        {RecomendedData.map((item, index) => (
          <RecomendedSlides
            key={index}
            item={item}
            bgColor="bg-[white]"
            bookBtn
          />
        ))}
      </div>
    </>
  );
}

export default Services;
