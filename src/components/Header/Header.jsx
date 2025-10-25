import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">
          Neo<span>Tech</span> <span className="accent">Accessories</span>
        </h1>
      </div>
      <Nav />
    </header>
  );
};
