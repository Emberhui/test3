// 包含N个接口请求函数的模块 函数的返回值：promiss对象
import ajax from './ajax'

// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 根据经纬度和关键字搜索商铺列表

// 获取一次性验证码

// 用户名密码登录

// 发送短信验证码

// 手机号验证码登录

// 根据会话获取用户信息

// 用户登出
