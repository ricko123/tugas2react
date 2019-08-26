import React, { Component } from 'react';

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara adalah Restoran yang bernuansa Makan Nusantara, Kami Ada untuk membuat anda menikmaati makanan khas dari Nusantara"
        }
    }

    render() {
        return (
            <div>
                <center><p>Tentang Kami</p> {this.state.tentang}</center>
            </div>
        )
    }
}

export default MenuTentangKami;