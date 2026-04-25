import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../features/cart/cartSelectors";
import { clearCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.title} - {item.quantity}
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}
