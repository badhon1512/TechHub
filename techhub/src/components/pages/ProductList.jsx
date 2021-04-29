import ProductCard from "../ProductCard";

const ProductList = (props) => {
  return (
    <>
      <div className="container mb-5">
        <div className="mb-5">
          <p className={"text-center text-uppercase display-4"}>{props.name}</p>
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
