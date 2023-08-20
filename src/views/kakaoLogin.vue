<template>
    <div>landing... </div>
</template>


<script>
import api from '../plugins/api'
import {mapActions} from 'vuex'

export default {
    methods:{
            ...mapActions('cart', ['updateSpinnerStatus']), 
    },
    async mounted(){
        this.updateSpinnerStatus(true);
        const code = location.search?.split("?code=")[1]
        await api.kakaologin(code).then((path)=> {
           this.updateSpinnerStatus(false);
           this.$router.push(`/${path}`)
        })
    }
}
</script>