import dataArts from '../constants/dataArts';

    const service = {
        getData: ({ from, to }) => {
            return new Promise((resolve, reject) => {

                const data = dataArts.slice(from, to);

                resolve({
                    count: dataArts.length,
                    data: data
                })
            });
        }
    }

    export default service; 