import React, { useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import service from '../../constants/service';


export default function AppPagination({ setArts }) {
    const pageSize = 4;

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize,
    });

    useEffect(() => {
        service.getData({ from: pagination.from, to: pagination.to }).then(response => {
            setPagination({ ...pagination, count: response.count });

            setArts(response.data);
        })
    }, [pagination.from, pagination.to]);

    const handlePaginationChange = (e, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;

        setPagination({ ...pagination, from: from, to: to });
    };


    return (
        <div className='containerPagination'>
            <Pagination
                className='pagination'
                shape="rounded"
                variant="outlined"
                count={Math.ceil(pagination.count / pageSize)}
                onChange={handlePaginationChange}
            />
            <p>{pagination.from + 1} - {pagination.to} of {pagination.count}</p>
        </div>
    )
}
