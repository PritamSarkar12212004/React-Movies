import React, { useContext } from "react";
import ProductHold from "./ProductHold";
import ContextMaker from "../../context/ContextMaker";
function ProductsCointener() {
  const { data, data2, data3 } = useContext(ContextMaker);
  return (
    <div className=" mb-14 scrollbar-hide">
      <ProductHold datas={data2} />
      <ProductHold datas={data} />
      <ProductHold datas={data3} />
    </div>
  );
}

export default ProductsCointener;
