import Cards from "../components/Cards";
import Nav from "../components/Nav";

import birds from "../assets/mp3/Birds.mp3";

function Birds() {
  return (
    <div>
      <Cards
        backgroundImage="https://i.pinimg.com/originals/61/e1/d9/61e1d97fab8b80f4cafe069135791241.gif"
        title="The sound of birds"
        pragraf="The chirping of birds early in the morning."
      />
      <Nav />
      <div className="hidden">
        <audio controls autoPlay loop>
          <source name="audio-player" src={birds} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
}

export default Birds;
