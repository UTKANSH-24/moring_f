import React from 'react';
import { CSVLink } from 'react-csv';

const ExportCSV = ({ headers, data, fileName }) => {
    // Function to generate a timestamp string
    const getTimestamp = () => {
        const now = new Date();
        const timestamp = `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}_${now.getMinutes().toString().padStart(2, '0')}_${now.getSeconds().toString().padStart(2, '0')}`;
        return timestamp;
    };

    const timestamp = getTimestamp();

    return (
        <CSVLink
            data={data}
            headers={headers}
            filename={`${fileName}_${timestamp}.csv`} // Append timestamp to the filename
        >
            <button
                className="btn-primary px-2 py-1 rounded-md font-semibold text-sm bg-green-500 hover:bg-green-600 text-white"
            >
                Export CSV
            </button>
        </CSVLink>
    );
};

export default ExportCSV;
