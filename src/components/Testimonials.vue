<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
    }"
    :pagination="{
      el: '.swiper-pagination-bullets',
      type: 'bullets',
      clickable: true,
    }"
    class="swiper"
  >
    <SwiperSlide class="item swiper-slide">
      <div class="revs-item">
        <div class="text">
          Thanks to Daniel Peinhopf, our non-profit organization "eingefädelt" has a very attractive and professional website. We are often asked about this.
        </div>
        <div class="user">
          <div class="img">
            <!-- <img src="https://eingefaedelt.com/media/vzqmbksc/logo-default.png" alt="" /> -->
          </div>
          <div class="info">
            <div class="name">eingefädelt</div>
            <div class="company">Zusammenleben in Vielfalt</div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </SwiperSlide>
    <div class="owl-dots"></div>
  </Swiper>
</template>

<script>
export default {};
</script>

<style>
.swiper-pagination-bullet {
  background: none;
  opacity: 1 !important;
}
.owl-carousel {
  opacity: 1;
  display: block;
}
.owl-carousel .swiper-pagination-bullets {
  bottom: -25px;
}
</style>
