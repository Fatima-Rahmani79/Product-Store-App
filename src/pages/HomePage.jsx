import { useSearchParams } from "react-router-dom";
import HeroSection from "../components/layout/HeroSection";
import SearchFilterBar from "../components/product/SearchFilterBar";
import ProductList from "../components/product/ProductList";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "";

  return (
    <>
      <HeroSection />
      <SearchFilterBar
        search={search}
        category={category}
        sort={sort}
        setParams={setParams}
      />
      <ProductList search={search} category={category} sort={sort} />
      <Footer />
    </>
  );
}
