import React, { useState } from 'react';
import styled from 'styled-components';

const Formulario = () => {

    const [nombre, cambiarNombre] = useState('');
    const [correo, cambiarCorreo] = useState('');

    return (
        <form>
            <Input
                type="text"
                name="text"
                value={nombre}
                placeholder="Nombre"
                onChange={(e) => cambiarNombre(e.target.value)}
            ></Input>

            <Input
                type="email"
                name="email"
                value={correo}
                placeholder="Correo"
                onChange={(e) => cambiarCorreo(e.target.value)}
            ></Input>

            <Boton type="submit">Agregar</Boton>
        </form>
    );
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;

const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;

export default Formulario;