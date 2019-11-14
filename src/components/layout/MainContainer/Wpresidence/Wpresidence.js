import React from "react"
import iconEstate_1 from "../../../../assets/iconEstate_1.png"
import iconEstate_2 from "../../../../assets/iconEstate_2.png"
import iconEstate_3 from "../../../../assets/iconEstate_3.png"

const Wpresidence = () => {
  return (
    <React.Fragment>
      <div className="wpresidence-container">
        <h2 className="wp-title">This is wpresidence</h2>
        <p className="wp-subtitle">the most advanced estate wordpress theme</p>
        <div className="wp-options">
          <div className="wp-options-item">
            <img src={iconEstate_1} alt="for sellers" />
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
            <img src={iconEstate_2} alt="for sellers" />
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
            <img src={iconEstate_3} alt="for sellers" />
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
  )
}

export default Wpresidence
