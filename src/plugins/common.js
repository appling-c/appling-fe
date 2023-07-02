
const common = {
    
    comma: function(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default common;