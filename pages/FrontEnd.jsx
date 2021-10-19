import { useContext } from "react";
import { ItemCard } from "../components/cards/ItemCards";
import { DataContext } from "../context/dataContext";
const FrontEnd = () => {
  const { frontend } = useContext(DataContext);
  return (
    <div style={{ marginTop: 30 }} className="row">
      {frontend.map((e, i) => (
        <div key={i} className="col-sm-12 col-lg-6">
          <ItemCard
            color={Math.floor(Math.random() * 5)}
            title={e.name}
            description={e.description}
            language={e.language}
            links={e.html_url}
          />
        </div>
      ))}
    </div>
  );
};

export default FrontEnd;
