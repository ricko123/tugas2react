import React, { Component } from 'react';

function Header(props) {
    return (
        <div className="container">
            <div className="menu">
                <ul >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produk</a></li>
                    <li><a href="#">Kontak</a></li>
                    <li><a href="#">Tentang Kami</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;