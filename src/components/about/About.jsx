import "./about.css";
import Award from "../../img/award.png";
import video7 from "../../img/video7.mp4";
import video1 from "../../img/video1.mp4";
import video3 from "../../img/video3.mp4";
import video8 from "../../img/video8.mp4";
import video5 from "../../img/video5.mp4";
import video6 from "../../img/video6.mp4";
import video2 from "../../img/video2.mp4";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">
          <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80" alt=""/>
        </div>
        <div className="a-card">
          <div class="h-96 carousel carousel-vertical rounded-box">
            <div class="carousel-item h-full">
            <video
            src={video7}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-full">
            <video
            src={video1}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-full">
            <video
            src={video3}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-fit">
            <video
            src={video8}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-full">
            <video
            src={video5}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-full">
            <video
            src={video6}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
            <div class="carousel-item h-full">
            <video
            src={video2}
            width="400"
            height="500"
            controls="controls"
            className="a-video"
          />
            </div>
          </div>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
