let baseUrl = '';
if(process.env.ENV_CONFIG == 'development'){
    baseUrl = "http://thyrtest.gxtianhai.com.cn/newsmokepay"
}else if(process.env.ENV_CONFIG == 'test'){
    baseUrl = "http://thyrtest.gxtianhai.com.cn/newsmokepay"
}else if(process.env.ENV_CONFIG == 'prod'){
    baseUrl = "http://thyrtest.gxtianhai.com.cn/newsmokepay"
}
export{
    baseUrl
}