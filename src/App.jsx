// https://react-icons.github.io/react-icons

import { ContainerBox } from "./components/ContainerBox/ContainerBox";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <h1>Relojes Shapiro</h1>
      <h4>Vendiendo calidad desde 2019</h4>
      <ContainerBox message={"Bienvenidos a la tienda más importante de relojes de Latinoamerica"} />
    </>
  );
};