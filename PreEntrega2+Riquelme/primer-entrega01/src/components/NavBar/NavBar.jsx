import { Link } from "react-router-dom";
import { UserWidget } from "../UserWidget/UserWidget";

export const NavBar = () => {
  return ( 
  <>
    
    <nav className="d-flex justify-content-around p-4">
      <Link to={"/"}>
        <h4>Relojes Shapiro</h4>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-success mx-2">Inicio</button>
        </Link>
        <Link to={"/category/reloj"}>
          <button className="btn btn-success mx-2">Relojes</button>
        </Link>
        <Link to={"/category/reloj-dama"}>
          <button className="btn btn-success mx-2">Relojes Dama</button>
        </Link>
        <Link to={"/category/contactos"}>
          <button className="btn btn-success mx-2">Contactos</button>
        </Link>
        <Link to={"/category/ayuda"}>
          <button className="btn btn-success mx-2">Ayuda</button>
        </Link>
      </div>
      <div className="d-flex">
        {/* <UserWidget /> */}
        
        <button className="btn btn-success mx-2">Carrito</button>
      </div>
    </nav>
    </>
  );
};