// 引入mockjs
// const Mock = require('mockjs');
import Mock from 'mockjs'
import {mockHomeData} from './mockhome'



// Mock.mock( url, post/get , 返回的数据)；

Mock.mock(/\/home\/datamock/, 'post', function(options){
  return mockHomeData(options)
})