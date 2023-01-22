import React from 'react';


const ComponentB = ({ contact, connect}) => {
    return (
        <div>
            <h4>
                Contact : {contact}
            </h4>
            <h4>            {/*if true         :    else*/}
                {connect ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h4>
        </div>
    );
};




export default ComponentB;
