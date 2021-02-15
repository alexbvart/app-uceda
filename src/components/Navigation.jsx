import React, {useState} from 'react';
import {Link} from "react-router-dom";
const Navigation = () => {
    return ( 
        <div className="navigation">
            
            <div className=" a-link-nav flex flex-col flex-grow p-4 overflow-auto">
                    <label className="my-4">Operaciones</label>
                    <Link 
                        to="venta"
                        className=" a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Venta</span>
                    </Link>
                    <Link 
                        to="/stock"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Stock</span>
                    </Link>

                    <label className="my-4"> Gestión</label>
                    <Link 
                        to="/producto"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Producto</span>
                    </Link>
                    <Link 
                        to="/cliente"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Cliente</span>
                    </Link>
                    <Link 
                        to="categoria"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Categoria</span>
                    </Link>
                    <Link 
                        to="/marca"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Marca</span>
                    </Link>



                    <Link 
                        to="/empleado"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Empleado</span>
                    </Link>
                    <Link 
                        to="/puesto"
                        className="flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                        <span className="leading-none">Puesto </span>
                    </Link>

            </div>

        </div>
    );
}
export default Navigation;