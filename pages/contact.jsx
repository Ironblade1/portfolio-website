import Layout from '../components/layout';
import ContactPart from '../components/contactpart'
import styles from '../styles/contact.module.css';

export default function HomePage() {
  return (
    <Layout pageTitle="Contact">
      <div id="contactpage">
        <h2>Contact me</h2>
        <div className={styles.apps}>
          <ContactPart contactName="GitHub" contactUrl="https://github.com/Ironblade1" contactFile="/logos/github.png">
          </ContactPart>
          <ContactPart contactName="LinkedIn" contactUrl="https://www.linkedin.com/in/rohit-beniwal-a93b531ba/" contactFile="/logos/linkedin.png">
          </ContactPart>
          <ContactPart contactName="Instagram" contactUrl="https://www.instagram.com/rohit.beniwal._/" contactFile="/logos/instagram.png">
          </ContactPart>
          <ContactPart contactName="Mail" contactUrl="mailto:rohitbeniwal772@gmail.com" contactFile="/logos/mail.png">
          </ContactPart>
        </div>
      </div>
    </Layout>
  );
}