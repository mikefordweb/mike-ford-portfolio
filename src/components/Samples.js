import React from 'react';
import SimpleSlider from './SimpleSlider';

class Samples extends React.Component {
  constructor() {
    super();
    this.renderWebSamplesContent = this.renderWebSamplesContent.bind(this);
    this.renderSamples = this.renderSamples.bind(this);
  }

  renderWebSamplesContent(key) {
    if (this.props.currentClient === this.props.portfolio.webSamples[key].companyName) {
      return (
        <div className="carousel-item" data-client={`${this.props.portfolio.webSamples[key].companyName}`}>
            <img src={`img/${this.props.portfolio.webSamples[key].companyName}-ex1.png`} className="carousel-screencap" />
            <div className="carousel-info">
                <div className="carousel-title">{`${this.props.portfolio.webSamples[key].companyDescription}`}</div>
                <div className="carousel-description">{`${this.props.portfolio.webSamples[key].sampleDescription}`}</div>
            </div>
        </div>
      )
    }
  }

  renderSamples() {
    return (
        <section className="section-right">
            <div className="section-title">Portfolio</div>
            <ul className="top-links">
                <li><a href="Mike_Ford_Resume_0418.pdf" target="_blank"><i className="fas fa-file-pdf"></i></a></li>
                <li><a href="https://github.com/mikefordweb" target="_blank"><i className="fab fa-git-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/mike-ford-5a14817/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="mailto:mike@mikefordweb.com"><i className="fas fa-envelope"></i></a></li>
            </ul>
            <div className="simple-slider-wrapper">
              <SimpleSlider currentHover={this.props.currentHover} currentClient={this.props.currentClient} webSamples={this.props.portfolio.webSamples} hoverClient={this.props.hoverClient} clickClient={this.props.clickClient} />
            </div>
            <div className="carousel-content">
                {
                    Object.keys(this.props.portfolio.webSamples).map(this.renderWebSamplesContent)
                  }
            </div>
        </section>
    )
  }

  render() {
        return this.renderSamples();
  }
}

export default Samples;