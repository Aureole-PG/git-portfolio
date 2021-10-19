import Profile from "../profile";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className=".d-none .d-md-block "> */}
        <div className="col-md-4 d-none d-md-block">
          <Profile />
        </div>
        {/* </div> */}
        {/* <div className="d-block d-md-none"> */}
        <div className="col-sm-12 d-block d-md-none">
          <Profile phone={true} />
        </div>
        {/* </div> */}
        <div className="col-md-8 col-sm-12">
          <ul
            style={{ width: "100%" }}
            className="nav justify-content-center sticky-top"
          >
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/BackEnd">
                <a className="nav-link" href="#">
                  Backend
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/FrontEnd">
                <a className="nav-link" href="#">
                  FrontEnd
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/DevOps">
                <a className="nav-link" href="#">
                  DevOps
                </a>
              </Link>
            </li>
          </ul>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
