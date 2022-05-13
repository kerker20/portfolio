import "./productList.css";
import Product from "../product/Product";
import { products } from "../../arts";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Kerker</h1>
        <p className="pl-desc">
          This is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div class="stats align-ce shadow items-center">
      <div class="stat place-items-center">
          <div class="stat-title">Tools I am Using</div>
          <div class="stat-value text-secondary">Softwares</div>
          <div class="font-bold">Applications</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Drawing Application</div>
          <div class="stat-value">IBIS PaintX</div>
          <div class="font-bold">Current Version 9.4.0</div>
          <div class="stat-desc">Downloads 100,000,000+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Image Editor</div>
          <div class="stat-value">PicsArt</div>
          <div class="font-bold">Current Version Varies with device</div>
          <div class="stat-desc">Downloads 500,000,000+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Online Photo Editor</div>
          <div class="stat-value">Pixlr Editor</div>
          <div class="font-bold">Current Version 7.0.1.2</div>
          <div class="stat-desc">1.9 million users</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
