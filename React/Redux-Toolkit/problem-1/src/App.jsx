import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from './features/cart/cartslice';

const sampleProducts = [
  { id: 1, name: 'Apple', price: 30 },
  { id: 2, name: 'Banana', price: 10 },
  { id: 3, name: 'Orange', price: 20 },
];

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  return (
    <div style={{ margin: '50px' }}>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      {sampleProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - ₹{product.price}
          <button onClick={() => dispatch(addItem(product))} style={{ marginLeft: '10px' }}>Add</button>
        </div>
      ))}

      <h2>Cart Items</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} - ₹{item.price}
            <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: '10px' }}>Remove</button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>

      {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
}

export default App;