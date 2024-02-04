<template>
  <ActiveSection :sectionName="'contacts'">
    <div class="content contacts">
      <!-- title -->
      <div class="title">Get in Touch</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div>
            <ul>
              <li><strong>Email: </strong> contact@danielpeinhopf.com</li>
              <li><strong>Freelance: </strong> Not Available</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div></div
  ></ActiveSection>
</template>

<script>
import ActiveSection from "./ActiveSection.vue";
export default {
  name: `Contact`,
  components: { ActiveSection },
};
</script>
