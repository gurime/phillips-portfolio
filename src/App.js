import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Root } from "./Layouts/Root";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route  index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faq" element={<Faq/>}/>
    </Route>
  )
);

function App() {
return (

<RouterProvider  router={router}/>

);
}


export default App;
