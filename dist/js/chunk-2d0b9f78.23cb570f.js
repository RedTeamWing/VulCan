(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9f78"],{"34cd":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-table",{attrs:{columns:t.columns,dataSource:t.data},scopedSlots:t._u([{key:"Pid",fn:function(e,n,a){return s("span",{},[s("a-tag",{attrs:{color:"red"}},[t._v(t._s(a+1))])],1)}},{key:"project",fn:function(e){return s("span",{},[s("a-tag",{attrs:{color:"#87d068"}},[t._v("\n      "+t._s(e)+"\n      ")])],1)}},{key:"cycle",fn:function(e){return s("span",{},[1==e?s("div",[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v("everyday")])],1):3==e?s("div",[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v("three")])],1):7==e?s("div",[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v("Seven")])],1):0==e?s("div",[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v("Once")])],1):t._e()])}},{key:"subdomaincount",fn:function(e){return s("span",{},[s("a-tag",{attrs:{color:"#f50"}},[t._v(t._s(e))])],1)}},{key:"portcount",fn:function(e){return s("span",{},[s("a-tag",{attrs:{color:"green"}},[t._v(t._s(e))])],1)}},{key:"flag1",fn:function(e){return s("span",{},[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v(t._s(e))])],1)}},{key:"flag2",fn:function(e){return s("span",{},[s("a-tag",{attrs:{color:"#2db7f5"}},[t._v(t._s(e))])],1)}},{key:"action",fn:function(e){return s("span",{},[s("a-button-group",[s("a-button",{attrs:{type:"primary",icon:"scan"},on:{click:function(e){return t.activescan(t.taskid)}}},[t._v("重新扫描")]),s("a-button",{attrs:{type:"primary",icon:"delete"},on:{click:function(s){return t.deletelog(e)}}},[t._v("Delete")])],1)],1)}}])},[s("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[s("a-icon",{attrs:{type:"aliyun"}}),t._v(" PID")],1)])},a=[],o=[{dataIndex:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"Pid"}},{title:"任务名称",dataIndex:"task-name",scopedSlots:{customRender:"project"}},{title:"扫描周期",dataIndex:"cycle",scopedSlots:{customRender:"cycle"}},{title:"漏洞数量",dataIndex:"vul_count",scopedSlots:{customRender:"subdomaincount"}},{title:"扫描状态",dataIndex:"status",scopedSlots:{customRender:"portcount"}},{title:"创建时间",dataIndex:"start-date",scopedSlots:{customRender:"flag1"}},{title:"完成时间",dataIndex:"end-date",scopedSlots:{customRender:"flag2"}},{title:"Action",dataIndex:"pid",scopedSlots:{customRender:"action"}}],c={data:function(){return{data:"",columns:o,visible:!1}},methods:{activescan:function(t){alert(t)},deletelog:function(t){var e=this,s=confirm("是否删除?");if(!0===s){var n="/scanner/pocscan?id="+t;this.axios.delete(n).then((function(t){"success"===t["status"]["status"]?e.$message.success(t["status"]["message"],4):e.$message.error(t["status"]["message"])}))}else this.$message.success("Wing",4)},showModal:function(){this.visible=!0}},mounted:function(){var t=this,e="/scanner/pocscan";this.axios.get(e).then((function(e){var s=e["status"];t.data=e["result"],"success"===s["status"]?t.$message.success("success",4):t.$message.error(s.message)}))}},r=c,u=s("2877"),d=Object(u["a"])(r,n,a,!1,null,null,null);e["default"]=d.exports}}]);