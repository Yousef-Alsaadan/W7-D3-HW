import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/19/81/c6/1981c6339984da63d1a099cf44e7a7af.gif)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md Playwrite_font">
            <h1 className="mb-7 text-9xl font-bold">404</h1>
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
