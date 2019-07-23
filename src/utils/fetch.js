import fetch from 'isomorphic-fetch'

// var baseUrl = "http://10.40.16.20:2080";
var baseUrl = "http://127.0.0.1:3001";



function  get(url,params){
    url = baseUrl + url;
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
    })
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            alert(error)
        })
}

function post(url,params){
    url = baseUrl + url;
    var paramsbody='';
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
            'Content-Type': 'application/x-www-form-urlencoded'
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