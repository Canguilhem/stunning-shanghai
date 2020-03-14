import Vue from 'vue';
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry)=>{
            if(!entry.isIntersecting){
                entry.target.classList.remove('enter')
            }
            if(entry.isIntersecting) {
                entry.target.classList.add('enter')
                // animatedScrollObserver.unobserve(entry.target)
            }
        })
    },
    {threshold: [0.1,0.95]}
)

Vue.directive('anim', {
    inserted: function(el){
        el.classList.add('before-enter')
        animatedScrollObserver.observe(el)
    }
})