import React, { Component } from "react";

class SCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  previous = () => {
    const images = this.props.cdata[0].images.map((img, i) => img);
    const nextIndex =
      this.state.activeIndex === 0
        ? images.length - 1
        : this.state.activeIndex - 1;
    this.setState((state, props) => {
      return { activeIndex: (state.activeIndex = nextIndex) };
    });
  };
  next = () => {
    const images = this.props.cdata[0].images.map((img, i) => img);
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState((state, props) => {
      return { activeIndex: (state.activeIndex = nextIndex) };
    });
  };

  render() {
    const { cdata } = this.props;
    const slides = cdata[0].images.map((item, index) => {
      let computedClass =
        index === this.state.activeIndex ? "slide active" : "slide";
      return (
        <div key={index} className={computedClass}>
          <div
            className="singlelist-parent"
            style={{ backgroundImage: `url(${item})` }}
            alt={item.altText}
          >
            <div className="sp-controls">
              <i onClick={this.previous} className="fas fa-chevron-left" />
              <i onClick={this.next} className="fas fa-chevron-right" />
            </div>
          </div>
        </div>
      );
    });
    return <>{slides}</>;
  }
}

export default SCarousel;
