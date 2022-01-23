// pages/lesson1/lesson1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //下载excel
  openExcel(){
    wx.cloud.downloadFile({
      fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/计算机技术十大演变趋势及计算思维.pdf',
      success: res => {

        wx.openDocument({
          filePath: res.tempFilePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: err => {
        // handle error
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '导论'
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
    wx.stopPullDownRefresh()
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