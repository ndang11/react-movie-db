
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
                        <input type='text' className="" placeholder='Search Movies, Series...' />
                        <img src="/images/profile pic.png" alt="" />
                    </div>
                </div>
            </div>
            <section className="sub">
                <div className="container">
                    <img src='/images/background image.png' alt="" />
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
            </section>
        </div>
    )
}
