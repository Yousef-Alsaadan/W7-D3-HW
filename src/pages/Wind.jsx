import Cards from "../components/Cards";
import Nav from "../components/Nav";

import wind from "../assets/mp3/Wind.mp3";

function Wind() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/2f/36/2c/2f362c9c70bc57fb83acfc60f4fea9c1.gif"
        title="The sound of wind"
        pragraf="The blowing of wind through trees or across mountains."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={wind} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Wind;
