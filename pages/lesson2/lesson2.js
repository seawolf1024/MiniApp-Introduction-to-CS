// pages/lesson2/lesson2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
//下载excel
  openExcel(){
    wx.cloud.downloadFile({
      fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/2.ppt',
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
  //没搞懂bindtap怎么传参,先这样麻烦地写了
  //下载excel
  openExcel2(){
    wx.cloud.downloadFile({
      fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/3.ppt',
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
//下载excel
openExcel3(){
  wx.cloud.downloadFile({
    fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/6.ppt',
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
  //下载excel
  openExcel4(){
    wx.cloud.downloadFile({
      fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/7.ppt',
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

    //下载excel
    openExcel5(){
      wx.cloud.downloadFile({
        fileID: 'cloud://redcocoon-9gcuvsrfa0c0640d.7265-redcocoon-9gcuvsrfa0c0640d-1309173723/数据结构实验.zip',
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
      title: '数据结构'
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