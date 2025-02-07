import "./App.css";
// import Context from "./store/_Context";
// import useDeveloper from "./hooks/useDeveloper";
import PlantaProvider from "./store/PlantaContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Registro from "./views/Register";
import Login from "./views/Login";
import Perfil from "./views/Profile";
import Gallery from "./views/Gallery";
import NotFound from "./views/NotFound";
import PlantaDetalle from "./views/PlantaDetalle";


const App = () => {
  // const globalState = useDeveloper();

  return (
    <PlantaProvider>
      <BrowserRouter>
         <Navigation />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/catalogo" element={<Gallery />} />
           <Route path="/registrarse" element={<Registro />} />
           <Route path="/login" element={<Login />} />
           <Route path="/perfil" element={<Perfil />} />
           <Route path="*" element={<NotFound />} />
           <Route path="/plantas/:id" element={<PlantaDetalle />} />
         </Routes>
       </BrowserRouter>
    </PlantaProvider>
    // <Context.Provider value={globalState}>
    //   <BrowserRouter>
    //     <Navigation />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/catalogo" element={<Gallery />} />
    //       <Route path="/registrarse" element={<Registro />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/perfil" element={<Perfil />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Context.Provider>
  );
};

export default App;
