import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactpage}>
      <div className={styles.contact}>
        <div className={`${styles.ContactContent} center`}>
          <form action="">
            <div className={styles.headc}>
              <h6>GET IN TOUCH WITH US</h6>
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"
                className={styles["form-control"]}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="email"
                className={styles["form-control"]}
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="number"
                className={styles["form-control"]}
                placeholder="Your Number"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <textarea
                rows="6"
                className={styles["form-control"]}
                placeholder="How We Can Help You"
                required
              ></textarea>
            </div>
            <button className={styles.btn}>Submit Now</button>
          </form>
          </div>
  </div>
</div>
);
};

export default ContactUs;