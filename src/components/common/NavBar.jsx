import {Menu} from 'semantic-ui-react';
import logo from '../../constants/food-logo.png';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <Menu borderless fixed='top'>
            <Menu.Item as={Link} to='/'>
                 <img src={logo} alt="logo" style={{width: '80px'}}/>
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to='/'/>
            <Menu.Item name='Recipes' as={Link} to='/recipes'/>
        </Menu>
    );
}
export default NavBar;