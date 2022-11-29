import "../App.css";
import { Button } from '@mui/material';

function Cart ({cart, setCart, removeCart}) {
  return (
  <div className="window" style={{ width: 300, display: "inline-block" }}>
          <div className="title-bar">
            <div className="title" style={{ textDecoration: "underline" }}>
              My Cart
            </div>
            <div style={{ marginLeft: "-1.5rem" }}>
              <Button onClick={() => setCart([])} style={{ fontSize: "20px", marginLeft: "1rem" }}>Empty Cart</Button>
            </div>
          </div>
          <ul className="window-body tree-view" style={{height: 340}}>
            {cart.map((item, index) => (
              <li style={{ fontSize: "12px" }}>
                <b>{item.name}</b> &#xd7;{item.count}
                <span style={{ float: 'right' }}>
                  Price: ${(item.price * item.count).toFixed(2)} 
                  <Button onClick={(e) => removeCart(e, item)} style={{ fontSize: "20px", marginLeft: "1rem" }}>X</Button>
                </span>
              </li>
            ))}
          </ul>
          <div className="status-bar">
            <p className="status-bar-field">{cart.length === 0 ? `Your cart is empty!` : `${cart.length} item${cart.length === 1 ? '' : 's'}`}</p>
            <p className="status-bar-field" style={{textAlign: 'right'}}>Total: <b>${cart
            .reduce((subtotal, item) => subtotal + item.count * item.price, 0)
            .toFixed(2)}</b></p>
          </div>
        </div>
  );
}

export default Cart;