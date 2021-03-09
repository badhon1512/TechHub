import ProductCard from "../ProductCard";

const ProductList = (props) => {
  return (
    <>
      <div className="container">
        <div className="mb-5">
          <h1 className={"text-center text-uppercase"}>{props.name}</h1>
        </div>
        <div className={" row  ml-4"}>
          {props.items.map((item, i) => (
            <div
              key={i}
              style={{ textAlign: "center" }}
              className={"col-sm-4 mb-5"}
            >
              <ProductCard
                item={item}
                getProduct={props.getProduct}
                getcartItems={props.getcartItems}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
