import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DefaultLayout from "./components/template/layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  return (
    // <div className="App">

    //  <DefaultLayout/>
    // </div>
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: React.ElementType = DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <div>
                    <Layout>
                      <Page />
                    </Layout>
                  </div>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
