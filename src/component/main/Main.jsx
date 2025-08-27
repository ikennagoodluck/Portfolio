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
         <div className={style.bot}>
            <a href='#home' className={style.bot}>###</a>
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
                     <td><img src="/images/html.png" alt="" srcset="" className={style.skillslogo}/><p>Html</p></td>
                     <td className={style.rate}></td>
                  </tr>
                  <tr>
                     <td><img src="/images/css.png" alt="" srcset="" className={style.skillslogo}/><p>VanillaCss</p></td>
                     <td className={style.secondrate}></td>
                  </tr>
                  <tr>
                     <td>BootstrapCss</td>
                     <td className={style.rate}></td>
                  </tr>
                  <tr>
                     <td>TailwindCss</td>
                     <td className={style.rate}></td>
                  </tr>
                  <tr>
                     <td>JavaScript</td>
                     <td className={style.rate}></td>
                  </tr>
                  <tr>
                     <td>React.Js</td>
                     <td className={style.rate}></td>
                  </tr>
               </table>

            </div>
         </div>
      </div>
   )
}
