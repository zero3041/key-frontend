"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbProduct from "@/components/Breadcrumb/BreadcrumbProduct";
import Default from "@/components/Product/Detail/Default";
import Footer from "@/components/Footer/Footer";
import { ProductType } from "@/type/ProductType";
import productData from "@/data/Product.json";
import {normalizeProductData} from "@/utils/dataHelpers";

const ProductDefault = () => {
  const searchParams = useSearchParams();
  let productId = searchParams.get("id");

  const normalizedProducts = normalizeProductData(productData);

  if (productId === null) {
    productId = "1";
  }

  return (
    <>
      {/*<TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />*/}
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
        <BreadcrumbProduct
          data={normalizedProducts}
          productPage="Chi tiết"
          productId={productId}
        />
      </div>
      <Default data={normalizedProducts} productId={productId} />
      <Footer />
    </>
  );
};

export default ProductDefault;
