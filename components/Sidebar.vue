<template>
  <div class="container" :class="{'show': showSidebar, 'show--mobile': showMobile }">
    <div class="mobile--grip" @click="showNavMobile">
      <div class="animated infinite wobble slower"></div>
      <div class="animated infinite wobble slow delay-2s"></div>
      <div class="animated infinite wobble delay-3s"></div>
    </div>
    <div class="control" @click="showNav">
      <i class="fas fa-angle-double-right"></i>
    </div>
    <div class="navigation-icons">
      <nuxt-link to="/">
        <i class="fas fa-home" v-b-tooltip.hover.right.v-warning title="Home"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Home</p>
      </nuxt-link>
      <nuxt-link to="/shanghai">
        <i class="icon-shanghai" v-b-tooltip.hover.right.v-danger title="Stunning Shanghai"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Stunning Shanghai</p>
      </nuxt-link>
      <nuxt-link to="/youtube">
        <i class="icon-youtube" v-b-tooltip.hover.right.v-success title="Interesting Youtube"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Interesting Youtube</p>
      </nuxt-link>
      <nuxt-link to="/crypto">
        <i class="icon-bitcoin" v-b-tooltip.hover.right.v-info title="Crypto Tracker"></i>
        <p v-show="showLink" class="animated faster" :class="{ zoomIn: showLink }">Crypto Tracker</p>
      </nuxt-link>
      <nuxt-link to="/glossary">
        <i class="icon-explained" v-b-tooltip.hover.right.v-primary title="Layman's Blockchain"></i>
        <p v-show="showLink" class="animated faster" :class="{zoomIn: showLink }">Layman's Blockchain</p>
      </nuxt-link>
      <nuxt-link to="/glossary">
        <i class="icon-explained" v-b-tooltip.hover.right.v-primary title="Layman's Blockchain"></i>
        <p v-show="showLink" class="animated faster" :class="{zoomIn: showLink }">Layman's Blockchain</p>
      </nuxt-link>
    </div>
  </div>
  <!-- Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      showLink: false,
      showMobile: false
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
    },
    showNavMobile(){
      console.log("clicked:", this.showMobile)
      this.showMobile = !this.showMobile
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
@media screen and (max-width: 450px) {
  .container{
    width: 30px;
    position: fixed;
    top: 150px;
    .control,.navigation-icons{
      display: none;
    }
    .mobile--grip {
      display: grid;
      grid-template-columns: auto;
      justify-content: center;
      row-gap: 5px;
      div{
        height: 10px;
        width: 10px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>