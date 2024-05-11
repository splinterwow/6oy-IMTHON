import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";

function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("recipes");
    if (data) {
      setCard(JSON.parse(data));
    }
  }, []);

  return (
    <div className="align-content">
      <h1 className="font-bold mb-3">Recipe</h1>
      {card.length > 0 ? (
        card.map((element, index) => {
          return <Cart data={element} key={index}></Cart>;
        })
      ) : (
        <p>No recipe</p>
      )}
    </div>
  );
}

export default Home;
