import { createContext, useState, useEffect } from "react";
export const DataContext = createContext(null);
const initialData = {
  profile: null,
  frontend: null,
  backend: null,
  devops: null,
};
const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(process.env.GIT_URL)
      .then((response) => response.json())
      .then((profile) => {
        fetch(process.env.GIT_REPOS)
          .then((response2) => response2.json())
          .then((repos) => {
            const backend = repos.filter(
              (e) => e.topics.find((ele) => ele === "backend") != undefined
            );
            const frontend = repos.filter(
              (e) => e.topics.find((ele) => ele === "frontend") != undefined
            );
            const devops = repos.filter(
              (e) => e.topics.find((ele) => ele === "devops") != undefined
            );
            setData({ profile, backend, frontend, devops });
            setLoading(false);
          });
      });
  }, []);
  if (loading) {
    return <div>Cargando</div>;
  }
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
