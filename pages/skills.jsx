import Layout from '../components/layout';
import styles from '../styles/skills.module.css';


// add tooling
// max 8 with this styling
const skills = {"Languages": ['Python', 'JavaScript', 'C', 'C++'], "Web Frameworks": ['React.js', 'Node.js', 'Kaboom.js', 'Express.js'], "Databases": ["MongoDB", "MySQL", "Redis"], "Python Frameworks": ['Pandas','Matplotlib', 'Streamlit'], "Types of APIs": ['REST'], "APIs": ['Spotify API', 'Gmail API', 'LyricsGenius'], "Tooling": ["Git", "GitHub", "pip", "Vercel", "Heroku"], "Data Format": ['Form Data', 'JSON', "XML", "CSV"], "Markup": ["HTML", "Markdown"], "Styling": ['CSS', "Bootstrap"], "Analytics": ['Google Analytics']}

export default function SkillsPage() {
  return (
    <Layout pageTitle="Skills">
      <div id="skills_content">
        <h2>My Skills</h2>
        <p>This is a list of what tools I have used while I have been programming.</p>
        <div className={styles.lists}>
          { 
            Object.keys(skills).map((skill_type, index) => (
              <div className={styles.skillinfo}>
              <h3>{skill_type}</h3>
                <div className={styles.skills}>
                  {
                    skills[skill_type].map((skill_name, index) => ( 
                      <p className={styles.skill}>{skill_name}</p>
                    ))
                  } 
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}