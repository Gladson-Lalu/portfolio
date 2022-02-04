import "./heading.css";
import Typewriter from "typewriter-effect";
import profile from "../../images/profile.png";

const Heading = () => {
  const tags = [
    "App Developer.",
    "Full Stack Developer.",
    "Motivational Speaker.",
    "Chess Player.",
    "And A Humble Human. ",
  ];
  const delay = 70;
  const pause = 1000;
  const deleteDelay = 31;
  return (
    <header className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My name is</h2>
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
          <div className="i-title-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam
            laudantium veritatis suscipit. Quidem, veniam repellendus dolores
            tempora ducimus sit placeat quaerat! Ut, cum commodi ipsam quis
            omnis maxime iure.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="p-bg"></div>
        <img className="profile-pic" src={profile} alt="My Profile" />
      </div>
    </header>
  );
};

export default Heading;
