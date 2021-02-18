import Skeleton from "react-loading-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Skeleton height={456} />
        </div>
        <div className="col-lg-6">
          <br />
          <Skeleton height={30} />
          <Skeleton height={30} />
          <Skeleton width={80} className="mt-5" /> <br />
          <Skeleton width={100} height={30} className="mb-5" />
          <Skeleton height={40} />
          <Skeleton height={40} className="mb-4" />
          <hr />
          <div className="row">
            <div className="col-2">
              <Skeleton circle={true} height={60} width={60} />
            </div>
            <div className="col">
              <Skeleton className="mt-1" />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
