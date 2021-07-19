import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import dashboardService from '../../services/dashboardService'
const DashboardOverview = () => {
    const [datatable, setDataTable] = useState({})
    const fetchData = async () => {
        const datatable = await dashboardService.category_product()
        console.log(datatable);
        setDataTable(datatable)
    }


    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {datatable.length > 0 &&
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { datatable.map((item,index) => (
                            <TableRow>
                                <TableCell key={index}>{item.categoryName}</TableCell>
                                <TableCell key={index}>{item.productName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
    )
}

export default DashboardOverview 
