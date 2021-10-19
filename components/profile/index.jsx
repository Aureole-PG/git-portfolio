import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

const Profile = ({ phone = false }) => {
  const { profile } = useContext(DataContext);
  if (phone) {
    return (
      <div className=" row">
        <div className="col-4">
          <img
            src={profile.avatar_url}
            className="img-thumbnail rounded-circle profile-img-phone"
            alt="..."
          />
        </div>
        <div className="col-6">
          <h4 className="text-center">{profile.name}</h4>
          <h6 className="text-center txt-subtitle-color">{profile.login}</h6>
          <p className="text-center">{profile.bio}</p>
          <div className="d-flex justify-content-evenly">
            <a
              className="icon-link "
              href="mailto:user@domain.com?Subject=Hello"
            >
              <ion-icon size="large" name="mail-open-outline"></ion-icon>
              Email
            </a>
            <a className="icon-link " target="_blank" rel="noreferrer" href="">
              <ion-icon size="large" name="logo-github"></ion-icon>
              GitHub
            </a>
            <a
              className="icon-link "
              target="_blank"
              rel="noreferrer"
              href={profile.html_url}
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
              linkedin
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" row sticky-top">
      <div className="col-12 d-flex justify-content-center">
        <img
          src={profile.avatar_url}
          className="img-thumbnail rounded-circle profile-img"
          alt="..."
        />
      </div>
      <div className="col-12">
        <h4 className="text-center">{profile.name}</h4>
        <h6 className="text-center txt-subtitle-color">{profile.login}</h6>
        <p className="text-center">{profile.bio}</p>
      </div>
      <div className="col-12 d-flex">
        <p className="fw-bolder txt-subtitle-color">Repositories</p>
        <p className="fw-normal">: {profile.public_repos}</p>
      </div>
      <div className="col-12">
        <div className="d-flex justify-content-evenly">
          <a className="icon-link " href="">
            <ion-icon size="large" name="mail-open-outline"></ion-icon>
            Email
          </a>
          <a className="icon-link " href="">
            <ion-icon size="large" name="logo-github"></ion-icon>
            GitHub
          </a>
          <a className="icon-link " href="">
            <ion-icon size="large" name="logo-linkedin"></ion-icon>
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
