import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='flex justify-between'>
            <Link to='/'>Jaejin</Link>
            <ul className='flex justify-end space-x-3'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-me'>About Me</Link></li>
                <li><Link to='/education'>Education</Link></li>
                <li><Link to='/experience'>Experience</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/games'>Games</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </header>
    );
}

export default Header;