var globalThis = this,
  self = this;
module.exports = require("../_commons/0.js")([{
  ids: [8],
  modules: {
    2: function (e, s, t) {
      e.exports = t(50)
    },
    50: function (e, s) {
      Component({
        options: {
          addGlobalClass: !0,
          multipleSlots: !0
        },
        properties: {
          title: {
            type: String,
            value: ""
          },
          subtitle: {
            type: String,
            value: ""
          }
        },
        relations: {
          "../cells/cells": {
            type: "descendant",
            linked: function (e) {
              this.data.firstItem || (this.data.firstItem = e), e.setOuterClass("weui-cells__group weui-cells__group_form weui-cells_form"), e !== this.data.firstItem && e.setOuterClass("weui-cells__group_wxss weui-cells__group weui-cells__group_form weui-cells_form")
            }
          }
        },
        data: {
          firstItem: null
        }
      })
    }
  },
  entries: [
    [2, 0]
  ]
}]);