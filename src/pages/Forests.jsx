import Cards from "../components/Cards";
import Nav from "../components/Nav";

import forests from "../assets/mp3/Forests.mp3";

function Forests() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/94/fa/1f/94fa1f113b1b976c6dafe45b34647b5e.gif"
        title="The sound of the forest"
        pragraf="Forests are characterized by the vibrant sound that arises from the interaction of their various components."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={forests} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Forests;
