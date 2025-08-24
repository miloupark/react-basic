import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="text-2xl font-bold p-5 border-b-1 border-neutral-700">
        <Link to="/" className="hover:text-blue-300 transition-colors">
          ⚛️ React
        </Link>
      </h1>
    </header>
  );
}
