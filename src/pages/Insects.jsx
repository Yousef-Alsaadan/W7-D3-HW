import Cards from "../components/Cards";
import Nav from "../components/Nav";

import insects from "../assets/mp3/Insects.mp3";

function Insects() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/2d/1b/91/2d1b91eb14d5697b3e80d23ef3410d58.gif"
        title="The sound of insects"
        pragraf="The chirping of crickets or the sounds of frogs at night."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={insects} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Insects;
