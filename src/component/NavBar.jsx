import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavBar = () => {
    return (
        <div>
            <div className="header-container">
                <img src='/images/Frame 31 1.png' alt='logo' />
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <input type='text' className="search-bar" placeholder='Search Movies, Series...' />
                    <img src="/images/profile pic.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar

NavBar.propTypes = {
    redirectTo: PropTypes.func
}
