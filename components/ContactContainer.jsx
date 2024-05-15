import "./ContactContainer.css";

const ContactContainer = () => {
  return (
    <section className="contact-container1">
      <div className="contact-info1">
        <img
          className="img-20240506-233046-1-icon1"
          loading="lazy"
          alt=""
          src="/img-20240506-233046-11@2x.png"
        />
        <div className="contact-details2">
          <h3 className="contact1">Contact</h3>
          <div className="contact-methods1">
            <div className="contact-options">
              <div className="contact-actions">
                <img
                  className="call-icon1"
                  loading="lazy"
                  alt=""
                  src="/call1.svg"
                />
                <div className="email-address">(0232) 8990 5556, 890 5557</div>
              </div>
              <div className="contact-actions1">
                <img
                  className="message-icon1"
                  loading="lazy"
                  alt=""
                  src="/message1.svg"
                />
                <div className="mentalkugmailcom1">mentalku@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="footer-icon" alt="" src="/vector-4-1.svg" />
      <div className="copyright-container">
        <div className="copyright-info1">
          <img
            className="copyright-logo-icon1"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="copyright-2024-mentalkuid1">
          copyright 2024 @mentalku.id
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
