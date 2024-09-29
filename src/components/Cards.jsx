function Cards(props) {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md Playwrite_font">
            <h1 className="mb-7 text-6xl font-bold">{props.title}</h1>
            <p className="mb-5">{props.pragraf}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
