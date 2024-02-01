// OrderPage.js
import React, { useState } from "react";
import BackButton from "../../@core/utils/back-button";
import { Notif } from "../../@core/icons";
import OrderList from "../../components/orders";
import OrderTabs from "../../components/orders/order-tab";
import { orderDummyData } from "../../@core/data/order-data";
const OrderPage = () => {
  const [listType, setListType] = useState("upcoming"); // Default to upcoming

  const handleListTypeChange = (type) => {
    setListType(type);
  };

  return (
    <div className="p-5 container w-full">
      <div className="flex justify-between items-center">
        <div className="flex font-bold text-m">
          <BackButton />
          <h2>All Orders</h2>
        </div>
        <div>
          <Notif />
        </div>
      </div>

      {/* Use the dynamic OrderTabs component */}
      <OrderTabs
        listType={listType}
        handleListTypeChange={handleListTypeChange}
      />

      <OrderList listType={listType} orders={orderDummyData} />
    </div>
  );
};

export default OrderPage;
