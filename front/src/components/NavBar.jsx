import { NavLink } from "react-router-dom"

export const NavBar = () => {

    return (    
        <div className="nav-bar">
            <h3 className='title'>Productos</h3>

            <ul>
                <li><NavLink 
                        className={'style-link'} 
                        to='/catalog'>Catálogo
                    </NavLink> </li>
                <li><NavLink 
                        className={'style-link'} 
                        to='/cart'>Carro
                    </NavLink> </li>
            </ul>

        </div>

    )
}