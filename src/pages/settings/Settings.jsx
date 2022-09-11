import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="http://3.bp.blogspot.com/_UQmvUodh4h4/TEOkir_PvaI/AAAAAAAADuU/7FuihWTvr0I/s1600/primordial+tree.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="John" />
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
