import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <Skeleton height={200} />
      <Skeleton count={2} />
    </div>
  );
};

export default ProductSkeleton;
