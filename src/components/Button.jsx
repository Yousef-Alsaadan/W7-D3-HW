import { Link } from "react-router-dom";

function Button(props) {
  let link = "/" + props.subTitle;

  return (
    <div>
      <Link
        to={link}
        className="Playwrite_font glass_bg h-40 w-40 cursor-pointer text-white flex justify-center items-center transition-all hover:h-48 hover:w-48"
      >
        <h1>{props.subTitle}</h1>
      </Link>
    </div>
  );
}

export default Button;
