import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Planetary Astrophotography</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/08/JWST_2022-07-27_Jupiter.png"
        alt=""
      />
    </div>
  );
};

export default Header;
