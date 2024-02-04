<template>
  <ActiveSection :sectionName="'blog'">
    <div class="content blog">
      <!-- title -->
      <div class="title">Latest Posts</div>

      <!-- content -->
      <div class="row border-line-v">
        <!-- blog item -->
        <div
          v-for="blog in data"
          :key="blog.img"
          class="col col-d-12 col-t-12 col-m-12 border-line-h"
        >
          <div class="box-item">
            <div class="image">
              <a href="#" @click="activeBlogPost(blog)">
                <img :src="blog.img" alt="" />
                <span class="info">
                  <span class="ion ion-document-text"></span>
                </span>
                <span class="date"><strong>20</strong>Jun</span>
              </a>
            </div>
            <div class="desc">
              <a href="#" @click="activeBlogPost(blog)" class="name">{{
                blog.title
              }}</a>
              <div class="category">Design</div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
  <BlogPostClassic
    :title="activeData && activeData.title"
    :img="activeData && activeData.img"
    :date="activeData && activeData.date"
  />
</template>

<script>
import { navFunction } from "@/navFunction";
import ActiveSection from "./ActiveSection.vue";
import BlogPostClassic from "./blogPost/BlogPostClassic.vue";
export default {
  name: `BlogClassic`,
  components: { ActiveSection, BlogPostClassic },
  data() {
    return {
      navFunction,
      data: [
        {
          img: "/images/blog/blog1.jpg",
          date: "APRIL 28, 2020",
          title: "By spite about do of allow",
        },
        {
          img: "/images/blog/blog2.jpg",
          date: "APRIL 28, 2020",
          title: "By spite about do of allow",
        },
        {
          img: "/images/blog/blog3.jpg",
          date: "APRIL 28, 2020",
          title: "By spite about do of allow",
        },
        {
          img: "/images/blog/blog1.jpg",
          date: "APRIL 28, 2020",
          title: "By spite about do of allow",
        },
      ],
      activeData: null,
      sort: 2,
    };
  },
  methods: {
    activeBlogPost(value) {
      navFunction.activeSection("blog-post");
      this.activeData = value;
    },
  },
};
</script>
