
export const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="navbar">
                <img src='/images/Frame 31 1.png' alt='logo'/>
                <div className="nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Series</a></li>
                        <li><a href="">Trending</a></li>
                        <li><a href="">Categories</a></li>
                    </ul>
                </div>
                <div className="seacrh">
                    <input type='text' placeholder='Search Movies, Series...'/>
                    <img src="/images/profile pic.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}
