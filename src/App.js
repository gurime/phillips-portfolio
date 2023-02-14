import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Root } from "./Layouts/Root";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { PasswordGenerator } from "./pages/PasswordGenerator";

const router = createBrowserRouter(
  createRoutesFromElements(
<Route  path="/" element={<Root />}>
 <Route index element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="contact" element={<Contact/>}/>
 <Route path="passwordgenerator" element={<PasswordGenerator/>}/>
</Route>
)
);

function App() {
return (

<RouterProvider  router={router}/>

);
}


export default App;
