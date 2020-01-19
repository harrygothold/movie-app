import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import Movies from "./containers/Movies/";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fasFaStar,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import ToolBar from "./containers/Toolbar";

const App = () => {
  library.add(farFaStar, fasFaStar, faSearch);
  return (
    <div>
      <ToolBar />
      <Movies />
    </div>
  );
};

export default App;
