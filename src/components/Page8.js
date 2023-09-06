function Page8() {
  return (
    <div className=" page8 ">
      <div className="contacttouch">
        <h1>Contact</h1>
        <h2 className="touch">Let's get in touch!</h2>
      </div>
      <div className=" formbox">
        <h2 className="sendmsg">Send Us Message</h2>
        <p>Have any questions regarding our services? Send your message.</p>
        <form className="form" action="form">
          <div className="d-flex justify-content-start">
            <div>
              <label for="name">Full Name</label>
              <br />
              <input type="text" placeholder="Enter Your Name..." />
            </div>
            <div className="emailbox">
              <label for="name">Email</label>
              <br />
              <input type="text" placeholder="Enter Your Email..." />
            </div>
          </div>
          <div className="msgdiv">
            <label for="name">Message</label>
            <br />
            <input
              className="msgbox"
              type="text"
              placeholder="Enter Your Message..."
            />
          </div>
          <div className="checkdiv d-flex">
            <input className="checkbox" type="checkbox" />
            <span>
              By ticking this box, I am consenting to be sent monthly articles
              and promotions through EvolTech newsletter.
            </span>
          </div>
          <button className="submitdiv">
            Submit <span className="arrow7">&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page8;
