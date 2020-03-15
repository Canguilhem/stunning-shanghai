<template>
    <div class="formation">
        <h4>{{form.degree}}</h4> 
        <h5>{{form.institution}} [{{interval}} years]</h5>
    </div>
</template>
<script>
import moment from "moment";
export default {
    name:   "Formation",
    props: ["form", 'index'],
    data() {
        return {
            duration: 0
        }
    },
    computed: {
        interval(){
            var a = moment(this.form.to);
            var b = moment(this.form.from);
            return (a.diff(b, 'years')+1)
        }
    }

}
</script>
<style scoped>
    .formation{
        margin: 1rem;
        background-color: var(--main-color6);
        color: var(--main-color2);
        padding: 15px;
        border-radius: 30px;
    }
</style>