import React, { useState } from 'react'
import style from './Main.module.css'
export default function Main() {
   // function bot() {
   //    const bot = document.getElementById('bot_box');
   //    const btn = document.getElementById('btn');
   //    bot.style.display = 'block';
   //    console.log('clicked');
   //    if (bot.style.display === 'block') {
   //       btn.style.display = 'none';
   //    }

   // }

   function bot() {
      const bot = document.getElementById('bot_box');
      const btn = document.getElementById('btn');

      bot.style.display = 'flex';
      btn.style.display = 'none';
      console.log('clicked');
   }

   function sendMessage() {
      const input = document.getElementById('search');
      const chat = document.getElementById('chat_area');
      let userText = input.value.trim();

      if (userText !== "") {
         // Show user message
         let userMsg = document.createElement('div');
         userMsg.textContent = "You: " + userText;
         userMsg.style.margin = "5px 0";
         userMsg.style.textAlign = "right";
         userMsg.style.color = "blue";
         chat.appendChild(userMsg);

         // Bot reply container
         let botMsg = document.createElement('div');
         botMsg.style.margin = "5px 0";
         botMsg.style.textAlign = "left";
         botMsg.style.color = "green";

         let lowerText = userText.toLowerCase();

         // Predefined knowledge
         if (lowerText.includes("hi") || lowerText.includes("hello") || lowerText.includes("hey")) {
            botMsg.textContent = "Bot: Hello 👋! I’m MyAI, I can tell you about Ikenna or answer simple questions.";
         }
         else if (lowerText.includes("your creator")) {
            botMsg.textContent = "Bot: My creator is Ikenna Goodluck 💻.";
         }
         else if (lowerText.includes("his age")) {
            botMsg.textContent = "Bot: Ikenna Goodluck is a young professional, full of energy 🚀.";
         }
         else if (lowerText.includes("where does he stay") || lowerText.includes("location")) {
            botMsg.textContent = "Bot: He is based in Nigeria 🌍.";
         }
         else if (lowerText.includes("how do i contact him") || lowerText.includes("contact")) {
            botMsg.textContent = "Bot: You can reach him at 📞 07039245529 or 📧 goodluckikennac@gmail.com.";
         }
         else if (lowerText.includes("how was he able to pull this off")) {
            botMsg.textContent = "Bot: Through hard work, continuous learning, and strong problem-solving skills 💡.";
         }
         else if (lowerText.includes("profession") || lowerText.includes("work")) {
            botMsg.textContent = "Bot: Ikenna is a cybersecurity professional and web developer.";
         }
         else if (lowerText.includes("skills") || lowerText.includes("expertise")) {
            botMsg.textContent = "Bot: He specializes in Web Development, Cybersecurity (Offensive Security, Threat Hunting), and JavaScript/React.";
         }
         else if (lowerText.includes("hire") || lowerText.includes("job")) {
            botMsg.textContent = "Bot: You can contact Ikenna at 📞 07039245529 or 📧 goodluckikennac@gmail.com to discuss opportunities.";
         } else if (lowerText.includes("who is ikenna") || lowerText.includes("tell me about ikenna")) {
            botMsg.textContent = "Bot: Ikenna Goodluck is a cybersecurity professional and web developer. He builds websites, works on offensive security, and helps companies stay protected from threats.";
         }
         else if (lowerText.includes("what does ikenna do") || lowerText.includes("ikenna's work")) {
            botMsg.textContent = "Bot: He specializes in Web Development (React, JavaScript) and Cybersecurity (Threat Hunting, Offensive Security).";
         } else if (
            lowerText.includes(" okay how do i contact him") ||
            lowerText.includes("phone") ||
            lowerText.includes("email") ||
            lowerText.includes("reach him") ||
            lowerText.includes("call him") ||
            lowerText.includes("contact")
         ) {
            botMsg.textContent = "Bot: You can contact Ikenna Goodluck at 📞 07039245529 or 📧 goodluckikennac@gmail.com";
         } else if (lowerText.includes("projects") || lowerText.includes("view projects")) {
            botMsg.textContent = "Bot: You can view Ikenna’s projects on his portfolio website (add link if you have one).";
         }
         else if (lowerText.includes("experience")) {
            botMsg.textContent = "Bot: Ikenna has hands-on experience in offensive security, web design, and software development.";
         }else if(lowerText.includes("what are his skills") || lowerText.includes("what are ikenna's skills")){
            botMsg.textContent = "Bot: Ikenna has expertise in Web Development that makes use of Html5 VanillaCss Javascript, React TailwindCss. He is also into Cybersecurity both offensive security and threat hunting.";
         }
         else if (lowerText.includes("cv") || lowerText.includes("resume")) {
            botMsg.textContent = "Bot: You can request Ikenna’s CV directly via email 📧 goodluckikennac@gmail.com.";
         }
         else if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("reach him")) {
            botMsg.textContent = "Bot: You can contact Ikenna Goodluck at 📞 07039245529 or 📧 goodluckikennac@gmail.com";
         }
         else if (qa[lowerText]) {
            botMsg.textContent = "Bot: " + qa[lowerText];
         }

         else if (lowerText.includes("ikenna skills") || lowerText.includes("ikenna expertise")) {
            botMsg.textContent = "Bot: Ikenna has expertise in Web Development, Cybersecurity, and Java. He is also learning advanced Python for security.";
         }

         else if (/^(\d+(\.\d+)?\s*[\+\-\*\/]\s*\d+(\.\d+)?)$/.test(userText)) {
            try {
               let result = eval(userText);
               botMsg.textContent = "Bot: The answer is " + result;
            } catch {
               botMsg.textContent = "Bot: Sorry, I couldn’t solve that.";
            }
         }
         else {
            const replies = [
               "Hmm, I’m not sure about that 🤔",
               "Can you try asking in another way?",
               "That’s interesting, tell me more!",
               "I’ll need to learn that one soon 🔥",
               "Good question!"
            ];
            botMsg.textContent = "Bot: " + replies[Math.floor(Math.random() * replies.length)];
         }

         chat.appendChild(botMsg);

         // Clear input + auto-scroll
         input.value = "";
         chat.scrollTop = chat.scrollHeight;
      }
   }






   return (
      <div>
         <div className={style.navbar}>
            <div>
               <img src="/images/logo.jpg" alt="" srcset="" className={style.logo} />
            </div>
            <div className={style.link}>
               <a href="#home">Home</a>
               <a href="#aboutme">About Me</a>
               <a href="#skills">Skills</a>
               <a href="" >Contact Me</a>
            </div>
         </div>
         <div className={style.home} id='home'>
            <div>
               <h1 className={style.header}>Hi I'm Goodluck</h1>
            </div>
            <div className={style.homegrid}>
               <div className={style.design}></div>
               <div className={style.homecontent}>
                  <div>
                     <p className={style.paragraph}>Welcome to my portfolio</p>
                  </div>
                  <div>
                     <a href="https://github.com/ikennagoodluck?tab=repositories" target='_Blank' className={style.projectlink}>Veiw Projects</a>
                  </div>
               </div>
            </div>
         </div>







         {/* <div className={style.bot}>
            <div className={style.bot_box} id='bot_box'>
               <h2>MyAI</h2>
               
               <input type="text" placeholder='Ask anything' id='search '/>
               <i className={`bx bx-upload ${style.logo}`}></i>

            </div>

               <button id='btn' onClick={bot} className={style.bot_btn}>###</button>

         </div> */}




         {/* <div className={style.bot}>
  <div className={style.bot_box} id="bot_box">
    <h2>MyAI</h2>
    <div className="messages" id="messages"></div>
    <input type="text" placeholder="Ask anything..." id="search" />
  </div>

  <button id="btn" onClick={bot} className={style.bot_btn}>
    💬
  </button>
</div> */}

         {/* <div className={style.bot}>
  <div className={style.bot_box} id="bot_box">
    <h2>MyAI</h2>
    <div className="messages" id="messages"></div>

    <div className="input_area">
      <input type="text" placeholder="Ask anything..." id="search" />
      <button>Send</button>
    </div>
  </div>

  <button id="btn" onClick={bot} className={style.bot_btn}>
    💬
  </button>
</div> */}


         <div className={style.bot}>
            <div className={style.bot_box} id="bot_box">
               <div className={style.header2}>
               <h2 className={style.aiheader}>MyAI</h2>
            </div>
               <div className={style.chat_area} id="chat_area"></div>

               <div className={style.input_area}>
                  <input type="text" placeholder="Ask anything..." id="search" />
                  <button className={style.send} onClick={sendMessage}>Send</button>
               </div>
            </div>

            <button id="btn" onClick={bot} className={style.bot_btn}>💬</button>
         </div>





         <div className={style.aboutme} id='aboutme'>
            <h1 className={style.aboutmeheader}>About Me</h1>
            <div className={style.aboutmemain}>
               <img src="/images/profilepic.jpg" alt="" srcset="" className={style.profileimage} />
               <div className={style.maincontent}>
                  <h1 className={style.name}>Ikenna Goodluck</h1>
                  <p className={style.description}>" I’m Goodluck Ikenna, a passionate
                     web developer and cybersecurity enthusiast. I design
                     and build responsive, user-friendly websites while
                     exploring ways to make the web safer. My work blends
                     creativity with problem-solving, turning ideas into digital
                     experiences.A passionate developer with expertise in React and
                     web development. Loves to create beautiful and functional user interfaces. "
                  </p>
                  <a href="" className={style.button}>Contact Me</a>
               </div>
            </div>
         </div>
         <div id='skills' className={style.skills}>
            {/* <div className={style.skillheader}> */}
            <h1 className={style.skillheader}>Skills</h1>
            {/* </div> */}
            <div className={style.skillscontent}>
               <table>
                  <tr className={style.tr}>
                     <th>Skills</th>
                     <th>Ratings</th>
                  </tr>
                  <tr>
                     <td><img src="/images/html.png" alt="" srcset="" className={style.skillslogo} /><p>Html</p></td>
                     <td id='rate' className={style.rate}></td>
                  </tr>
                  <tr>
                     <td><img src="/images/css.png" alt="" srcset="" className={style.skillslogo} /><p>VanillaCss</p></td>
                     <td id='rate' className={style.secondrate}></td>
                  </tr>
                  <tr>
                     <td>BootstrapCss</td>
                     <td id='rate' className={style.thirdrate}></td>
                  </tr>
                  <tr>
                     <td>TailwindCss</td>
                     <td id='rate' className={style.fourthrate}></td>
                  </tr>
                  <tr>
                     <td>JavaScript</td>
                     <td id='rate' className={style.fifthrate}></td>
                  </tr>
                  <tr>
                     <td>React.Js</td>
                     <td id='rate' className={style.sixthrate}></td>
                  </tr>
               </table>

            </div>
         </div>
      </div>
   )
}
