
export const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="navbar">
                    <img src='/images/Frame 31 1.png' alt='logo' />
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
                        <img src="/images/profile pic.png" alt="" />
                    </div>
                </div>
            </div>
                <section>
                    <div className="title">
                        <img src='/images/Spiderman.png' alt="" />
                        <div className="btn">
                            <button className="btn22">CBFC:U/A</button>
                            <button>Action.</button>
                            <button>Adventure.</button>
                            <button>2h28m</button>
                        </div>
                        <p>When a spell goes wrong, dangerous foes from other<br>
                        </br> worlds start to appear, forcing Peter to discover what it<br>
                        </br> truly means to be Spider-Man.</p>
                    </div>
                    <div className="main-btn">
                        <button>
                            <img src='/images/playicon.png' alt=""/>
                            Watch Now
                        </button>
                        <button>
                            <img src='/images/infoicon.png' alt=""/>
                            More Info
                        </button>
                    </div>
                </section>
        </div>
    )
}
