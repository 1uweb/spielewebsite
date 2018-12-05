import Link from 'next/link'

const Brandtop = () => (
    <header className="global-nav">
        <div className="wrapper">
            <Link href="/"><a><img className="logo-survival" src="/static/images/global/logo-survival.png"></img></a></Link>
            <nav className="navi">
                <ul>
                    <li><Link href="/spiel"><a>Spiel</a></Link></li>
                    <li><Link href="/news"><a>News</a></Link></li>
                    <li><Link href="/shop"><a>Shop</a></Link></li>
                    <li><Link href="/chronik"><a>Geschichte</a></Link></li>
                </ul>
            </nav>
            <nav className="account">
                <ul>
                    <li><Link href="/help"><a>Hilfe</a></Link></li>
                    <li><Link href="/login"><a><i class="fas fa-sign-in-alt"></i></a></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Brandtop