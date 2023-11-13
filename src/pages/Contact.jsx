import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('meqbwoew');

  if (state.succeeded) {
    return (
      <div className="container d-flex vh-100 justify-content-center text-center flex-column">
        <div id='welcome' className='d-flex align-self-center mb-4'>
          <h2>Thanks for reaching out!</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="container d-flex vh-100 justify-content-center text-center flex-column">
      <div id='welcome' className='d-flex align-self-center mb-4'>
        <h2>Say Hello!</h2>
      </div>
      <div id="contact-container" className='d-flex align-self-center'>
        <form onSubmit={handleSubmit} className="d-flex flex-column">

          <div className='d-flex mb-3 align-self-center'>
            <label id='border-box' className='mx-3 label-width' htmlFor="email">Email: </label>
            <input type="email" className='input-width' name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='d-flex mb-3 align-self-center'>
            <label id='border-box' className='mx-3 label-width' htmlFor="name">Name: </label>
            <input type="text" className='input-width' name="name" />
          </div>

          <div className='d-flex mb-3 align-self-center'>
            <textarea name="message" id="message" placeholder=' Send me a message!' cols="50" rows="10"></textarea>
          </div>

          <button className='border-btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
