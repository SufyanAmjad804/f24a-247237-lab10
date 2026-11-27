
import { notFound } from "next/navigation";
import orders from "../../orders";
import StitchedButton from "../../StitchedButton";

export default async function OrderDetails({ params }) {
  const { id } = await params;

  const order = orders.find(
    (item) => item.id === Number(id)
  );

  if (!order) {
    notFound();
  }

  console.log("Order page for", id);

  return (
    <div>
      <h2>Order Details</h2>

      <div className="orderCard">
        <p>
          <strong>Order ID:</strong> {order.id}
        </p>

        <p>
          <strong>Customer:</strong> {order.customer}
        </p>

        <p>
          <strong>Dress:</strong> {order.dress}
        </p>

        <p>
          <strong>Price:</strong> Rs. {order.price}
        </p>

        <p>
          <strong>Due Day:</strong> {order.due}
        </p>

        <StitchedButton />
      </div>
    </div>
  );
}
