import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav mt-0'>
            <li className={`nav-item ${currentPage === '/' ? 'active' : ''}`}>
                <Link className='nav-link text-dark' to='/'>
                    About me
                </Link>
            </li>
            <li className={`nav-item ${currentPage === '/Portfolio' ? 'active' : ''}`}>
                <Link className='nav-link text-dark' to='/Portfolio'>
                    Portfolio
                </Link>
            </li>
            <li className={`nav-item ${currentPage === '/Resume' ? 'active' : ''}`}>
                <Link className='nav-link text-dark' to='/Resume'>
                    Resume
                </Link>
            </li>
            <li className={`nav-item ${currentPage === '/Contact' ? 'active' : ''}`}>
                <Link className='nav-link text-dark' to='/Contact'>
                    Contact
                </Link>
            </li>
        </ul>
    );
}