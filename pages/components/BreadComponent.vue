<template>
  <v-row>
    <v-col cols="12" md="8">
      <v-card color="" class="left-bread pa-5" elevation="10" variant="">
        <v-row>
          <v-col cols="12" md="6">
            <v-card-item>
              <div>
                <div class="bread-text mb-1">In Home Rehab</div>
                <div class="bread-caption mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  blanditiis voluptate, laborum mollitia, repellendus aperiam
                  ipsum vitae alias voluptatem facere soluta nesciunt. In omnis
                  dolor necessitatibus. Deserunt nisi harum assumenda.
                </div>
              </div>
            </v-card-item>
            <!-- <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions> -->
          </v-col>
          <v-col cols="12" md="6">
            <v-card-item>
              <div>
                <div class="bread-text mb-1">Services We Provide</div>
                <div class="bread-caption mt-5">
                  <ul>
                    <li  v-for="service in servicesProvided" :key="service.name">
                        <Icon name="uil:arrow-right" />   {{ service.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </v-card-item>
            <!-- <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions> -->
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col md="4">
      <v-card color="white" class="right-bread pa-5" elevation="10" variant="">
        <v-card-item>
          <div>
            <div class="bread-text-contact mb-1">Need more help?</div>
            <div class="bread-caption-contact">
                Dictum erat nec conubia luctus orci etiam penatibus sed feugiat adipiscing egestas
            </div>
            <div class="mt-4">
              <v-row>
                <v-col cols="3"><Icon class="bread-icon-contact" name="uil:phone" /></v-col>
                <v-col cols="9">
                    <h2>Connect Us</h2>
                    <h3>8714443989</h3>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card-item>

        <!-- <v-card-actions>
          <v-btn variant="outlined"> Button </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      servicesProvided: [
        { name: "Speech Therapy" },
        { name: "Occupational Therapy" },
      ],
    };
  },
};
</script>
<style>
.left-bread {
  background-color: white;
}
.right-bread {
  background-color: var(--secondary-text-color);
}
.bread-text {
  font-size: clamp(1.5em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--primary-text-color);
}
.bread-text-contact {
  font-size: clamp(1.5em, 4vw, 2em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  /* color: var(--primary-text-color); */
}
.bread-caption {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  color: var(--secondary-text-color);
}
.bread-caption-contact {
  font-size: clamp(0.5em, 4vw, 1em);
  line-height: 1.333;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 0;
  /* color: var(--secondary-text-color); */
}
.bread-caption li{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
}
.bread-icon-contact{
    font-size: 60px;
    color: var(--primary-text-color);
}
</style>
