<template>
    <div>
        <h1>{{counter}}</h1>
        <button @click="counter++">Click me</button>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                counter: 0
            }
        },
        props: ["name"]
    }
</script>