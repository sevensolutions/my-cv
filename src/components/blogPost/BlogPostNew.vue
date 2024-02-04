<template>
  <BlogPostContainer :sectionName="'blog-post'">
    <!--
						Blog Single
					-->
    <div class="content blog-single">
      <!-- title -->
      <div class="title">Blog Post</div>

      <!-- content -->
      <div class="row border-line-v">
        <div class="col col-m-12 col-t-12 col-d-12">
          <div class="post-box">
            <!-- blog detail -->
            <h1 class="h-title">
              {{ title }}
            </h1>
            <div class="blog-detail">
              <span class="date">{{ date }}</span>
              <span class="cat-links"
                ><a href="#">Design</a>, <a href="#">Music</a></span
              >
              <span class="byline">
                by <span class="author"><a href="#">admin</a></span></span
              >
            </div>

            <!-- blog image -->
            <div class="blog-image">
              <img :src="img" alt="" />
            </div>

            <!-- blog content -->
            <div class="blog-content">
              <p>
                So striking at of to welcomed resolved. Northward by described
                up household therefore attention. Excellence decisively nay man
                yet impression for contrasted remarkably.
              </p>
              <p>
                Forfeited you engrossed but gay sometimes explained. Another as
                studied it to evident. Merry sense given he be arise. Conduct at
                an replied removal an amongst. Remaining determine few her two
                cordially admitting old.
              </p>
              <blockquote>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Pellentesque suscipit.
              </blockquote>
              <p>
                Tiled say decay spoil now walls meant house. My mr interest
                thoughts screened of outweigh removing. Evening society musical
                besides inhabit ye my. Lose hill well up will he over on.
                Increasing sufficient everything men him admiration unpleasing
                sex.
              </p>
              <ul class="list-style">
                <li>Greatest properly off ham exercise all.</li>
                <li>Unsatiable invitation its possession nor off.</li>
                <li>
                  All difficulty estimating unreserved increasing the
                  solicitude.
                </li>
              </ul>
              <p>
                Unpleasant astonished an diminution up partiality. Noisy an
                their of meant. Death means up civil do an offer wound of.
              </p>
            </div>

            <div class="post-text-bottom">
              <div class="social-share">
                <span>Share</span>
                <a
                  class="share-btn share-btn-facebook"
                  title="Share on Facebook"
                  ><i class="ion ion-social-facebook"></i
                ></a>
                <a class="share-btn share-btn-twitter" title="Share on Twitter"
                  ><i class="ion ion-social-twitter"></i
                ></a>
                <a
                  class="share-btn share-btn-linkedin"
                  title="Share on Linkedin"
                  ><i class="ion ion-social-linkedin"></i
                ></a>
                <a class="share-btn share-btn-reddit" title="Share on Reddit"
                  ><i class="ion ion-social-reddit"></i
                ></a>
                <a
                  class="share-btn share-btn-pinterest"
                  title="Share on Pinterest"
                  ><i class="ion ion-social-pinterest"></i
                ></a>
              </div>
              <span class="tags-links"
                >Taggs: <a href="#">code</a><a href="#">html</a
                ><a href="#">plugin</a><a href="#">wordpress</a></span
              >
            </div>
          </div>
        </div>
      </div>

      <nav class="navigation post-navigation">
        <div class="nav-links">
          <div class="nav-previous">
            <a href="#"
              ><span class="post-nav-next post-nav-text">Prev</span></a
            >
          </div>
          <div class="nav-next">
            <a href="#"
              ><span class="post-nav-prev post-nav-text">Next</span></a
            >
          </div>
        </div>
      </nav>

      <div class="post-comments">
        <div class="title">
          <div class="title_inner">3 Comments</div>
        </div>
        <div class="row border-line-v comments-row">
          <div class="col col-m-12 col-t-12 col-d-12">
            <ul class="comments">
              <li class="comment post-comment">
                <div class="comment">
                  <div class="comment-image image">
                    <img
                      src="/images/man1.jpg"
                      class="avatar"
                      height="80"
                      width="80"
                      alt=""
                    />
                  </div>
                  <div class="comment-desc desc">
                    <div class="comment-name name">
                      <span class="comment-author">John Doe</span>
                      <span class="comment-time">8:16 pm</span>
                      <span class="comment-date">April 28, 2020</span>
                      <span class="comment-reply">
                        <a class="comment-reply-link" href="#">Reply</a>
                      </span>
                    </div>
                    <div class="comment-text">
                      <p>
                        An has alterum nominavi. Nam at elitr veritus
                        voluptaria. Cu eum regione tacimates vituperatoribus, ut
                        mutat delenit est.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <ul class="children">
                <li class="comment post-comment">
                  <div class="comment">
                    <div class="comment-image image">
                      <img
                        src="/images/man1.jpg"
                        class="avatar"
                        height="80"
                        width="80"
                        alt=""
                      />
                    </div>
                    <div class="comment-desc desc">
                      <div class="comment-name name">
                        <span class="comment-author">John Doe</span>
                        <span class="comment-time">8:16 pm</span>
                        <span class="comment-date">April 28, 2020</span>
                        <span class="comment-reply">
                          <a class="comment-reply-link" href="#">Reply</a>
                        </span>
                      </div>
                      <div class="comment-text">
                        <p>
                          An has alterum nominavi. Nam at elitr veritus
                          voluptaria. Cu eum regione tacimates vituperatoribus,
                          ut mutat delenit est.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <li class="comment post-comment">
                <div class="comment">
                  <div class="comment-image image">
                    <img
                      src="/images/man1.jpg"
                      class="avatar"
                      height="80"
                      width="80"
                      alt=""
                    />
                  </div>
                  <div class="comment-desc desc">
                    <div class="comment-name name">
                      <span class="comment-author">John Doe</span>
                      <span class="comment-time">8:16 pm</span>
                      <span class="comment-date">April 28, 2020</span>
                      <span class="comment-reply">
                        <a class="comment-reply-link" href="#">Reply</a>
                      </span>
                    </div>
                    <div class="comment-text">
                      <p>
                        An has alterum nominavi. Nam at elitr veritus
                        voluptaria. Cu eum regione tacimates vituperatoribus, ut
                        mutat delenit est.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="post-comments">
        <div class="title">Leave a Comment</div>
        <div class="row border-line-v">
          <div class="col col-m-12 col-t-12 col-d-12">
            <div class="post-box">
              <form id="cform" method="post">
                <div class="row">
                  <div class="col col-d-12 col-t-12 col-m-12">
                    <div class="group-val">
                      <input type="text" name="name" placeholder="Full Name" />
                    </div>
                  </div>
                  <div class="col col-d-12 col-t-12 col-m-12">
                    <div class="group-val">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="align-left">
                  <a
                    href="#"
                    class="button"
                    onclick="$('#cform').submit(); return false;"
                  >
                    <span class="text">Add Comment</span>
                    <span class="arrow"></span>
                  </a>
                </div>
              </form>
              <div class="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></BlogPostContainer
  >
</template>

<script>
import ActiveSection from "../ActiveSection.vue";
import {
  default as BlogPostContainer,
  default as BlogPostContainer1,
} from "../BlogPostContainer.vue";
export default {
  name: `BlogPostNew`,
  components: { ActiveSection, BlogPostContainer, BlogPostContainer1 },
  props: {
    title: { type: String, default: "title" },
    date: { type: String, default: "title" },
    img: { type: String, default: "title" },
  },
};
</script>
