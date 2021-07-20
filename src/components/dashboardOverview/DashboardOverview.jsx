import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import dashboardService from '../../services/dashboardService'
const DashboardOverview = () => {
    const [datatable, setDataTable] = useState({})
    const fetchData = async () => {
        const datatable = await dashboardService.category_product()
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
                            <TableCell sortDirection='asc'>Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { datatable.map((item,index) => (
                            <TableRow key={index}>
                                <TableCell>{item.categoryName}</TableCell>
                                <TableCell>{item.productName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
    )
}

export default DashboardOverview 
