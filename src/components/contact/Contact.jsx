import './contact.scss'
import arrow from '../../assets/arrow down.gif'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Social Media</h1>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          href="https://www.facebook.com/pablogomila"
          target="_blank"
          rel="noreferrer"
          className="fa fa-facebook"
        >
          {' '}
        </a>
        <a
          href="https://twitter.com/pablogomila"
          target="_blank"
          rel="noreferrer"
          className="fa fa-twitter"
        >
          {' '}
        </a>
        <a
          href="https://www.linkedin.com/in/pablogomila/"
          target="_blank"
          rel="noreferrer"
          className="fa fa-linkedin"
        >
          {' '}
        </a>
        <a
          href="https://www.instagram.com/pablogomila/"
          target="_blank"
          rel="noreferrer"
          className="fa fa-instagram"
        >
          {' '}
        </a>
        <a
          href="https://github.com/pablogomila"
          target="_blank"
          rel="noreferrer"
          className="fa fa-github"
        >
          {' '}
        </a>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="apikey"
            value="e1b4eb71-dfbc-41ce-a49f-c3ee6865810b"
          />
          <h3>Name</h3>
          <input type="text" name="name" required />
          <h3>E-Mail</h3>
          <input type="email" name="email" required />
          <h3>Message</h3>
          <textarea name="message" required></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://pablogomila.vercel.app/"
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <a className="arrowcont" href="#intro">
          <img src={arrow} alt="" className="arrow" />
        </a>
    </div>
  )
}

export default Contact
