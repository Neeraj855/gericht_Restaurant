import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div
      className="app__wrapper-img app__wrapper_img-reverse"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wraper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <p className="p__opensans">
          Incidunt at, nam quasi dolorem quod, vel in modi necessitatibus optio
          rem mollitia suscipit quos recusandae tempore distinctio tempora cum
          inventore eius
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
