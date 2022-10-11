import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const Header = () => {
    return (
        <C.Navbar>
                    <C.List>
                        <C.Item>
                            <Link to="/formClient">Clientes</Link>
                        </C.Item>
                        <C.Item>
                            <Link to="/formProduct">Produtos</Link>
                        </C.Item>
                        <C.Item>
                            <Link to="/formProvider">Fornecedores</Link>
                        </C.Item>
                    </C.List>
        </C.Navbar>
    );
    
}
export default Header;