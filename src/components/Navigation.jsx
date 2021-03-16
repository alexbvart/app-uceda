import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../styles/navigation.css'

/* CONTEX */
import DataSessionContex from '../context/DataSesion/DataSessionContex';

/* STATE */
import DataSessionState from '../context/DataSesion/DataSessionState';
const Navigation = () => {

    const { data } = useContext(DataSessionContex)

    return (
        <div className="navigation-wrapper">

            <div className="navigation a-link-nav flex flex-col flex-grow p-4 overflow-auto">

                <DataSessionState>

                    {/* {
                        (data.roles[0].name == 'Ventas' || data.roles[0].name == 'Administrador')
                            ?

                            (<> */}
                                <label className="my-4">Operaciones</label>
                                <Link
                                    to="venta"
                                    className=" a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Venta</span>
                                </Link>
                                <Link
                                    to="/stock"
                                    className=" a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Stock</span>
                                </Link>
                                <Link
                                    to="/salida"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Salida de Productos</span>
                                </Link>
                                <Link
                                    to="/outlest"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Bajas de Productos</span>
                                </Link>


                                <label className="my-4 pr-2"> Gestión de productos</label>
                                <Link
                                    to="/producto"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Producto</span>
                                </Link><Link
                                    to="categoria"
                                    className="a-link-nav flex items-center justify-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded bg--cardGray-hover" href="#">
                                    <span className="leading-none">Categoria</span>
                                </Link><Link
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

                    {/*         </>)
                            : (console.log('no ventas'))}

                    {(data.roles[0].name == 'RR.HH' || data.roles[0].name == 'Administrador')
                        ? (<> */}
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
{/*                         </>)
                        : (console.log('no "RR.HH"'))}
 */}
                </DataSessionState>
            </div>

        </div>
    );
}
export default Navigation;