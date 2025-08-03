import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = () => {
  return (
    <>
      <Skeleton count={1} className="md:h-[200px] h-[120px]" />
    </>
  );
};

export default CardSkeleton;
