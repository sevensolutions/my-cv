<template>
  <div v-if="navFunction.active == 'blog-post'">
    <BlogPostNew
      :title="activeData && activeData.title"
      :img="activeData && activeData.img"
      :date="activeData && activeData.date"
    />
  </div>
  <div v-else>
    <ActiveSection :sectionName="'blog'">
      <!-- Blog -->
      <div class="content blog">
        <!-- title -->
        <div class="title">
          <span>Blog</span>
        </div>

        <!-- content -->
        <div class="row border-line-v">
          <!-- blog item -->
          <div
            class="col col-d-6 col-t-6 col-m-12"
            v-for="(blog, i) in data"
            :key="i"
          >
            <div class="box-item">
              <div class="image">
                <a href="#" @click="activeBlogPost(blog)">
                  <img :src="blog.img" alt="By spite about do of allow" />
                  <span class="info">
                    <span class="ion ion-document-text"></span>
                  </span>
                </a>
              </div>
              <div class="desc">
                <a href="#" @click="activeBlogPost(blog)">
                  <span class="date">April 28, 2020</span>
                </a>
                <a href="#" @click="activeBlogPost(blog)" class="name"
                  >By spite about do of allow</a
                >
                <div class="text">
                  <p>
                    Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                    pri zril ubique ut. Te cule tation munere noluisse. Enim
                    torquatos&#8230;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

        <div class="pager">
          <nav class="navigation pagination">
            <div class="nav-links">
              <span class="page-numbers current">1</span>
              <a class="page-numbers" href="#">2</a>
              <a class="next page-numbers" href="#">Next</a>
            </div>
          </nav>
        </div>
      </div>
    </ActiveSection>
  </div>
</template>

<script>
import { navFunction } from "../navFunction";
import ActiveSection from "./ActiveSection.vue";
import BlogPostNew from "./blogPost/BlogPostNew.vue";
export default {
  name: `Blogs`,
  components: { ActiveSection, BlogPostNew },
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
