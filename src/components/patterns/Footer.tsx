import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const path = useLocation();

  return (
    <footer
      className={`${
        path.pathname == "/write" ? "hidden" : ""
      } mb-[40px] text-[12px] flex border-t pt-4 border-[#0000002e] dark:border-[#ffffff2a]`}
    >
      <nav className="flex gap-4 items-center">
        <p className="font-medium flex items-center gap-2">
          <svg
            width={20}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.9 19.4303V16.7515L11.5203 15.1312L8.60296 13.4642L7.6 12.2105V13L6.4382 13.2107L5.3943 10.4269C5.20272 11.0847 5.1 11.7804 5.1 12.5C5.1 15.672 7.09572 18.3778 9.9 19.4303ZM15.6 5.77866V11.4485L13.7515 9.6H11.3L10.2922 10.9437L10.7485 11.4H12.6V12.8183L13.3211 13.9H15.7172L18.7651 16.4399C19.484 15.2991 19.9 13.9481 19.9 12.5C19.9 9.52001 18.1385 6.95143 15.6 5.77866ZM15.6 4.47567C18.8178 5.71962 21.1 8.84329 21.1 12.5C21.1 17.2497 17.2496 21.1 12.5 21.1C7.75035 21.1 3.9 17.2497 3.9 12.5C3.9 7.75035 7.75035 3.9 12.5 3.9C13.5164 3.9 14.4915 4.07631 15.3966 4.4H15.6V4.47567Z"
                fill="#A8AEB4"
              />{" "}
            </g>
          </svg>
          Only Text
        </p>
        <Link target="_blank" to="https://github.com/gettingdev/text" className="hover:underline">
          Credit
        </Link>
        <Link target="_blank" to="https://github.com/gettingdev/text" className="hover:underline">
          Source
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </footer>
  );
}
