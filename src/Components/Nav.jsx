import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <div className="logo">
          <img src="/images/final logo.png" alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li href="#">Home</li>
            <li href="#">Menu</li>
            <li href="#">About</li>
            <li href="#">Reservation</li>
            <li href="#">Contact Us</li>
          </ul>
        </div>
        <div className="login">
          <button>Log In</button>
        </div>
      </nav>
  )
}

export default Nav