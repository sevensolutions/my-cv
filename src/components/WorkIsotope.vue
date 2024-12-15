<template>
  <div class="content works">
    <!-- title -->
    <div class="title">Recent Works</div>

    <!-- filters -->
    <div class="filter-menu filter-button-group">
      <div class="f_btn active">
        <label><input type="radio" name="fl_radio" value="grid-item" />All</label>
      </div>
      <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="webApp" />Web App</label>
      </div>
      <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="mobileApp" />Mobile App</label>
      </div>
      <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="website" />Website</label>
      </div>
      <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="electronics" />Electronics</label>
      </div>
      <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="openSource" />OpenSource</label>
      </div>
      <!-- <div class="f_btn">
        <label><input type="radio" name="fl_radio" value="other" />Other</label>
      </div> -->
    </div>

    <!-- content -->
    <div class="row grid-items border-line-v">
      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item electronics border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-1" class="has-popup-media">
              <img src="/images/works/AutomationS.jpg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-1" class="name has-popup-media">AutomationS</a>
            <div class="category">Electronics</div>
          </div>
          <div id="popup-1" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/AutomationS.jpg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>AutomationS</h1>
                  <div class="blog-detail">Electronics</div>
                  <div class="blog-content">
                    <p>
                      <i>AutomationS</i> is my own SmartHome solution. It's one of my bigger hobby projects and includes big software but also hardware components.
                    </p>
                    <p>
                      The Client Software features a graphical flow designer which allows easy no-code programming of complex automations.
                      Due to the long history of this project, this Software is still a WPF application but it have already been ported to .NET 6.
                    </p>
                    <p>
                      The Server Software is also written in .NET 6 which is part of my very own <i>AutomationS Operating System</i>, built using Buildroot.
                    </p>
                    <p>
                      The hardware is also designed by me around the Raspberry Pi Compute Module 4.
                      Besides the Ethernet connection it features an M.2 NVME drive for data storage, as well as a CAN-port for future extension modules. 
                    </p>
                    <p>
                      Currently it powers my own home, as well as the home of a friend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item mobileApp border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-2" class="has-popup-media">
              <img src="/images/works/Equitable1.jpg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-2" class="name has-popup-media">Equitable App</a>
            <div class="category">Mobile App</div>
          </div>
          <div id="popup-2" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/Equitable1.jpg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Equitable App</h1>
                  <div class="blog-detail">Mobile App</div>
                  <div class="blog-content">
                    <p>
                      Together with three students of the HAK Lambach i've developed a Timetable Mobile App as part of the project <i>Digitalisierung des Reitplans in der Schulgemeinschaft Agrarbildungszentrum Lambach und HAK Lambach</i>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item openSource border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-3" class="has-popup-media">
              <img src="https://github.com/sevensolutions/nomad-iis/raw/main/artwork/logo.svg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-3" class="name has-popup-media">Nomad IIS Task Driver</a>
            <div class="category">OpenSource</div>
          </div>
          <div id="popup-3" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="https://github.com/sevensolutions/nomad-iis/raw/main/artwork/logo.svg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Nomad IIS Task Driver</h1>
                  <div class="blog-detail">OpenSource</div>
                  <div class="blog-content">
                    <p>
                      <i>Nomad IIS</i> is a task driver for HashiCorp Nomad to run web-applications in IIS on Windows machines. Unlike most other Nomad task drivers, this one is written in the C# language using ASP.NET 8. It uses the Microsoft.Web.Administration-API to communicate with IIS. Feel free to use it as-is or as a reference implementation for your own C#-based Nomad-plugins.
                    </p>
                    <p>
                      This is my first real Open Source Project.
                    </p>
                  </div>
                  <a href="https://github.com/sevensolutions/nomad-iis" target="_blank" class="button">
                    <span class="text">GitHub Repository</span>
                    <span class="arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item website border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-4" class="has-popup-media">
              <img src="/images/works/eingefaedelt.png" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-4" class="name has-popup-media">eingefädelt Website</a>
            <div class="category">Website</div>
          </div>
          <div id="popup-4" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/eingefaedelt.png" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>eingefädelt Website</h1>
                  <div class="blog-detail">Website</div>
                  <div class="blog-content">
                    <p>
                      The Website of my mom's non-profit organization "eingefädelt - Zusammenleben in Vielfalt".
                    </p>
                    <blockquote>
                      Thanks to Daniel Peinhopf, our non-profit organization "eingefädelt" has a very attractive and professional website. We are often asked about this.
                      - eingefädelt - Zusammenleben in Vielfalt
                    </blockquote>
                  </div>
                  <a href="https://eingefaedelt.com" target="_blank" class="button">
                    <span class="text">View Website</span>
                    <span class="arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item webApp border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-5" class="has-popup-media">
              <img src="/images/works/ChurchPlanner.png" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-5" class="name has-popup-media">Church Planner</a>
            <div class="category">Web App</div>
          </div>
          <div id="popup-5" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/ChurchPlanner.png" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Church Planner</h1>
                  <div class="blog-detail">Web App</div>
                  <div class="blog-content">
                    <p>
                      <i>Church Planner</i> is a small web application for creating schedules across multiple parishes. It allows collaboration of multiple users and finally generates a PDF which can be directly printed into the newspapers.
                    </p>
                    <p>
                      This was my first project using <i>Google Firebase</i>. It's using Firebase Auth and it's document store, but everything else is running in the browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item openSource border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-6" class="has-popup-media">
              <img src="/images/works/ApacheApisix.jpg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-6" class="name has-popup-media">Contributions to Apache APISIX</a>
            <div class="category">OpenSource</div>
          </div>
          <div id="popup-6" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/ApacheApisix.jpg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Contributions to Apache APISIX</h1>
                  <div class="blog-detail">OpenSource</div>
                  <div class="blog-content">
                    <p>
                      I really like Apache APISIX, a great API gateway. In 2023 i made my first contribution to this Open Source project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item electronics border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-7" class="has-popup-media">
              <img src="/images/works/PickAndPlace.jpg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-7" class="name has-popup-media">Pick&amp;Place Machine</a>
            <div class="category">Electronics</div>
          </div>
          <div id="popup-7" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/PickAndPlace.jpg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Pick&amp;Place Machine</h1>
                  <div class="blog-detail">Electronics</div>
                  <div class="blog-content">
                    <p>
                      One of my newer projects is a self-made Pick and Place Machine for mass-assembly of Electronic Products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item openSource border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-3" class="has-popup-media">
              <img src="https://raw.githubusercontent.com/sevensolutions/traefik-oidc-auth/refs/heads/main/.assets/icon.png" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-3" class="name has-popup-media">Traefik OIDC Authentication Plugin</a>
            <div class="category">OpenSource</div>
          </div>
          <div id="popup-3" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="https://raw.githubusercontent.com/sevensolutions/traefik-oidc-auth/refs/heads/main/.assets/icon.png" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Traefik OIDC Authentication Plugin</h1>
                  <div class="blog-detail">OpenSource</div>
                  <div class="blog-content">
                    <p>
                      A <a href="https://traefik.io/traefik/" target="_blank">traefik</a> Plugin for securing the upstream service with OpenID Connect acting as a relying party.
                    </p>
                    <p>
                      My second real Open Source Project which is used by the traefik community quite a lot.
                    </p>
                  </div>
                  <a href="https://github.com/sevensolutions/traefik-oidc-auth" target="_blank" class="button">
                    <span class="text">GitHub Repository</span>
                    <span class="arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- work item design -->
      <div class="col col-d-6 col-t-6 col-m-12 grid-item electronics border-line-h">
        <div class="box-item">
          <div class="image">
            <a href="#popup-1" class="has-popup-media">
              <img src="/images/works/SoundcraftMixer.jpg" alt="" />
              <span class="info">
                <span class="ion ion-images"></span>
              </span>
            </a>
          </div>
          <div class="desc">
            <a href="#popup-1" class="name has-popup-media">Digital Audio Mixing Console</a>
            <div class="category">Electronics</div>
          </div>
          <div id="popup-1" class="popup-box mfp-fade mfp-hide">
            <div class="content">
              <div class="image">
                <img src="/images/works/SoundcraftMixer.jpg" alt="" />
              </div>
              <div class="desc">
                <div class="post-box">
                  <h1>Digital Audio Mixing Console</h1>
                  <div class="blog-detail">Electronics</div>
                  <div class="blog-content">
                    <p>
                      In our parish I often help with my audio equipment at various events, such as weddings.
                    </p>
                    <p>
                      Since setting up all the equipment always takes a relatively long time, I built this audio mixing console.<br />
                      It includes a Soundcraft UI24R digital mixer, as well as a super bright industrial touchscreen monitor to operate the mixer.
                      In addition, a wireless microphone receiver and power distribution are integrated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      hid: "stripe",
      src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js",
      defer: true,
    },
  ],
});
</script>

<script>
export default {
  name: `WorkIsotope`,

  mounted() {
    setTimeout(() => {
      // init Isotope
      var iso = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
      });
      // bind filter button click
      var filtersElem = document.querySelector(".filter-button-group");
      filtersElem.addEventListener("click", function (event) {
        // console.log(event.target.closest(".f_btn"));
        if (event.target.value !== undefined) {
          var filterValue = event.target.getAttribute("value");
          iso.arrange({ filter: `.${filterValue}` });
        }
      });

      // change is-checked class on buttons
      var buttonGroups = document.querySelectorAll(".filter-menu");
      for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
      }

      function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener("click", function (event) {
          if (!event.target.classList.contains("filter-menu")) {
            buttonGroup.querySelector(".active").classList.remove("active");
            event.target.closest(".f_btn").classList.add("active");
          }
        });
      }
    }, 500);
  },
};
</script>
