<template>
    <div>landing... </div>
</template>


<script>
import {mapActions} from 'vuex'
import UserAthendicateService from "@/services/UserAthendicateService"
export default {
    methods:{
        ...mapActions('cart', ['updateSpinnerStatus']), 
    },
    async mounted(){
        this.updateSpinnerStatus(true);
        const code = location.search?.split("?code=")[1]
        await UserAthendicateService.kakaologin(code).then((path)=> {
           this.updateSpinnerStatus(false);
           this.$router.push(`/${path}`)
        })
    }
}
</script>