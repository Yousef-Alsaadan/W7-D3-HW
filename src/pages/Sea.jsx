import Cards from "../components/Cards";
import Nav from "../components/Nav";

import sea from "../assets/mp3/Sea.mp3";

function Sea() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/4a/01/59/4a01599692eaa47afc113c5a3b043ed8.gif"
        title="The sound of sea"
        pragraf="The lapping of water on the shore, the sound of the sea."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={sea} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Sea;
