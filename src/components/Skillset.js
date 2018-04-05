import React from 'react';
import { clientSkills } from '../helpers';

class Skillset extends React.Component {
  constructor() {
    super();
    this.renderPortfolio = this.renderPortfolio.bind(this);
    this.renderSkillset = this.renderSkillset.bind(this);
  }

  renderPortfolio() {
    const clientHover = this.props.currentHover;
    
    return (
        <section className="section-left">
            <header>
                <div className="header-full-name">Mike Ford</div>
                <div className="header-job-title">Web Developer</div>
            </header>
            <div className="skillset-title">Skill Set</div>
            <div className="skillset"><div className="skillset-fix">Javascript</div>
              {
                Object.keys(this.props.portfolio.skillset).map(this.renderSkillset)
              }
            </div>
        </section>
    );
  }

  renderSkillset(key) {
    let hoverArray = [];
    let currentHover = "";
    if (typeof this.props.currentHover === 'undefined') {
      currentHover = "none";
    } else {
      currentHover = this.props.currentHover;
    }

    let skill = this.props.portfolio.skillset[key][1];
    let clientSkillsArray = clientSkills[currentHover];
    let clientSkillsArrayLength = clientSkillsArray.length;
    let jsonClientSkills = "";

    let returnString = "";
    console.log("currentHover: " + currentHover);

    for (let j = 0; j<this.props.portfolio.webSamples.length; j++) {
      if (this.props.portfolio.webSamples[j].companyName === currentHover) {
        jsonClientSkills = this.props.portfolio.webSamples[j].skills
      }
    }

    if (currentHover === "none") {
      jsonClientSkills = ["none"];
    }

    for (var i = 0; i<jsonClientSkills.length; i++) {
      if (skill === jsonClientSkills[i]) {
        returnString = <div className="skillset-container selected"><div className="skillset-item">{skill}</div></div>
        break;
      } else {
        returnString = <div className="skillset-container"><div className="skillset-item">{skill}</div></div>
      }

    }
    return (returnString);
  }

  render() {
    return this.renderPortfolio();

  }
}

export default Skillset;