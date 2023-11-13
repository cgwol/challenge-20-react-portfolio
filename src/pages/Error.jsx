import { Link, useLocation } from 'react-router-dom'
export default function Error() {
    return (
      <div className='container d-flex vh-100 justify-content-center text-center'>
        <div className='d-flex align-self-center flex-column'>
          <h3 id='welcome' className="my-3 ">Whoops!</h3>
          <img src="../images/error.gif" className='my-3' />
          <Link className='btn btn-light my-3'>Click here to get back to the "good" stuff!</Link>
        </div>
      </div>
    );
  }