import {
  FaConnectdevelop,
  FaCodepen,
  FaArrowRight,
  FaCloudversify,
  FaGlobe,
  FaFighterJet,
} from "react-icons/fa";

function Section1() {
  return (
    <div className="section1">
      <div className="box1-2div">
        <div className="    box1-2">
          <div className="iconbox1">
            <FaConnectdevelop className="icon" />
            <FaArrowRight className="icon arrow1" />
          </div>
          <h3>Software Development</h3>
        </div>
        <div className="    box1-2">
          <div className="iconbox1">
            <FaCloudversify className="icon" />
            <FaArrowRight className="icon arrow1" />
          </div>
          <h3>Serverless Computing Service</h3>
        </div>
      </div>
      <div className="box3-4-5div">
        <div className="   box3-4-5">
          <div className="iconbox2">
            <FaGlobe className="icon3-4" />
            <FaArrowRight className="icon3-4 arrow2" />
          </div>
          <h3>MLOps</h3>
        </div>
        <div className="   box3-4-5">
          <div className="iconbox2">
            <FaCodepen className="icon3-4" />
            <FaArrowRight className="icon3-4 arrow2" />
          </div>
          <h3>Deployment Services and devOps</h3>
        </div>
        <div className="   box3-4-5">
          <div className="iconbox2">
            <FaFighterJet className="icon3-4" />
            <FaArrowRight className="icon3-4 arrow2" />
          </div>
          <h3>Design Services</h3>
        </div>
      </div>
    </div>
  );
}

export default Section1;
