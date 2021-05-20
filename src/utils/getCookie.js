  export function getCookieVal(val) {
    var token = "";
    var cookies = document.cookie;
    cookies = cookies.replace(/\s/, "");
    var cookie_array = cookies.split(";");
    cookie_array.forEach((item) => {
      let arr = item.split("=");
      if (arr[0] == val) {
        token = arr[1];
      }
    });
    return token;
}