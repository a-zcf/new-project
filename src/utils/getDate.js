export default {
    getDateList(){
           let getDay ={
            dateList:[],
            getTime:'',
            thisTime:''
           }
           // 当前时间
           let date = new Date()
           let Y = date.getFullYear() + '-';
           let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+'-';
           let D = date.getDate()<10 ? '0'+date.getDate():date.getDate();
           var H = date.getHours()<10 ? '0'+date.getHours():date.getHours();
            var Mi = date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes();
            var S = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
           getDay.getTime = Y+M+D;
           getDay.thisTime = Y+M+D+' '+H+':'+Mi+':'+S;
           // 获取当前日期的前30天
           function timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)+'-';
            var D = date.getDate()<10 ? '0'+date.getDate():date.getDate();
            return Y+M+D
           };
           let dateTime = Date.parse(new Date())/1000;; //获取当前日期
            for(var i=29;i>=0;i--){
                getDay.dateList[i] = timestampToTime(dateTime );
                dateTime = dateTime -86400;
            }
            return getDay
    }
}