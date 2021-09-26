// pages/kj/RandomSum/index.js
var rand, sum;//定义全局变量
function createRand() {
  rand = []; //初始化数组变量
  for (var i = 0; i < 7; i++) {
    var r = (Math.random() * 31).toFixed(0) * 1; 
    rand.push(r); //将产生的随机数添加到数组中
    console.log(rand[i]); //在控制台显示数组元素
  }
};

Page({
  onLoad: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
    })
  },
  newRand: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
    })
  }
})