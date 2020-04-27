import Counter from "./Counter.vue";

var app = new Vue({
    el: '#demo',
    data: {
        i: "Vue"
    },
    components: {
        counter: Counter
    }
})