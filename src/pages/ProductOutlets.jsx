import React, { useState } from 'react';
import { TabGroup } from '@statikly/funk'

import OutputState from '../context/Output/OutputState';
import TableOutflows from '../components/Outflows/TableOutflows';
import FormOutflows from '../components/Outflows/FormOutflows';
import FormOutflowsConcepts from '../components/Outflows/FormOutflowsConcepts';
import ProductState from '../context/Product/ProductState';
const ProductOutlets = () => {
    return (
        <OutputState>
            <div className="main-full">
                <div>
                    <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                        <TabGroup.TabList>
                            <TabGroup.Tab
                                index={0}
                                className="h-12 px-12 transition-colors duration-150"
                                activeClassName="bg-black "
                                inactiveClassName=""
                            >
                                Venta
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={1}
                                className="h-12 px-12 transition-colors duration-150"
                                activeClassName="bg-black text-white"
                                inactiveClassName=""
                            >
                                Otro tipo de salidas
                            </TabGroup.Tab>
                            <TabGroup.Tab
                                index={2}
                                className="h-12 px-12 transition-colors duration-150"
                                activeClassName="bg-black text-white"
                                inactiveClassName=""
                            >
                                Gestionar salidas
                            </TabGroup.Tab>
                        </TabGroup.TabList>


                        <TabGroup.TabPanel
                            index={0}
                            className="p-16 transition-all transform h-64"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            Content 1
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                            index={1}
                            className="p-16 transition-all transform h-64 flex flex-col"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            <ProductState>
                                <FormOutflows />
                            </ProductState>
                        </TabGroup.TabPanel>
                        <TabGroup.TabPanel
                            index={2}
                            className="p-16 transition-all transform h-64"
                            activeClassName="opacity-100 duration-500 translate-x-0"
                            inactiveClassName="absolute opacity-0 -translate-x-2"
                        >
                            <div className="main-full">
                                <FormOutflowsConcepts />

                                <TableOutflows />
                            </div>
                        </TabGroup.TabPanel>
                    </TabGroup>
                </div>



            </div>
        </OutputState>

    );
}
export default ProductOutlets;