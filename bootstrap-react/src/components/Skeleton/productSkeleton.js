import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductSkeleton = () => {
  return (
    <>
      <SkeletonTheme color="#fffff" highlightColor="#444">
        <Skeleton height={200} />
        <Skeleton count={2} />
      </SkeletonTheme>
    </>
  );
};

export default ProductSkeleton;
