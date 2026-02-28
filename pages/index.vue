<template>
  <Layout :background="'gradient'" :no-sidebar="true">
    <Header :no-sidebar="true" />

    <div class="card-started" id="home-card">
      <!--
  Profile
-->
      <div class="profile no-photo">
        <!-- profile image -->
        <div class="slide" style="background-image: url(/images/ProfilePicture.jpg)"></div>

        <!-- profile titles -->
        <div class="title">Ing. Daniel Peinhopf</div>
        <!--<div class="subtitle">Web Designer</div>-->
        <TypingAnimation />

        <!-- profile socials -->
        <div class="social">
          <a target="_blank" href="https://www.facebook.com/danielpeinhopf7"
            ><span class="fa fa-facebook"></span
          ></a>
          <a target="_blank" href="https://www.instagram.com/__daeny__/"
            ><span class="fa fa-instagram"></span
          ></a>
          <a target="_blank" href="https://www.xing.com/profile/Daniel_Peinhopf"
            ><span class="fa fa-xing"></span
          ></a>
          <a target="_blank" href="https://github.com/sevensolutions"
            ><span class="fa fa-github"></span
          ></a>
        </div>

        <div style="margin-top: 2em; margin-bottom: -2em;">
          <a href="/imprint">Imprint</a>
          &nbsp;|&nbsp;
          <a href="/privacy">Privacy</a>
        </div>

        <!-- profile buttons -->
        <div class="lnks">
          <!-- <a href="#" class="lnk">
            <span class="text">Download CV</span>
            <span class="ion ion-archive"></span>
          </a> -->
          <a
            href="#"
            class="lnk discover"
            @click="navFunction.activeSection('contacts')"
          >
            <span class="text">Contact Me</span>
            <span class="arrow"></span>
          </a>
        </div>
      </div>
    </div>
    <ActiveSection :sectionName="'about'">
      <!--
        About
      -->
      <div class="content about">
        <!-- title -->
        <div class="title">About Me</div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                I'am Daniel Peinhopf, a Software Architect, Full-Stack Developer and tech-allrounder with over {{ experienceYears }} years of practical experience.
                I'am working on a wide variety of projects, some small ones, but also even really big ones.
                Currently i'am focusing on Web applications but i also have a deep knowledge on classic Windows desktop applications using client-server architectures.
              </p>
              <p>
                C# is definitely one of my favorite programming languages but i also code in some other languages.
                I'am contributing to multiple open source projects and also have some of my own open source projects on GitHub.
              </p>
              <p>
                In addition to programming i really like to design and also produce electronic circuits like my own SmartHome server.
              </p>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> {{ age }}</li>
                <li><strong>Nationality . . . . .</strong> Austrian</li>
                <li><strong>Residence . . . . .</strong> Austria</li>
                <li><strong>Freelance . . . . .</strong> Not Available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ActiveSection>
    <ActiveSection :sectionName="'resume'">
      <!--
        Resume
      -->
      <div class="content resume">
        <!-- title -->
        <div class="title">Resume</div>

        <!-- content -->
        <div class="row">
          <!-- experience -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-briefcase"></i></div>
              <div class="name">Experience</div>
            </div>
            <div class="resume-items">
              <div class="resume-item border-line-h active">
                <div class="date">2023 - Present</div>
                <div class="name">Product Owner - BORA</div>
                <div class="company">Boom Software AG</div>
                <p>
                  As product owner, I am responsible for the architecture and design of our BORA framework. I also advise some projects on architectural decisions.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2020 - 2021</div>
                <div class="name">Technical Lead - Boom Rail Solutions</div>
                <div class="company">Boom Software AG</div>
                <p>
                  As Technical Lead, I am responsible for the technical implementation of our Rail Solutions products.
                  You can find more information about our rail solutions <a href="https://rail.boomsoftware.com/" target="_blank">here</a>.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2015 - 2021</div>
                <div class="name">Software Developer (R&amp;D)</div>
                <div class="company">Boom Software AG</div>
                <p>
                  As an R&D software developer, I am responsible for the product development of our Boom Maintenance Manager. This is an application for the maintenance and repair of systems, which can be tailored precisely to specific customer requirements.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2012 - 2015</div>
                <div class="name">Software Developer (Total Customizing)</div>
                <div class="company">Boom Software AG</div>
                <p>
                  As a total customizing employee, I was responsible for customizing our Boom Maintenance Manager to meet customer requirements.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2011 - 2012</div>
                <div class="name">Community service</div>
                <div class="company">Benedictine monastery of St. Lambrecht</div>
                <p></p>
              </div>
              <div class="resume-item">
                <div class="date">2008 &amp; 2009</div>
                <div class="name">Internship</div>
                <div class="company">MODER Elektrotechnik</div>
                <p>I did an internship at MODER Elektrotechnik twice, each lasting four weeks. Here I supported the employees in completing various electrical installations and was able to gain a lot of experience.</p>
              </div>
            </div>
          </div>

          <!-- education -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-university"></i></div>
              <div class="name">Education</div>
            </div>
            <div class="resume-items">
              <div class="resume-item border-line-h">
                <div class="date">2006 - 2011</div>
                <div class="name">HTBLA Kapfenberg</div>
                <div class="company">Regelungstechnik</div>
                <p>
                  Successful completion of the Matura after 5 years.
                </p>
              </div>
              <div class="resume-item border-line-h">
                <div class="date">2002 - 2006</div>
                <div class="name">Technische Hauptschule Pöls</div>
                <p>Secondary school with a technical focus.</p>
              </div>
              <div class="resume-item">
                <div class="date">1998 - 2002</div>
                <div class="name">Volkschule Pöls</div>
                <div class="company">Elementary school</div>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Skills
      -->
      <div class="content skills">
        <!-- title -->
        <div class="title">My Skills</div>

        <!-- content -->
        <div class="row">
          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="name">Coding</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">C# (.NET)</div>
                  <div class="progress">
                    <div class="percentage" style="width: 100%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">HTML/CSS/JavaScript/TypeScript</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Go</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">C/C++</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list dotted">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-flag"></i></div>
                <div class="name">Languages</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">German (mother tongue)</div>
                  <div class="progress">
                    <div class="percentage" style="width: 60%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">English</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list circles">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="name">Frameworks</div>
              </div>
              <ul>
                <SkillProgress :skills="skills" />
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-list"></i></div>
                <div class="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div class="name">Website / WebApp Hosting</div>
                </li>
                <li>
                  <div class="name">Web Design</div>
                </li>
                <li>
                  <div class="name">DevOps</div>
                </li>
                <li>
                  <div class="name">Azure Cloud</div>
                </li>
                <li>
                  <div class="name">MSSQL and PostgreSQL</div>
                </li>
                <li>
                  <div class="name">UX / UI Design</div>
                </li>
                <li>
                  <div class="name">Photography and Video Editing</div>
                </li>
                <li>
                  <div class="name">Umbraco CMS</div>
                </li>
                <li>
                  <div class="name">Electronics</div>
                </li>
                <li>
                  <div class="name">KiCad</div>
                </li>
                <li>
                  <div class="name">Buildroot</div>
                </li>
                <li>
                  <div class="name">Linux Kernel Driver Development</div>
                </li>
              </ul>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Testimonials
      -->
      <div class="content testimonials">
        <!-- title -->
        <div class="title">Testimonials</div>

        <!-- content -->
        <div class="row testimonials-items">
          <!-- client item -->
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="revs-carousel default-revs">
              <Testimonials />
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    </ActiveSection>

    <!--
    Card - Works
  -->
    <ActiveSection :sectionName="'works'">
      <WorkIsotope />
    </ActiveSection>

    <!--
    Card - Blog
  -->
    <!-- <Blogs /> -->

    <!--
    Card - Contacts
  -->
    <Contact />
  </Layout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "css/new-skin/new-skin.css",
    },
    {
      rel: "stylesheet",
      href: "css/demos/demo-1-colors.css",
    },
  ],
});
</script>

<script>
import ActiveSection from "../src/components/ActiveSection.vue";
import Blogs from "../src/components/Blogs.vue";
import Contact from "../src/components/Contact.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";

function getAge(dateNumber) {
  var today = new Date();
  var date = new Date(dateNumber);
  var age = today.getFullYear() - date.getFullYear();
  var m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate()))
    age--;
  return age;
}

export default {
  name: `index-new`,

  data() {
    return {
      navFunction,
      age: getAge(710632800000),
      experienceYears: getAge(1341093600000),
      skills: [
        { name: "BORA", value: 100 },
        { name: ".NET", value: 100 },
        { name: "EntityFramework", value: 75 },
        { name: "Vue / Nuxt", value: 85 },
        { name: "React", value: 60 },
        { name: "ReactNative", value: 60 },
      ],
    };
  },
  components: {
    Layout,
    Header,
    TypingAnimation,
    ActiveSection,
    Contact,
    Blogs,
    WorkIsotope,
    SkillProgress,
    Testimonials,
  },
};
</script>
