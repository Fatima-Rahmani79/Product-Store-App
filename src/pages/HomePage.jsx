import { useSearchParams } from "react-router-dom";
import SearchFilterBar from "../components/product/SearchFilterBar";
import ProductList from "../components/product/ProductList";

export default function HomePage() {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "";

  return (
    <>
      <SearchFilterBar
        search={search}
        category={category}
        sort={sort}
        setParams={setParams}
      />

      <ProductList search={search} category={category} sort={sort} />
    </>
  );
}
