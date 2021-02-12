import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <>
      <Skeleton height={200} />
      <Skeleton count={2} />
    </>
  );
};

export default ProductSkeleton;
