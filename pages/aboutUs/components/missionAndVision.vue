<template>
  <div class="mb-5 mt-n16">
    <div
      class="speciality-main-div"
      :class="mdAndUp ? 'margin-cont' : 'margin-cont-sm'"
    >
      <div :class="mdAndUp ? 'row-speciality' : 'row-speciality-sm'" dense>
        <div class="speciality-first pa-10">
          <h2
            class=""
            :class="
              mdAndUp ? 'speciality-us-heading ' : 'speciality-us-heading-sm'
            "
          >
            Mission
          </h2>
          <div :class="mdAndUp ? 'pt-16 ' : ''">
            <p class="paragraph-text mt-2 text-white">
              We achieve our quality through a rigorous selection of farms and
              partner supplies, who share our vision of affordable quality, as
              well as our insistence on operating a short supply chain; a
              dedicated and ultra-efficient logistics system and a brand new,
              state-of-the-art storage facility that underscores our commitment
              to fast, fresh delivery. At YEM YEM IMPEX, we deliver a whole
              world of freshness, no matter wherever you are…
            </p>
          </div>
        </div>
        <div class="speciality-first pa-10">
          <h2
            class=""
            :class="
              mdAndUp ? 'speciality-us-heading ' : 'speciality-us-heading-sm'
            "
          >
            Vision
          </h2>
          <div :class="mdAndUp ? 'pt-16 ' : ''">
            <!-- :class="mdAndUp ? 'text-white': 'text-black'" -->
            <p class="paragraph-text mt-2 text-white">
              As our name suggest, at YEM YEM IMPEX, our vision is to supply
              customers with fresh produce of highest quality. We source produce
              from southeastern countries so that everyone gets a taste of home
              and also the exotic flowers they may have never tried.
            </p>
          </div>
        </div>
        <!-- <v-col cols="12" md="6">
          <div
            :class="mdAndUp ? 'speciality-content' : 'speciality-content-sm'"
          >
            <div class="mt-5">
              <h2 class="text-white">Vision</h2>
              <p class="paragraph-text mt-2">
                As our name suggest, at YEM YEM IMPEX, our vision is to supply
                customers with fresh produce of highest quality. We source
                produce from southeastern countries so that everyone gets a
                taste of home and also the exotic flowers they may have never
                tried.
              </p>
            </div>
          </div>
        </v-col> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
  data() {
    return {
      specialities: [
        { id: 1, name: "Always Fresh", img: "/images/common/fresh.png" },
        { id: 2, name: "100% Natural", img: "/images/common/natural.png" },
        { id: 3, name: "Premium Quality", img: "/images/common/premium.png" },
      ],
    };
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
};
</script>

<style scoped>
.row-speciality {
  display: flex;
  gap: 30px;
}
.row-speciality-sm {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.speciality-content-sm {
  margin-top: 10px;
  font-weight: 900;
  /* font-size: 20px; */
}
.speciality-content-sm p {
  margin-top: 20px;
}
.speciality-content {
  /* float: right; */

  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* gap: 30px; */
  /* margin-left: 170px; */
  font-weight: 900;
  font-size: 20px;
  margin-top: 80px;
}
.margin-cont-sm {
  margin-top: 50px;
}
.margin-cont {
  margin-top: 100px;
}
.speciality-first {
  background: var(--secondary-text-color);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.speciality-main-div {
  /* margin-top: 100px; */
  position: relative;
  min-height: 200px;
  /* background-color: rgb(127, 236, 127); */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  /* border-radius: 20px; */
}

.speciality-us-heading {
  /* margin-top: 50px; */
  font-size: 50px;
  position: absolute;
  top: 0;
  background-color: #fff;
  padding: 0px 15px 10px 15px;
  border-radius: 0px 0px 10px 10px;
  color: #3eb041;
}
.speciality-us-heading-sm {
  /* margin-top: 100px; */
  font-size: 40px;
  font-weight: 900;
  /* font-size: clamp(60px, 14vw, 140px); */
  color: white;
}
.speciality-img {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translate(-30%, -40%);
}
.speciality-img-sm {
  position: absolute;
  top: 0;
  left: 30%;
  transform: translate(-0%, -40%);
}
.specaliteis {
  border-radius: 10px;
}
.line {
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  border-radius: 20px;
  background-color: var(--primary-text-color);
  /* background-color: white; */
}
.col-line {
  /* position: absolute; */
  /* top: 0; */
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background-color: white;
  /* transform: translateY(-10 deg); */
}
.speciality-col {
  position: relative;
}
</style>
