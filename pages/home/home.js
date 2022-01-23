// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据的数组
    swiperList:[],
    myList:[{"id":1,"image":"cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/anime_8.jpg","link":""},
    {"id":2,"image":"cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/anime_6.png","link":"/pages/list/list?cat=10"}],
    //存放九宫格数据的列表
    gridList:[],
    myList3:[{"id":1,"name":"导论","icon":"/images/21.png"},{"id":2,"name":"数据结构","icon":"/images/22.png"},{"id":3,"name":"算法","icon":"/images/23.png"},{"id":4,"name":"计组","icon":"/images/24.png"},{"id":5,"name":"计网","icon":"/images/25.png"},{"id":6,"name":"OS","icon":"/images/26.png"},{"id":7,"name":"数据库","icon":"/images/27.png"},{"id":8,"name":"Web","icon":"/images/28.png"},{"id":9,"name":"其他","icon":"/images/29.png"}]
  },
  //编程式导航到relationship页面
  gotoRelationship(){
    wx.navigateTo({
      url: '/pages/relationship/relationship'
    })
  },
  //编程式导航到understanding页面
  gotoUnderstanding(){
    wx.navigateTo({
      url: '/pages/understanding/understanding'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getSwiperList()
    // this.getGridList()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '计科导论'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})