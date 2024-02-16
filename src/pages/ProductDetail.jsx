import React from "react";
import "../styles/productpage.css";
import Dcard from "../components/Dcard";

const ProductDetail = () => {
  return (
    <div className="pd-page">
      <div className="pd-top">
        <div className="pd-t-left">
          <div className="pd-tl">
            <img
              src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_17813559712"
              alt="product-img"
            />
            <img
              src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_17813559712"
              alt="product-img"
            />
            <img
              src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_17813559712"
              alt="product-img"
            />
            <img
              src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_17813559712"
              alt="product-img"
            />
          </div>
          <div className="pd-tr">
            <img
              src="https://c.shld.net/rpx/i/s/i/spin/-122/prod_17813559712"
              alt="product-img"
            />
          </div>
        </div>
        <div className="pd-t-right">
          <div className="pd-trr-t">
            <h1 className="pd-title">Product Title</h1>
            <div className="pd-review">
              <span className="pd-r-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>{" "}
              (160 Reviews)
            </div>
            <div className="pd-price">$ 19.00</div>
            <div className="pd-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium adipisci quaerat obcaecati aperiam fugiat ad!
            </div>
            <hr />
          </div>
          <div className="pd-trr-m">
            <div className="pd-color">
              <div className="pd-text">Colours: </div>

              <span
                className="pd-color-pic"
                style={{ backgroundColor: "yellow" }}
              ></span>
              <span
                className="pd-color-pic"
                style={{ backgroundColor: "blue" }}
              ></span>
              <span
                className="pd-color-pic"
                style={{ backgroundColor: "red" }}
              ></span>
            </div>
            <div className="pd-size">
              <div className="pd-text">Size: </div>

              <span className="pd-size-pic">S</span>
              <span className="pd-size-pic">M</span>
              <span
                className="pd-size-pic"
                style={{ backgroundColor: "#e94560", color: "#fff" }}
              >
                L
              </span>
              <span className="pd-size-pic">XL</span>
            </div>
            <div className="pd-btns">
              <div className="pd-btns-q">
                <div className="pd-qty">
                  <span className="qty-btn">-</span>
                  <span className="qty-num">1</span>
                  <span className="qty-btn">+</span>
                </div>
              </div>
              <div className="pd-btns-b">
                <div className="btn-primary">BUY NOW</div>
              </div>
              <div className="pd-btns-l">
                <div className="like-btn">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-trr-b">
            <div className="pd-trr-bt">
              <i className="fa-solid fa-truck pd-bt-icon"></i>
              <div className="pd-bt-t">
                <b>Fast Delivery</b>
                <p>Enter your pincode for delivery availability.</p>
              </div>
            </div><hr />
            <div className="pd-trr-bt">
            <i className="fa-solid fa-rotate-right pd-bt-icon"></i>
              <div className="pd-bt-t">
                <b>Return Delivery</b>
                <p>For a week delivery availability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pd-bottom">
        <div className="pd-bottom-title">Related Items</div>
        <div className="pd-bottom-items">
          <Dcard/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
