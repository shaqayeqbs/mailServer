import React, { useState } from "react";
import { useQuery } from "react-query";
import OrderTabs from "../../../components/orders/order-tab";
import BackButton from "../../../@core/utils/back-button";
import OrderList from "../../../components/orders";
import { getShopOrders } from "../../../@core/api/shopApi";

function ManageProductOrders() {
  const [listType, setListType] = useState("completed"); // Default to upcoming

  const handleListTypeChange = (type) => {
    setListType(type);
  };

  // Use useQuery to fetch shop orders
  const {
    data: ordersData,
    isLoading,
    isError,
    error,
  } = useQuery("shopOrders", () => getShopOrders({ type: listType }));
  console.log(ordersData);
  return (
    <div className="p-5 container w-full overflow-auto">
      <BackButton title="All Product Orders" />
      <OrderTabs
        listType={listType}
        store
        handleListTypeChange={handleListTypeChange}
      />

      {/* Render based on the data status */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching orders: {error.message}</p>}
      {ordersData?.data && (
        <OrderList store listType={listType} orders={ordersData?.data} />
      )}
    </div>
  );
}

export default ManageProductOrders;
