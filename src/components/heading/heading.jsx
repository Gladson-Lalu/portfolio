import "./heading.css";
import Typewriter from "typewriter-effect";
import profile from "../../assets/profile.png";
import { Container } from "reactstrap";

const Heading = () => {
  const tags = [
    "App Developer.",
    "Full Stack Developer.",
    "Motivational Speaker.",
    "Chess Player.",
    "And A Humble Human. ",
  ];
  const delay = 35;
  const pause = 1000;
  const deleteDelay = 10;
  return (
    <Container className="i position-relative d-flex">
      <div className="i-left d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-start">
          <h2 className="i-intro">Hello!,My name is</h2>
          <h1 className="i-name">Gladson T Lalu</h1>
          <div className="i-title animated-text">
            <div className="words-wrapper">
              <Typewriter
                onInit={(t) => {
                  t.changeDelay(delay)
                    .changeDeleteSpeed(deleteDelay)
                    .typeString(`I'm a ${tags[0]}`)
                    .pauseFor(pause)
                    .deleteChars(tags[0].length)
                    .typeString(tags[1])
                    .pauseFor(pause)
                    .deleteChars(tags[1].length)
                    .typeString(tags[2])
                    .pauseFor(pause)
                    .deleteChars(tags[2].length)
                    .typeString(tags[3])
                    .pauseFor(pause)
                    .deleteAll()
                    .typeString(tags[4])
                    .pauseFor(pause)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            accusamus rerum voluptas sed consequuntur maxime, numquam adipisci
            voluptates maiores explicabo aliquam voluptate molestias consectetur
            incidunt nostrum
          </p>
        </div>
      </div>
      <div className="i-right position-relative justify-content-center">
        <div className="p-bg">
          <img
            className="profile-pic align-items-center justify-content-center"
            src={profile}
            alt="My Profile"
          />
        </div>
      </div>
    </Container>
  );
};

export default Heading;
