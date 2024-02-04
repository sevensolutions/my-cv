<template>
  <ActiveSection :sectionName="'blog-post'">
    <div class="content blog-single">
      <!-- title -->
      <div class="title">Blog Post</div>

      <!-- content -->
      <div class="row border-line-v">
        <div class="col col-m-12 col-t-12 col-d-12">
          <div class="post-box">
            <!-- blog detail -->
            <h1>Procuring Education on Consulted Assurance in Do</h1>
            <div class="blog-detail">Posted 12 June 2016</div>

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
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="title">Comments</div>

      <!-- comments -->
      <div class="row border-line-v">
        <div class="col col-m-12 col-t-12 col-d-12">
          <div class="post-box">
            <!-- comments items -->
            <div class="col-md-12">
              <ul class="post-comments">
                <!-- comment item -->
                <li>
                  <img src="/images/man1.jpg" alt="" />
                  <div class="comment-info">
                    <div class="name">
                      <h6>John Doe <span>1 hour ago</span></h6>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      Kept in sent gave feel will oh it we. Has pleasure
                      procured men laughing shutters nay.
                    </p>
                  </div>
                </li>

                <!-- comment item -->
                <li>
                  <img src="/images/man1.jpg" alt="" />
                  <div class="comment-info">
                    <div class="name">
                      <h6>John Doe <span>3 hour ago</span></h6>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      Kept in sent gave feel will oh it we. Has pleasure
                      procured men laughing shutters nay.
                    </p>
                  </div>
                </li>

                <!-- comment item -->
                <li>
                  <img src="/images/man1.jpg" alt="" />
                  <div class="comment-info">
                    <div class="name">
                      <h6>John Doe <span>6 hour ago</span></h6>
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      Kept in sent gave feel will oh it we. Has pleasure
                      procured men laughing shutters nay.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="title">Leave a Comment</div>

      <!-- comments -->
      <div class="row border-line-v">
        <div class="col col-m-12 col-t-12 col-d-12">
          <div class="post-box">
            <!-- comment form -->
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
                <a href="#" class="button">
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
  </ActiveSection>
</template>

<script>
import ActiveSection from "../ActiveSection.vue";
export default {
  name: `BlogPostClassic`,
  components: { ActiveSection },
  props: {
    title: { type: String, default: "title" },
    date: { type: String, default: "title" },
    img: { type: String, default: "title" },
  },
};
</script>
