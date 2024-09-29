import Cards from "../components/Cards";
import Nav from "../components/Nav";

import thunder from "../assets/mp3/Thunder.mp3";

function Thunder() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/dc/7b/9b/dc7b9b31d491c5b44174436cddf0411f.gif"
        title="The sound of thunder"
        pragraf="The rumble of thunder accompanying storms."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={thunder} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Thunder;
