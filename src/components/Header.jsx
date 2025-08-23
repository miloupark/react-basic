import { Link } from "react-router-dom";

export default function Header() {
  return (
    <h1 className="text-2xl font-bold p-6">
      <Link to="/" className="hover:text-blue-300 transition-colors">
        ⚛️ React
      </Link>
    </h1>
  );
}
