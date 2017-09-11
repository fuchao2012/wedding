//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        markers: [{
            iconPath: "/resources/marker.png",
            id: 0,
            latitude: 41.309972,
            longitude: 123.788066,
            width: 25,
            height: 30
        }]
    },
    //事件处理函数

    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else {
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    console.log(res.userInfo)
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    bindTapEvent() {
        wx.openLocation({
            latitude: 41.309986,
            longitude: 123.788066,
            name: "万豪国际酒店",
            address: "辽宁省本溪市明山区地工路43号",
        })
    },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '',
      path: 'pages/index/index',
      imageUrl:"https://ws1.sinaimg.cn/large/befd0b79gy1fjfzwtrr25j20zk0u60vj.jpg"
    }
  }
})