import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-icon.png'

export default function Footer() {
    return (
        <div className='container-fluid bg-light fixed-bottom'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-2">

                <div className='col-md-4 d-flex mb-md-0 text-body-secondary text-decoration-none lh-1'>
                    <span className='mb-3 mb-md-0 text-body-light'>© Christian Walterson 2023</span>
                </div>

                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'><a className='text-body-secondary' href="https://github.com/cgwol"><img src={githubLogo} alt="github" width={36} height={36}/></a></li>
                    <li className='ms-3'><a className='text-body-secondary' href="https://www.linkedin.com/in/christian-walterson-252a42179/"><img src={linkedinLogo} alt="github" width={36} height={36}/></a></li>
                </ul>

            </footer>
        </div>

    );
}