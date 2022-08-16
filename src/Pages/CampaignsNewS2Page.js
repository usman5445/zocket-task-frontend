import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignProductOption from "../Components/CampaignProductOption";
import { getAllProducts } from "../Utils/api";
function CampaignsNewS2Page({ setSteps, setData, data }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]?._id);
  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-white text-start p-4 border rounded-lg flex flex-col relative">
      <div>
        <span className="font-bold">Choose the Product</span>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-3  gap-3">
        {products.map((product) => (
          <CampaignProductOption
            img={product?.imgUrl}
            isActive={selectedProduct == product._id}
            onClick={() => setSelectedProduct(product._id)}
            title={product?.name}
            rate={product?.price}
            key={product?._id}
          />
        ))}
      </div>
      <div className="self-end">
        <button
          onClick={() => {
            navigate("/campaigns/new/1");
            setSteps(1);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Back
        </button>
        <button
          onClick={() => {
            setData({ ...data, productId: selectedProduct });
            navigate("/campaigns/new/3");
            setSteps(3);
          }}
          className="py-2 w-fit px-12  m-4 bg-blue-600 rounded-lg text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CampaignsNewS2Page;
