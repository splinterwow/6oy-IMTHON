import React from "react";

function Cart({ data }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img className="w-96 h-96" src={data.imageUrl} alt={data.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title -mt-4 text-2xl">Name: {data.title}</h2>
        <p>
          Description: <i>{data.description}</i>
        </p>
        <div className="card-actions">
          <div className="">Cover Type: {data.coverType}</div>
        </div>
        <div className="card-actions">
          <div className="">Pages: {data.pages}</div>
        </div>
        <button className="btn btn-secondary -mb-2 mt-2">More</button>
      </div>
    </div>
  );
}

export default Cart;