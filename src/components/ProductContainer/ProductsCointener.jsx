import React from "react";

import ProductHold from "./ProductHold";
const data = {
  title: "New Movies",
  data: [
    {
      id: 1,
      title: "New Movies",
      image:
        "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/cvsc-1721568059771.jpg",
    },
    {
      id: 2,
      title: "New Movies",
      image:
        "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-1721654033425.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-4-1721583090536.jpg",
    },
    {
      id: 4,
      title: "New Movies",
      image:
        "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-1720379628225.jpg",
    },
  ],
};
const data2 = {
  title: "Top Movies",
  data: [
    {
      id: 1,
      title: "new Movies",
      image:
        "https://i.pinimg.com/564x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg",
    },
    {
      id: 2,
      title: "New Movies",
      image:
        "https://i.pinimg.com/736x/51/26/08/512608d675fd98fca4105f90ab7d6d5c.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/24/ab/ae/24abae63eacee53b19a8c87d0624fb6a.jpg",
    },
  ],
};
const data3 = {
  title: "Comedy Movies",
  data: [
    {
      id: 1,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/e1/a7/62/e1a7620432b5105429e73ca4ca16a12a.jpg",
    },
    {
      id: 2,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/5e/32/f9/5e32f90ff44d49d666df9c6521b000c0.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/75/4e/b8/754eb80cf8699804c0c3588155149df8.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/9f/e0/49/9fe0497e8ac5724db7df481948d9a0bf.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/736x/35/8c/22/358c22c6c79303f85ccc0f05e24f71f8.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/31/29/b8/3129b8ab849a232ed46311d1624a94f3.jpg",
    },
    {
      id: 3,
      title: "New Movies",
      image:
        "https://i.pinimg.com/564x/37/a5/92/37a5922f0b787878f6114b86cd94c630.jpg",
    },
  ],
};
function ProductsCointener() {
  return (
    <div>
      <ProductHold datas={data2} />
      <ProductHold datas={data} />
      <ProductHold datas={data3} />
    </div>
  );
}

export default ProductsCointener;
