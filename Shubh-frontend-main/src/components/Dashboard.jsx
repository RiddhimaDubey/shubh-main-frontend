// import React from 'react';
// import '../styles/Dashboard.css';

// import bg from '../assets/Infinity-background.png';
// import codeIcon from '../assets/code-icon.png';
// import questionIcon from '../assets/question-icon.png';
// import calendarIcon from '../assets/calendar-icon.png';
// import goldMedal from '../assets/gold.png';
// import silverMedal from '../assets/silver.png';
// import bronzeMedal from '../assets/bronze.png';

// const Dashboard = () => {
//   const leaderboard = [
//     "Aditi Khaale", "Rishabh Chabale", "Rohit Nahale", "Keshari Batiyale",
//     "Mulayam Taale", "Nathuraam Kaale", "Satyam Dabale", "Nutan Mitti wale",
//     "Surya Niwale", "Anubhav lagale", "Reema Chhale", "Shaurya Gandenaale"
//   ];

//   const quests = [
//     { title: "Rest API Project", xp: 50 },
//     { title: "Weekly Boss Battle: Debugging Marathon", xp: 200 },
//     { title: "Frontend Framework Showdown", xp: 150 }
//   ];

//   return (
//     <div className="dashboard-container" style={{ backgroundImage: `url(${bg})` }}>
//       <div className="dashboard-content">

//         {/* Live Classes */}
//         <section className="live-classes">
//           <h2>Live Class Calendar Preview</h2>
//           <div className="cards-row">
//             <div className="card">
//               <div className="icon-title">
//                 <img src={codeIcon} alt="code icon" />
//                 <h3>Building your first react app</h3>
//               </div>
//               <p>By Mr. Madhur Bhandarkar</p>
//               <p className="calendar">
//                 <img src={calendarIcon} alt="calendar icon" /> 04 April 2025
//               </p>
//             </div>
//             <div className="card">
//               <div className="icon-title">
//                 <img src={questionIcon} alt="question icon" />
//                 <h3>Q and A session</h3>
//               </div>
//               <p>By Harishankar Parsai</p>
//               <p className="calendar">
//                 <img src={calendarIcon} alt="calendar icon" /> Mon/Wed/Fri • 6:00 PM IST
//               </p>
//               <button className="live-button">Join live Now</button>
//             </div>
//           </div>
//         </section>

//         {/* Leaderboard */}
//         <section className="leaderboard">
//           <h2>Weekly leaderboard</h2>
//           <ol>
//             {leaderboard.map((name, index) => {
//               const xp = 8200 - index * 100;
//               let icon;
//               if (index === 0) icon = goldMedal;
//               else if (index === 1) icon = silverMedal;
//               else if (index === 2) icon = bronzeMedal;
//               return (
//                 <li key={index}>
//                   <span>
//                     {icon && <img src={icon} alt="medal" className="medal" />}
//                     {index + 1}. {name}
//                   </span>
//                   <span><strong>{xp} XP</strong></span>
//                 </li>
//               );
//             })}
//           </ol>
//         </section>

//         {/* Quests */}
//         <section className="quests">
//           <h2>Upcoming Quests</h2>
//           <div className="cards-row">
//             {quests.map((quest, idx) => (
//               <div className="card" key={idx}>
//                 <h3>{quest.title}</h3>
//                 <p>Deadline: 04 May 2025</p>
//                 <p className="xp">{quest.xp} XP</p>
//                 <p>Project Status: Pending</p>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;
