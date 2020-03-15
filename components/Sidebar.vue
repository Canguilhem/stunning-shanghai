<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control" @click="showNav">
      <i class="fas fa-angle-double-right"></i>
    </div>
    <div class="navigation-icons">
      <nuxt-link to="/">
        <i class="fas fa-home"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Home</p>
      </nuxt-link>
      <nuxt-link to="/shanghai">
        <i class="icon-shanghai"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Stunning Shanghai</p>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <i class="icon-youtube"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Interesting Youtube</p>
      </nuxt-link>
      <nuxt-link to="/crypto">
        <i class="icon-bitcoin"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Crypto Tracker</p>
      </nuxt-link>
      <nuxt-link to="/glossary">
        <i class="icon-explained"></i>
        <p v-show="showLink" class="animated faster" :class="{zoomIn: showLink }">Layman's Blockchain</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      showLink: false
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 50);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  padding: 10px;
  min-height: auto;
  border-width: 0 1px 0 0;
  z-index: 999;
  background-color: rgba(33, 37, 41, 0.8);
  opacity: 0.8;
  transition: all 0.5s ease-in-out;
  .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-bottom: 10px;
    padding-top: 10px;
    i {
      font-size: 2rem;
      color: #ffc107;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
  }

  &.show {
    width: 167px;
    .control > i {
      color: #fff;
      transform: rotatez(-180deg);
    }
  }

  .navigation-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50px;
    float: left;
    a {
      height: 50px;
      margin: 13px 0;
      position: relative;
      &:first-child {
        p {
          top: 42px;
          right: -57px;
        }
      }
      &:nth-child(2) {
        p {
          top: 16px;
        }
      }
      &:nth-child(3) {
        margin-top:20px;
        margin-bottom: 2px;
        p {
          top: 4px;
        }
      }
      &:nth-child(4) {
        p {
          top: 12px;
        }
      }
      &:last-child {
        margin-bottom: 20px;
      }
      i,
      p {
        color: #ffc107;
      }
      p {
        position: absolute;
        top: 12px;
        right: -53px;
        width: 50px;
        font-weight: 600;
      }
      &:hover {
        i,
        p {
          transition: color 0.5s ease-in-out;
          color: #fff;
        }
      }
    }
    i {
      font-size: 3rem;
    }
   .fa-home{
     margin-top: 16px;
   }
  }
}
</style>