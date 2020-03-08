<template>
  <nuxt-link :to="link">
    <div id="curve" class="card">
      <div class="footer">
        <svg id="curve">
          <path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
          <rect id="dummyRect" x="0" y="0" height="200" width="391" fill="transparent" />
          <!-- slide up-->
          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,50 Q80,100 400,50 V150 H0 V50"
            fill="freeze"
            begin="dummyRect.mouseover"
            end="dummyRect.mouseout"
            dur="0.1s"
            id="bounce1"
          />
          <!-- slide up and curve in -->
          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,50 Q80,0 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce1.end"
            end="dummyRect.mouseout"
            dur="0.15s"
            id="bounce2"
          />
          <!-- slide down and curve in -->
          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,50 Q80,80 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce2.end"
            end="dummyRect.mouseout"
            dur="0.15s"
            id="bounce3"
          />
          <!-- slide down and curve out -->
          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,50 Q80,45 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce3.end"
            end="dummyRect.mouseout"
            dur="0.1s"
            id="bounce4"
          />
          <!-- curve in -->
          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,50 Q80,50 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce4.end"
            end="dummyRect.mouseout"
            dur="0.05s"
            id="bounce5"
          />

          <animate
            xlink:href="#p"
            attributeName="d"
            to="M0,200 Q80,100 400,200 V150 H0 V50"
            fill="freeze"
            begin="dummyRect.mouseout"
            dur="0.15s"
            id="bounceOut"
          />
        </svg>
        <div class="info">
          <div class="name">{{name}}</div>
          <div class="job">{{description}}</div>
        </div>
      </div>
      <div class="card-blur"></div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["name", "link", "description"]
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  height: 200px;
  background-image: url(https://en.gravatar.com/userimage/41376643/06aacd04e8702b61ce87ef3c1b36da3a.jpg?size=720);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.card-blur {
  position: absolute;
  height: 100%;
  width: calc(100% + 1px);
  background-color: black;
  opacity: 0;
  transition: opacity 0.15s ease-in;
}

.card:hover .card-blur {
  opacity: 0.6;
}

.footer {
  z-index: 1;
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0;
}

svg#curve {
  position: absolute;
  fill: white;
  left: 0;
  bottom: 0;
  width: 400px;
  height: 200px;
}

.info {
  color: var(--main-color4);
  font-family: Inconsolata;
  padding-left: 20px;
  transform: translateY(250px);

  transition: transform 1s cubic-bezier(0.31, 1.21, 0.64, 1.02);
}

.card:hover .info {
  transform: translateY(0px);
}

.name {
  font-weight: bolder;
  padding-top: 5px;
}

.job {
  margin-top: 10px;
}
</style>