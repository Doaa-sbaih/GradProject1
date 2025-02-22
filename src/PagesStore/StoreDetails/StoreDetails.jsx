import React, { useEffect, useState } from "react";

const StoreDetails = ({ storeId }) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    // هنا يمكنك جلب تفاصيل المتجر باستخدام الـ storeId (مثال: API أو بيانات ثابتة)
    const fetchedStore = { id: storeId, name: "متجر مثال", description: "وصف المتجر" }; // مجرد مثال
    setStore(fetchedStore);
  }, [storeId]);

  if (!store) return <div>Loading...</div>;

  return (
    <div>
      <h2>{store.name}</h2>
      <p>{store.description}</p>
    </div>
  );
};

export default StoreDetails;
