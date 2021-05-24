import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Layout } from "./Components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AllProjects from "./Components/AllProjects";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [img, setImg] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#343534" : "rgb(211, 211, 211)",
        color: darkMode ? "rgb(211, 211, 211)" : "#343534",
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                img={img}
                setImg={setImg}
              />
            )}
          />
          <Layout>
            <Route path="/AllProjects" 
            render={(props) => (
              <AllProjects
              {...props} 
              darkMode={darkMode}
              />
            )}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
