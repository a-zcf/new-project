let baseUrl = '';
if(process.env.ENV_CONFIG == 'development'){
    baseUrl = "http://thyrtest.gxtianhai.com.cn/v1"
}else if(process.env.ENV_CONFIG == 'test'){
    baseUrl = "http://thyrtest.gxtianhai.com.cn/v1"
}else if(process.env.ENV_CONFIG == 'prod'){
    baseUrl = "http://www.xxx.com"
}
export{
    baseUrl
}