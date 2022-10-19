// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkValue:1,
    check:false,
  
    sex:[{
      id:1,
      value:'男'
    },{
      id:2,
      value:'女'
    }
  ]
  },
  radioChange:function(e){
const sex=this.data.sex
for (let i = 0, len = sex.length; i < len; ++i) {
  sex[i].checked = sex[i].id == e.detail.value
}
this.setData({
  sex
})
console.log(this.data.sex);
},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value,
    });
  },
  checkboxChange(e) {
    if (e.detail.value.includes('1')) {
      this.setData({
        check: true,
      });
    } else {
      this.setData({
        check: false,
      });
    }
  },
})