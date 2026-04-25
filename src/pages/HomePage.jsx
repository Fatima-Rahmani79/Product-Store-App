import { useSearchParams } from "react-router-dom";
import SearchFilterBar from "../components/product/SearchFilterBar";
import ProductList from "../components/product/ProductList";

export default function HomePage() {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "";

  return (
    <>
      <SearchFilterBar
        search={search}
        category={category}
        onChange={setParams}
      />

      <ProductList search={search} category={category} />
    </>
  );
}
