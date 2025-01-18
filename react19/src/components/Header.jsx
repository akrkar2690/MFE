import React, { useContext } from 'react';
import '../styles/header.scss';
import { useGlobalContext } from '../context/GlobalContext';


const Header = () => {
    const [react18, setReact18] = useGlobalContext();
    const handleChange = (code) => {
        setReact18(code?.target?.value);
    }
    return ( 
        <header>
            Hello, Add in header
            <div>
                <p>You can change section color</p>
                <input type='color' value={react18} onChange={handleChange}></input>
            </div>
        </header>
     );
}
 
export default Header;