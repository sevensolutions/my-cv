<template>
  <div class="demo_container">
    <div class="demo_content">
      <div class="text-center">
        <img src="/images/ryan_bg2.png" alt="" class="logo" />
        <p style="margin-top: 10px">Resume CV & vCard Vue NuxtJS Template</p>
      </div>
      <div class="row">
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/" target="_blank">
            <img src="/images/demos/new_preview1.jpg" alt="" />
            <h5>01. Default</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-dark" target="_blank">
            <img src="/images/demos/new_preview2.jpg" alt="" />
            <h5>02. Default Dark</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-bg-image" target="_blank">
            <img src="/images/demos/new_preview9.png" alt="" />
            <h5>03. Default Background Image</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-3" target="_blank">
            <img src="/images/demos/new_preview3.jpg" alt="" />
            <h5>04. Developer</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-4" target="_blank">
            <img src="/images/demos/new_preview4.jpg" alt="" />
            <h5>05. Designer</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-5" target="_blank">
            <img src="/images/demos/new_preview5.jpg" alt="" />
            <h5>06. Trainer</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-6" target="_blank">
            <img src="/images/demos/new_preview6.jpg" alt="" />
            <h5>07. Lawyer</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-7" target="_blank">
            <img src="/images/demos/new_preview7.jpg" alt="" />
            <h5>08. Writer</h5>
          </a>
        </div>
        <div class="col col-d-4 col-t-6 col-m-12 border-line-h">
          <a href="/index-new-demo-8" target="_blank">
            <img src="/images/demos/new_preview8.jpg" alt="" />
            <h5>09. Musician</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `demo`,
};
</script>

<style scoped>
.col a {
  display: block;
  box-shadow: 0 2px 48px 0 rgb(0 0 0 / 4%);
  margin-bottom: 20px;
  position: relative;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}
img {
  width: 100%;
}
p {
  font-size: 16px;
}
.logo {
  width: 200px;
}
.text-center {
  text-align: center;
}
a {
  text-align: center;
}
.demo_content {
  padding: 100px 0;
}
.demo_container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .demo_container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .demo_container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .demo_container {
    width: 1170px;
  }
}
</style>
