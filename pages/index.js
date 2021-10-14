import { InfoCard } from "../components/cards/InfoCard";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h5 className="section-title ">About Me.</h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            sequi natus vero iste suscipit reiciendis laudantium vitae vel
            tempore atque odio pariatur ex saepe possimus, ab aliquid. Itaque,
            suscipit tempora?
          </p>
        </div>
      </div>
      <div className="row">
        <h5 className="section-title ">Education</h5>
        <div className="col-sm-12 col-lg-6 col-xl-4">
          <InfoCard
            title={"lorem"}
            subtitle={"example"}
            info={"lorem"}
            topics={["Backend", "frontEnd"]}
          />
        </div>
        <div className="col-sm-12 col-lg-6 colg-xl-4">
          <InfoCard
            title={"example"}
            subtitle={"Example"}
            info={"example"}
            topics={["Backend", "frontEnd"]}
          />
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4">
          <InfoCard
            title={"Example"}
            subtitle={"Example Example"}
            info={"Example Example Example"}
            topics={["Backend", "frontEnd"]}
          />
        </div>
      </div>
      <div className="row">
        <h5 className="section-title ">Experience</h5>
        <div className="col-sm-12 col-lg-6 col-xl-4">
          <InfoCard
            title={"Example-Example"}
            subtitle={"Example"}
            info={"Example Example Example"}
            topics={["Example", "Example"]}
            time="2021-09 -> 2019-10"
          />
        </div>
        <div className="col-sm-12 col-lg-6 colg-xl-4">
          <InfoCard
            title={"Example"}
            subtitle={"Example"}
            info={"Example Example Example"}
            topics={["Backend", "frontEnd"]}
            time="2021-05 -> present"
          />
        </div>
      </div>
      <div className="row">
        <h5 className="section-title ">Skils</h5>
        <div className="col-sm-12">
          <div className="d-flex justify-content-evenly">
            <div className="icon-info">
              <i className="devicon-nodejs-plain"></i>
              <p>Node</p>
            </div>
            <div className="icon-info">
              <i className="devicon-go-plain"></i>
              <p>GOland</p>
            </div>
            <div className="icon-info">
              <i className="devicon-jenkins-line"></i>
              <p>Jenkins</p>
            </div>
            <div className="icon-info">
              <i className="devicon-python-plain"></i>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
