import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fa-brands fa-facebook"></i>
      </div>
      <div className="topCenter">
        <i class="fa-brands fa-square-twitter"></i>
      </div>
      <div className="topRight">
        <i class="fa-brands fa-pinterest"></i>
      </div>
    </div>
  );
};

export default TopBar;
