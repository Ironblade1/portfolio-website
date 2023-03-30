import Layout from '../components/layout';

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div id="about">
        <h2>About me</h2>
        <p>I'm a  <strong>MERN stack developer</strong> and <strong>passionate programmer</strong> with a deep enthusiasm for new technologies.</p>
          <p>I am currently pursuing a Bachelor of Technology degree from the esteemed <strong>IIITDM Jabalpur</strong>.</p>
        <p>I like creating websites with <strong>MongoDB</strong> in <strong>React.js</strong> & <strong>Node.js</strong>.</p>
        <p>I also enjoy watching <strong>movies</strong> and <strong>web-series</strong>.</p>
      </div>
    </Layout>
  );
}