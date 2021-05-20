import Vue from 'vue'

const preventReClick = function(){
    let openDalay = false
    //不传参点击事件
    Vue.directive('click',function(el,binding){//不带参数
        el.onclick=function(e){
            if(openDalay) return;
            openDalay = !openDalay
            setTimeout(()=>{
                openDalay = !openDalay
            },1000)
            binding.value()
        }
    })
    Vue.directive('DataClick',function(el,binding){ //带参数
        el.onclick=function(e){
            if(openDalay) return;
            openDalay = !openDalay
            setTimeout(()=>{
                openDalay = !openDalay
            },1000)
            binding.value.func(...binding.value.data)
        }
    } );
}

export default preventReClick