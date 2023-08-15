
const common = {
    
    comma: function(num:string){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default common;