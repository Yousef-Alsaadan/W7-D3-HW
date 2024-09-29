import Cards from "../components/Cards";
import Nav from "../components/Nav";

import desert from "../assets/mp3/Desert.mp3";

function Desert() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/56/c3/45/56c345c29b5179d85891b1500fccc8e9.gif"
        title="The sound of Desert"
        pragraf="As the wind blows, you may hear the rustle of shifting sand, which creates a gentle swishing sound, almost like waves in slow motion."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={desert} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Desert;
