import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {

  constructor() {
    super();
    this.renderCarouselLink = this.renderCarouselLink.bind(this);
  }

  renderCarouselLink(key) {
    console.log("1:this.props.currentHover: " + this.props.currentHover);
    console.log("1:this.props.currentClient: " + this.props.currentClient);
    if ((this.props.webSamples[key].companyName === this.props.currentClient) || (this.props.currentHover === this.props.webSamples[key].companyName)) {
      return (
          <div className="slick-item" onClick={this.clientClickHandler.bind(this)} onMouseEnter={this.onMouseEnterHandler.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)} 
              data-client={this.props.webSamples[key].companyName}>
            <img src={`img/${this.props.webSamples[key].companyName}-on.png`} className="client-logo" />
          </div>
      )
    } else {
      return (
          <div className="slick-item" onClick={this.clientClickHandler.bind(this)} onMouseEnter={this.onMouseEnterHandler.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)} 
              data-client={this.props.webSamples[key].companyName}>
            <img src={`img/${this.props.webSamples[key].companyName}-off.png`} className="client-logo" />
          </div>
      )
    }

  }

  onMouseEnterHandler(e){
    console.log("onMouseEnter");
    this.props.hoverClient(e.currentTarget.dataset.client);
  }

  onMouseLeaveHandler() {
    console.log("onMouseLeave");
    this.props.hoverClient("none");
  }

  clientClickHandler = (e) => {
    console.log("clientClickHandler");
    this.props.clickClient(e.currentTarget.dataset.client);
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    
    return (
      <Slider {...settings}>
        {
          Object.keys(this.props.webSamples).map(this.renderCarouselLink)           
        }
      </Slider>
    );
  }
}

export default SimpleSlider;