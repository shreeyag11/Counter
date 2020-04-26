<template>
    <div>
        <h1>{{counter}}</h1>
        <button @click="counter++">Click me</button>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                counter: 0
            }
        }
    }
</script>