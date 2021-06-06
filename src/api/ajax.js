// ajax请求模块 
// 返回值：promiss对象（异步返回的数据是：response.data）
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promiss(function (resolve, reject) {
        let promiss
        if (type === 'GET') {
            // 准备url、query参数数据
            let dataStr = ''  //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promiss = axios.get(url)
        }else{
            // 发送post请求
            promiss = axios.post(url)
        }
        promiss.then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        })
    })
}
