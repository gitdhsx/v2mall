import Mock from 'mockjs'

// // 获取 mock.Random 对象
const Random = Mock.Random;

export function mockHomeData (options){
  const goods = {
    'ncode': 200,
    'data': {
      'pop': { 'page': 0, 'list': []},
      'new': { 'page': 0, 'list': []},
      'sell': { 'page': 0, 'list': []},
    }
  };
  
  let pops = [];
  let size = [
    '400x534', '750x1000'
  ]
	for (let i = 0; i < 10; i++) {
		let pop = {
			title: Random.csentence(5, 30), //  Random.csentence( min, max )
			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		  price: Random.natural(10, 1000),  //生成自然数
      sc: Random.integer(1,10000),  //收藏
      image: Random.dataImage('400x534', 'Hello'), // Random.size表示将从size数据中任选一个数据
      url: Random.url(), 
      cfav: Random.integer(1, 30000)
		}
    pops.push(pop)
  }
  
  let obj = JSON.parse(options.body)
  let type = obj['type'] 
  goods.data[type].page= obj.page;
  goods.data[type].list = pops
  return goods
}