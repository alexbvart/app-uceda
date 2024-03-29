import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../styles/navigation.css'

/* CONTEX */
import DataSessionContex from '../context/DataSesion/DataSessionContex';

/* STATE */
import DataSessionState from '../context/DataSesion/DataSessionState';
const Navigation = () => {

    const { role } = useContext(DataSessionContex)

    return (
        <div className="navigation-wrapper">

            <div className="navigation a-link-nav flex flex-col flex-grow p-4 overflow-auto">

                <DataSessionState>

                    {
                        (role[0].name == 'Ventas' || role[0].name == 'Administrador')
                            ?

                            (<>
                                <label className="my-4">Operaciones</label>
                                <Link
                                    to="/stock"
                                    className=" a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Control de Stock</span>
                                </Link>
                                <Link
                                    to="/salida"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Salida de Productos</span>
                                </Link>
                                <Link
                                    to="/entrada"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Entrada de productos</span>
                                </Link>


                                <label className="my-4 pr-2"> Gestión de productos</label>
                                <Link
                                    to="/producto"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Producto</span>
                                </Link>
                                <Link
                                    to="categoria"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Categoria</span>
                                </Link>
                                <Link
                                    to="subcategoria"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Sub categoria</span>
                                </Link>
                                <Link
                                    to="/marca"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Marca</span>
                                </Link>
                                <Link
                                    to="/cliente"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Cliente</span>
                                </Link>
                                <Link
                                    to="/proveedor"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Proveedor</span>
                                </Link>

                            </>)
                            : (console.log('no ventas'))}

                    {(role[0].name == 'RR.HH' || role[0].name == 'Administrador' && role[0].name != 'Ventas')
                        ? (<>
                            <label className="my-4 pr-2"> Gestión de RR.HH</label>
                            <Link
                                to="/empleado"
                                className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                <span className="leading-none">Empleado</span>
                            </Link>
                            <Link
                                to="/puesto"
                                className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                <span className="leading-none">Puesto </span>
                            </Link>
                        </>)
                        : (console.log('no "RR.HH"'))}

                </DataSessionState>
            </div>

        </div>
    );
}
export default Navigation;