// 包含N个接口请求函数的模块 函数的返回值：promiss对象
import ajax from './ajax'
const BASE_URL = './api'
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')

// 根据经纬度获取商铺列表  la纬度 lo经度
export const reqShops = (latitude,longitude) => ajax(BASE_URL+'/shops',{latitude,longitude})

// 根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})

// 获取一次性验证码  在此项目中发的是一般请求，src发送，不需要ajax发送

// 用户名密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')

// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})

// 手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')

// 根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')

// 用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

 