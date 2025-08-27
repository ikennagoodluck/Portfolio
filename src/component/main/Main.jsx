import React from 'react'
import style from './Main.module.css'
export default function Main() {
   return (
      <div>
         <div className={style.navbar}>
            <div>
               <img src="/images/logo.jpg" alt="" srcset="" className={style.logo} />
            </div>
            <div className={style.link}>
               <a href="/" className={style.Home}>Home</a>
               <a href="#aboutme" className={style.Aboutme}>AboutMe</a>
               <a href="/" className={style.skills}>Skills</a>
               <a href="/" className={style.contactme}>ContactMe</a>
            </div>
         </div>
         <div className={style.home} id='home'>
            <div>
               <h1 className={style.header}>Hi I'm Goodluck</h1>
            </div>
            <div className={style.homecontent}>
               <div>
                  <p className={style.paragraph}>Welcome to my portfolio</p>
               </div>
               <div>
                  <a href="https://github.com/ikennagoodluck?tab=repositories" target='_Blank' className={style.projectlink}>Veiw Projects</a>
               </div>
            </div>
         </div>
         <div className={style.aboutme} id='aboutme'>
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
               <button className={style.button}>Contact Me</button>
            </div>
         </div>

         <div className={style.skills}>
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
                     <td>Html</td>
                     <td className={style.rate}></td>
                  </tr>
                  <tr>
                     <td>VanillaCss</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>BootstrapCss</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>TailwindCss</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>JavaScript</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>React.Js</td>
                     <td></td>
                  </tr>
               </table>

            </div>
         </div>
      </div>
   )
}
