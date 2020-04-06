<template>
  <div class="formation">
    <h4>{{form.degree}}</h4>
    <h5>{{form.institution}}</h5> 
    <p>[{{interval}}]</p>
    <div class="date">{{trunc(form.from)}} - {{trunc(form.to)}}</div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Formation",
  props: ["form", "index"],
  data() {
    return {
      duration: 0
    };
  },
  computed: {
    interval() {
      let a = moment(this.form.to);
      let b = moment(this.form.from);
      let dif = a.diff(b, "years") + 1;
      return dif > 1 ? `${dif} years` : `${dif} year`;
    }
  },
  methods: {
    trunc(value) {
      return value.substring(value.length - 4, value.length);
    }
  }
};
</script>
<style scoped lang="scss">
.formation {
  margin-top: 30px;
  background-color: rgba(29, 37, 44, 0.4);

  color: var(--main-color2);
  padding: 15px;
  border-bottom-right-radius: 44px;
  box-shadow: 0 0 8px var(--main-color4);
  position: relative;
  h4{
    color: var(--main-color5);
  }
  h5{
    color: var(--main-color4);
    margin-right: 15px;
  }
  h5,p{
    display: inline;
  }
  .date {
    display: inline-block;
    transform: rotate(-90deg);
    position: absolute;
    left: -65px;
    top: 37px;
    transition: transform .5s;
  }
  &:hover{
    box-shadow: 0 0 13px var(--danger);
    .date {
      transform:  rotate(-90deg) scale(1.5);
    }
  }
}
@media screen and (max-width: 500px) {
  .formation {
    h4 {
      font-size: 1.1rem;
    }
    h5 {
      font-size: .9rem;
    }
    .date {
      transform: rotate(0deg);
      left: 30%;
      top: -32px;
    }
  }
}
</style>