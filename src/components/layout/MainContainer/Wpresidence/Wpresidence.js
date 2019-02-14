import React from "react";

const Wpresidence = () => {
  return (
    <React.Fragment>
      <div className="wpresidence-container">
        <h2 className="wp-title">This is wpresidence</h2>
        <p className="wp-subtitle">the most advanced estate wordpress theme</p>
        <div className="wp-options">
          <div className="wp-options-item">
            <img
              src="https://losangeles.wpresidence.net/wp-content/uploads/2018/06/icon-estate-3-3-1-1-78x80.png"
              alt="for sellers"
            />
            <div className="item-info">
              <h2>For Sellers</h2>
              <p>
                Whether it’s area attractions, an inexpensive restaurant,
                neighborhood schools or a neighborhood theater you’re looking
                for, here’s a great place to start.
              </p>
            </div>
          </div>
          <div className="wp-options-item">
            <img
              src="https://losangeles.wpresidence.net/wp-content/uploads/2018/06/estate_img_2-3-1-1-78x80.png"
              alt="for sellers"
            />
            <div className="item-info">
              <h2>For Renters</h2>
              <p>
                Our professionals are here to help you with finding your dream
                home, coordinating a moving company, and making you feel
                comfortable and safe.
              </p>
            </div>
          </div>
          <div className="wp-options-item">
            <img
              src="https://losangeles.wpresidence.net/wp-content/uploads/2018/06/Icon-estate-1-3-1-1-78x80.png"
              alt="for sellers"
            />
            <div className="item-info">
              <h2>For Developers</h2>
              <p>
                Browse properties for sale alongside properties that aren’t.
                Save key searches, get alerted when specific properties that
                interest you are loaded and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Wpresidence;
