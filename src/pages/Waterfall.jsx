import Cards from "../components/Cards";
import Nav from "../components/Nav";

import waterfall from "../assets/mp3/Waterfall.mp3";

function Waterfall() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/6c/15/7a/6c157a668c99422c8b81348cc447ba89.gif"
        title="The sound of waterfalls"
        pragraf="The rush of water falling from a height."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={waterfall} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Waterfall;
