import React from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
const DashboardOverview = () => {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Product</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Category 1</TableCell>
                        <TableCell>Product 1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default DashboardOverview 
