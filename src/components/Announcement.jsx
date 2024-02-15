import React from "react";

const Announcement = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src="./images/banner-1.png" width="100%" height="100%" alt='img'/>
          </div>
          <div className="img" style={mystyle1}>
            <img src="./images/banner-2.png" width="100%" height="100%" alt='img'/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
