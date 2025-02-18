
export const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-container">
                    <img src='/images/Frame 31 1.png' alt='logo' />
                    <div className="navbar">
                        <div className="nav">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">Series</a></li>
                                <li><a href="">Trending</a></li>
                                <li><a href="">Categories</a></li>
                            </ul>
                        </div>
                        <div className="search">
                            <input type='text' className="search-bar" placeholder='Search Movies, Series...' />
                            <img src="/images/profile pic.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="sub">
                <div className="container">
                    <div className="title">
                        <img src='/images/Spiderman.png' alt="" />
                        <span>
                            CBFC:U/A
                            Action.
                            Adventure.
                            2h 28m
                        </span>
                        <p>When a spell goes wrong, dangerous foes from other<br>
                        </br> worlds start to appear, forcing Peter to discover what it<br>
                            </br> truly means to be Spider-Man.</p>
                    </div>
                    <div className="button">
                        <div className="main-btn">
                            <button>
                                <img src='/images/playicon.png' alt="" />
                                Watch Now
                            </button>
                        </div>
                        <div className="main-btn2">
                            <button>
                                <img src='/images/infoicon.png' alt="" />
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
                <div className="display">
                <h3></h3>
                    <div className="display-sec1">
                        <h1>1</h1>
                        <img src="/images/Frame 31 1.png" alt=""/>
                    </div>
                    <div className="display-sec2">
                        <h1>2</h1>
                        <img src="" alt=""/>
                    </div>
                    <div className="display-sec3">
                        <h1>3</h1>
                        <img src="" alt=""/>
                    </div>
                    <div className="display-sec4">
                        <h1>4</h1>
                        <img src="" alt=""/>
                    </div>
                    <div className="display-sec5">
                        <h1>5</h1>
                        <img src="" alt=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}
