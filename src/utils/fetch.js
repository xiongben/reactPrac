import fetch from 'isomorphic-fetch'

// var baseUrl = "http://10.40.16.20:2080";
var baseUrl = "http://localhost:3001";



function  get(url,params){
    url = baseUrl + url;
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoxMjMsImlhdCI6MTU2NjU1MTMwNCwiZXhwIjoxNTY2NTU0OTA0fQ.0Z3XKPvboHePAyCR49uNFRrfg_ZnAXUteNioaOWcDlM';
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    //fetch请求
    return fetch(url,{
        method: 'GET',
        headers:{
          'Authorization': `Bearer ${yourToken}`,
          "Content-Type" : "application/json;charset=utf-8",
        },
        // mode: 'cors',
    })
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            alert(error)
        })
}
//下一步需要解决token刷新的问题
function post(url,params){
    url = baseUrl + url;
    var paramsbody='';
    const yourToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoxMjMsImlhdCI6MTU2NjU1MTMwNCwiZXhwIjoxNTY2NTU0OTA0fQ.0Z3XKPvboHePAyCR49uNFRrfg_ZnAXUteNioaOWcDlM';
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (paramsbody.search(/\?/) === -1) {
            paramsbody += '' + paramsArray.join('&')
        } else {
            paramsbody += '&' + paramsArray.join('&')
        }
    }
    console.log(paramsbody)
    return fetch(url,{
        method: 'POST',
        body: paramsbody,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${yourToken}`,
        },
    })
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            alert(error)
        })
}

var Api={
    get:get,
    post:post
}

export default Api;