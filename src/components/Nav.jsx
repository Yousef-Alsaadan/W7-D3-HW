import { Link } from "react-router-dom";
import Button from "./Button";

function Nav() {
  return (
    <div>
      <div className="flex items-end gap-6 overflow-x-scroll absolute max-w-full h-auto bottom-0 px-6 pb-3">
        <Link
          to="/"
          className="Playwrite_font glass_bg px-20 h-40 w-40 cursor-pointer text-white flex justify-center items-center transition-all hover:h-48 hover:w-48"
        >
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-ban"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
            </svg>
          </h1>
        </Link>
        <Button subTitle="Desert" />
        <Button subTitle="Wind" />
        <Button subTitle="Rain" />
        <Button subTitle="Forests" />
        <Button subTitle="Sea" />
        <Button subTitle="Waterfall" />
        <Button subTitle="Birds" />
        <Button subTitle="Thunder" />
        <Button subTitle="Falling Leaves" />
        <Button subTitle="Fire" />
        <Button subTitle="Insects" />
      </div>
    </div>
  );
}

export default Nav;
