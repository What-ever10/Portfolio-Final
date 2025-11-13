import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import '../assets/styles/coding-profiles.css';
const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section">
      <div className="container">
        <h2 className="section-title">Coding Profiles</h2>
        <div className="profiles-grid">
          <a href="https://leetcode.com/u/Pratyush_Kumar_1412/" target="_blank" rel="noopener noreferrer" className="profile-card">
            <SiLeetcode className="profile-icon" />
            <h3>LeetCode</h3>
            <p>Check out my problem-solving progress</p>
          </a>
          <a href="https://codeforces.com/profile/_tHe_Guy" target="_blank" rel="noopener noreferrer" className="profile-card">
            <SiCodeforces className="profile-icon" />
            <h3>Codeforces</h3>
            <p>View my competitive programming stats</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;