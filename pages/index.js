import { TimeLineCard } from "../components/cards/timeLine";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h5>About Me.</h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            sequi natus vero iste suscipit reiciendis laudantium vitae vel
            tempore atque odio pariatur ex saepe possimus, ab aliquid. Itaque,
            suscipit tempora?
          </p>
        </div>
        <div className="col-md-12">
          <h5 className="">Education</h5>
          <TimeLineCard />
        </div>
        <div className="col-md-12">
          <p className="text-center">Experience</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            sequi natus vero iste suscipit reiciendis laudantium vitae vel
            tempore atque odio pariatur ex saepe possimus, ab aliquid. Itaque,
            suscipit tempora?
          </p>
        </div>
        <div className="col-md-12">
          <p className="text-center">Skills</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            sequi natus vero iste suscipit reiciendis laudantium vitae vel
            tempore atque odio pariatur ex saepe possimus, ab aliquid. Itaque,
            suscipit tempora?
          </p>
        </div>
      </div>
    </div>
  );
}
