<template>
    <div class="formation">
        <h4>{{form.degree}} for </h4> 
        <h5>{{form.institution}}</h5>

        {{moment(form.to).from(moment(form.from))}}
    </div>
</template>
<script>
import moment from "moment";
export default {
    name:   "Formation",
    props: ["form", 'index']
}
</script>
<style scoped>

</style>