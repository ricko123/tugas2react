import React, { Component } from 'react';

class MenuKontak extends Component{
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jl. Swadaya IV, Raggon, Cipayung Kota Jakarta Timur, Daerah Khusu Ibukota Jakarta 13860",
            kontak:"Kontak Kami : 08131234578"
        }
    }
    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h3>Kontak Kami : {this.state.kontak}</h3>
                </center>
            </div>
        )
    }
}

export default MenuKontak;