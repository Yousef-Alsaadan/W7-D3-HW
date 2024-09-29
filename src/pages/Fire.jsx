import Cards from "../components/Cards";
import Nav from "../components/Nav";

import fire from "../assets/mp3/Fire.mp3";

function Fire() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/92/97/74/929774b033a66c070f5da21ef21c0090.gif"
        title="The sound of fire"
        pragraf="The crackling and burning of wood in a fire."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={fire} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Fire;
