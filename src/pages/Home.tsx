import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProduct } from "../redux/slice/productSlice";
import { type RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import CardSkeleton from "../components/CardSkeleton";

// const apiUrl = process.env.REACT_APP_API_URL;

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const loading = useSelector((state: RootState) => state.product.isLoading);
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  useEffect(() => {
    setTimeout(() => {
      dispatch(FetchProduct(`https://dummyjson.com/products`) as any);
    }, 500);
  }, [dispatch]);

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 ${
        theme === "dark" ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : ""
      } md:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-8 my-4`}
    >
      {loading ? (
        <>
          <>
            {[...Array(10)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        </>
      ) : (
        products.map((product) => (
          <div className="group" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
