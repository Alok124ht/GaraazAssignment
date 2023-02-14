
import Home from "./components/Home/index"
import {Route, Routes } from "react-router-dom";
import Brand from "./components/AddBrand/index"
function App() {
  return (
   <div>
   <Routes>
			<Route path="/" exact element={<Home />} />
      <Route path="/Brand" exact element={<Brand />} />

		</Routes>
   </div> 
  )}

export default App;
