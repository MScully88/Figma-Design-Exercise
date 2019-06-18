import React from 'react';
import Icon from '../images/phone.svg';
import Drop from '../images/dropdown.svg';

class Header extends React.Component {
    render(){
        return <div className="header">
            <div className="nav">
            <div className="logo">Lopper</div>
                    <a href="">Home </a> 
                    <a href="">Services </a>
                    <a href="">Work </a>
                    <a href="">About </a>
                    <img className="phone" src={Icon} ></img><span>(01) 666 - 693 - 456</span>
                <div>
                <img src={Drop} ></img>
                </div>
            </div>
        </div>
    } 
}

export default Header;