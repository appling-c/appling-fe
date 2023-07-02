<template>
    <div>landing... </div>
</template>


<script>
import api from '../plugins/api'

export default {
    async mounted(){
        const code = location.search?.split("?code=")[1]
        await api.kakaologin(code).then((path)=> {
           this.$router.push(`/${path}`)
        })
    }
}
</script>