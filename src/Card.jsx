import React,{useState}from "react";

function Card({ element, cart, setCart}) {

  const [toggle,setToggle] = useState(true)

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge text-bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {" "}
          {element.sale}{" "}
        </div>

        <img className="card-img-top" src={element.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{element.name}</h5>

            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div>
            {element.offer}
            {element.price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {toggle ? (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart + 1);
                  setToggle(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart - 1);
                  setToggle(true);
                }}
              >
                Remove From Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
