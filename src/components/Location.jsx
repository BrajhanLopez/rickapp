import React from 'react';

const Location = ({datalocation}) => {
    return (
        <div className='div-location'>

            <div> <h3>Nombre:</h3>
             {datalocation?.name}</div>

            <div> <h3>Tipo:</h3>
             {datalocation?.type}</div>

            <div> <h3>Dimensión:</h3>
             {datalocation?.dimension}</div>

            <div> <h3>Población:</h3>
            {datalocation?.residents.length} </div>
           
        </div>
    );
};

export default Location;