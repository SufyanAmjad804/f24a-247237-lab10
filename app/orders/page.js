
import orders from "../orders";

export default function OrdersPage() {
  const mondayOrders = orders.filter(
    (order) => order.due === "Monday"
  );

  return (
    <div>
      <h2>All Tailor Orders</h2>

      <table className="ordersTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Dress</th>
            <th>Price</th>
            <th>Due Day</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.dress}</td>
              <td>Rs. {order.price}</td>
              <td>{order.due}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Due Monday: {mondayOrders.length}</h3>
    </div>
  );
}
