import "./Nav.css";

export default function Nav() {
  return (
    <header>
      <nav>
        <div class="logo">Whitespace</div>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <ul class="buttons">
          <button class="login">Login</button>
          <button class="trial">Try Whitespace free</button>
        </ul>
      </nav>
    </header>
  );
}
