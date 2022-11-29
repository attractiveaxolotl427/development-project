import "./App.css";
import { useState, useEffect } from "react";
import KirbyData from "./assets/data.json";
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import MappedCards from './components/MappedCards.js';
import Cart from './components/Cart.js';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
KirbyData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  //const [count, setCount] = useState([])

  const[data, setData] = useState(KirbyData);

  const[input, setInput] = useState('');

  const[price, setPrice] = useState('');
  

  useEffect(() => {
    const sortedData = [...data];
    if (price.length === 0 && input.length === 0) {
      setData(KirbyData);
    }
    else if (price.length === 0 || price === ' ') {
      setData(sortedData);
      // this is not getting read
    }
    else {
      setData(sortedData.filter(item => 
        {
          return item.price <= price;
        }
      ));
    }
  }, [price]);

  useEffect(() => {
    const sortedData = [...data];
    if (price.length === 0 && input.length === 0) {
      setData(KirbyData);
    }
    else if (input.length === 0 || input === ' ') {
      setData(sortedData);
      // this is not getting read
  }
    else {
      setData(sortedData.filter(item => 
        {
          const capName = item.name.toUpperCase();
          const capInput = input.toUpperCase();
          // const nameArray = capName.split(' ');
          // console.log(nameArray.includes(capInput));
          return capName.includes(capInput);
        }
      ));
    }
  }, [input]);

  // const handlePrice = event => {
  //   // doesn't give data back to default after deleting input, need to put space after input
  //   setPrice(event.target.value);
  //   console.log('price is:', event.target.value);

  //   const sortedData = [...KirbyData];
  //   if (price.length === 0 || price === ' ') {
  //     setData(sortedData);
  //     // this is not getting read
  // }
  //   else {
  //     setData(sortedData.filter(item => 
  //       {
  //         return item.price <= price;
  //       }
  //     ));
  //   }
  // }

  // const handleChange = event => {
  //   // doesn't give data back to default after deleting input
  //   setInput(event.target.value);
  //   console.log('value is:', event.target.value);

  //   const sortedData = [...KirbyData];
  //   if (input.length === 0 || input === '' || input === ' ') {
  //     setData(sortedData);
  //     // this is not getting read
  // }
  //   else {
  //     setData(sortedData.filter(item => 
  //       {
  //         const capName = item.name.toUpperCase();
  //         const capInput = input.toUpperCase();
  //         // const nameArray = capName.split(' ');
  //         // console.log(nameArray.includes(capInput));
  //         return capName.includes(capInput);
  //       }
  //     ));
  //   }
  // };

  function addToCart(e, item) {
    // alert(" You clicked " + item.name + " , price is " + item.price);

    e.preventDefault();

    setCart((cart) => {
      const existingIdx = cart.findIndex((i) => i.name === item.name);
      if (existingIdx !== -1) {
        return [
          ...cart.slice(0, existingIdx),
          { ...cart[existingIdx], count: cart[existingIdx].count + 1 },
          ...cart.slice(existingIdx + 1),
        ];
      }
      return [...cart, { ...item, count: 1 }];
    });
    console.log(cart);
  };

  function removeCart(e, item) {
    e.preventDefault();

    setCart((cart) => {
      const existingIdx = cart.findIndex((i) => i.name === item.name);
      console.log(existingIdx);
      if (existingIdx !== -1 && cart[existingIdx].count > 1 && cart.length > 1) {
        return [
          ...cart.slice(0, existingIdx),
          { ...cart[existingIdx], count: cart[existingIdx].count - 1 },
          ...cart.slice(existingIdx + 1),
        ];
      }
      else if (existingIdx !== -1 && cart[existingIdx].count > 1 && cart.length === 1) {
        return [
          {...cart[existingIdx], count: cart[existingIdx].count - 1}, 
        ];
      }
      else if (existingIdx ===0 && cart[existingIdx].count === 1 && cart.length > 1) {
        return [
          ...cart.slice(existingIdx+1)
        ];
      }
      else if (existingIdx > 0 && cart[existingIdx].count === 1 && cart.length > 1) {
        const sortedData = cart;
        sortedData.splice(existingIdx, 1);
        return [
          ...sortedData.slice(0)
        ];
      }
      else if (cart.length === 1 && cart[existingIdx].count === 1) {
        return [];
      }
      else {
        return [
          ...cart.slice(0, existingIdx),
          cart.slice(existingIdx + 1),
        ]; 
      }
    });
    console.log(cart);
  };

  function resetData() {
    // alert("You're about to reset your settings!");
    setData(KirbyData);
    console.log(KirbyData);
  }

  function sortByPrice() {
    // alert(" You're about to sort by price from low to high!");
    // e.preventDefault();
    const sortedData = [...data];
    setData(sortedData.sort((a, b) => a.price - b.price));
    console.log(sortedData);
  };

  function sortByName() {
    // alert(" You're about to sort by name from low to high!");
    // e.preventDefault();
    const sortedData = [...data];
    setData(sortedData.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }));
    console.log(sortedData);
  };
  
  return (
    <div className="App">
      <div className="title">
      <h1>My Kirby Shop</h1>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", margin: "1.5rem", position: 'fixed' }}
      >
        <Cart cart={cart} setCart={setCart} removeCart={removeCart}/>

        <div style={{ display:"flex", flexDirection: "column", marginTop: "33.5rem", padding: "1.5rem", outline: "2px dotted rgb(255, 0, 157)", position: "fixed"}}>
          <Input onChange={(e) => setInput(e.target.value)} placeholder="Search..." value={input}></Input>
          <Input onChange={(e) => setPrice(e.target.value)} placeholder="Enter your maximum price" value={price}></Input>
          <Button onClick={() => sortByPrice()}>Sort By Price, Low to High</Button>
          <Button onClick={() => sortByName()}>Sort By Name, Alphabetically</Button>
          <Button onClick={() => resetData()}>Reset to Beginning</Button>
        </div>
      </div>
      {/* <MappedContent data={data} addToCart={addToCart}/> */}
      <div className="kirby-items">
        {data.map(
          (
            item,
            index // TODO: map KirbyData to KirbyItem components
          ) => (
            <MappedCards item={item} addToCart={addToCart}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
