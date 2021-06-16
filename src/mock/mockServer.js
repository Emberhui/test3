//  使用mockjs提供mockServer数据接口  此接口不需要暴露任何数据，只需要保证能执行即可，特殊的模块
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口      要符合接口格式，为一个对象，包含成功返回数和data数据
Mock.mock('/goods',{code:0,data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings',{code:0,data: data.ratings})
// 返回info的接口
Mock.mock('/info',{code:0,data: data.info})

