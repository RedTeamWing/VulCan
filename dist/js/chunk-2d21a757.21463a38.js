(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a757"],{bc33:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-table",{attrs:{columns:t.columns,dataSource:t.data},scopedSlots:t._u([{key:"Pid",fn:function(e,s,o){return a("span",{},[a("a-tag",{attrs:{color:"red"}},[t._v(t._s(o+1))])],1)}},{key:"project",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#87d068"}},[t._v("\n      "+t._s(e)+"\n      ")])],1)}},{key:"domain",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#2db7f5"}},[t._v(t._s(e))])],1)}},{key:"subdomaincount",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#f50"}},[t._v(t._s(e))])],1)}},{key:"freq",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#f50"}},[t._v(t._s(e))])],1)}},{key:"portcount",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"green"}},[t._v(t._s(e))])],1)}},{key:"date",fn:function(e){return a("span",{},[a("a-tag",{attrs:{color:"#108ee9"}},[t._v(t._s(e))])],1)}},{key:"flag1",fn:function(t){return a("span",{},[a("div",100===t?[a("a-progress",{attrs:{strokeColor:{from:"#108ee9",to:"#87d068"},percent:100}})]:[a("a-progress",{attrs:{strokeColor:{from:"#108ee9",to:"#87d068"},percent:t,status:"active"}})],1)])}},{key:"flag2",fn:function(e){return a("span",{},[a("div",100==e?[a("a-tag",{attrs:{color:"#2db7f5"}},[t._v("已完成")])]:[a("a-tag",{attrs:{color:"#2db7f5"}},[t._v("未完成")])],1)])}},{key:"action",fn:function(e){return a("span",{},[a("a-button-group",[a("a-button",{attrs:{type:"primary",icon:"scan"},on:{click:function(a){return t.showScanModal(e)}}},[t._v("主动扫描")]),a("a-button",{attrs:{type:"primary",icon:"cloud-download"},on:{click:function(a){return t.exports(e)}}},[t._v("导出资产")]),a("a-button",{attrs:{type:"primary",icon:"delete"},on:{click:function(a){return t.deletelog(e)}}},[t._v("Delete")]),a("a-modal",{attrs:{title:"主动扫描",visible:t.visible2,confirmLoading:t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form",{attrs:{layout:t.formLayout,form:t.form},on:{submit:function(t){}}},[a("a-form-item",{attrs:{label:"扫描频率","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["cycle",{rules:[{required:!0,message:"请填写此项"}]}],expression:"['cycle', { rules: [{ required: true, message: '请填写此项' }] }]"}],staticStyle:{width:"120px"},on:{change:t.handleChange}},[a("a-select-option",{attrs:{value:"0"}},[t._v("一次")]),a("a-select-option",{attrs:{value:"1"}},[t._v("每天")]),a("a-select-option",{attrs:{value:"3"}},[t._v("每三天")]),a("a-select-option",{attrs:{value:"7"}},[t._v("每周")])],1)],1),a("a-form-item",{attrs:{label:"选择POC","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[a("a-transfer",{directives:[{name:"decorator",rawName:"v-decorator",value:["poc",{rules:[{required:!0,message:"请填写此项"}]}],expression:"['poc', { rules: [{ required: true, message: '请填写此项' }] }]"}],attrs:{dataSource:t.mockData,showSearch:"",filterOption:t.filterOption,targetKeys:t.targetKeys,render:function(t){return t.title}},on:{change:t.handleChange3,search:t.handleSearch}})],1)],1)],1)],1)],1)}}])},[a("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[a("a-icon",{attrs:{type:"aliyun"}}),t._v(" PID")],1)])},o=[],n=(a("7f7f"),[{dataIndex:"name",key:"name",slots:{title:"customTitle"},scopedSlots:{customRender:"Pid"}},{title:"任务名称",dataIndex:"project",scopedSlots:{customRender:"project"}},{title:"Domain",dataIndex:"domain",scopedSlots:{customRender:"domain"}},{title:"周期",dataIndex:"freq",scopedSlots:{customRender:"freq"}},{title:"资产数量",dataIndex:"subdomaincount",scopedSlots:{customRender:"subdomaincount"}},{title:"服务数量",dataIndex:"portcount",scopedSlots:{customRender:"portcount"}},{title:"扫描进度",dataIndex:"flag",scopedSlots:{customRender:"flag1"}},{title:"扫描状态",dataIndex:"flag",scopedSlots:{customRender:"flag2"}},{title:"Date",dataIndex:"date",scopedSlots:{customRender:"date"}},{title:"Action",dataIndex:"pid",scopedSlots:{customRender:"action"}}]),r={data:function(){return{formLayout:"horizontal",data:"",columns:n,visible:!1,visible2:!1,confirmLoading:!1,frequency:"",pidss:"",mockData:[],targetKeys:[],poc_data:""}},methods:{handleOk:function(){var t=this;this.confirmLoading=!0;var e=[];e.push(this.pidss),e.push(this.frequency),e.push(this.targetKeys),this.$message.info("定时扫描任务新建成功,请等待扫描结果!"),this.axios.post("/scanner/freqscan",e).then((function(e){t.$message.success(e["status"]["message"])})),setTimeout((function(){t.visible2=!1,t.confirmLoading=!1}),1e3)},showScanModal:function(t){this.pidss=t,this.visible2=!0},deletelog:function(t){var e=this,a=confirm("是否删除?");if(!0===a){var s="/api/common/subtaskstate?id="+t;this.axios.delete(s).then((function(t){e.visible=!1,"success"===t["status"]["status"]?e.$message.success(t["status"]["message"],4):e.$message.error(t["status"]["message"])}))}else this.$message.success("Wing",4)},showModal:function(){this.visible=!0},handleCancel:function(t){this.visible2=!1},handleChange:function(t){this.frequency=t},handleSearch:function(t,e){},getMock:function(){var t=this,e=[],a=[],s="/scanner/pocmanage";this.axios.get(s).then((function(s){t.poc_data=s["result"];for(var o=0;o<t.poc_data.length;o++){var n={key:"".concat(t.poc_data[o]["pid"]),title:"".concat(t.poc_data[o]["name"]),description:"".concat(t.poc_data[o]["name"])};a.push(n)}t.mockData=a,t.targetKeys=e}))},filterOption:function(t,e){return e.description.indexOf(t)>-1},handleChange3:function(t,e,a){this.targetKeys=t},exports:function(t){var e=this,a=confirm("是否导出?");if(!0===a){var s="/api/common/subdomainexport/"+t;this.axios.get(s).then((function(t){try{t["status"]["status"]?e.$message.error(t["status"]["message"]):(e.$message.success("导出成功",4),window.open(s))}catch(a){e.$message.success("导出成功",4),window.open(s)}}))}else this.$message.success("Wing",4)}},mounted:function(){var t=this;this.getMock();var e="/api/common/subtaskstate";this.axios.get(e).then((function(e){var a=e["status"];t.data=e["result"],"success"===a["status"]?t.$message.success("success",4):t.$message.error(a.message)}))},computed:{formItemLayout:function(){var t=this.formLayout;return"horizontal"===t?{labelCol:{span:8},wrapperCol:{span:8}}:{}},buttonItemLayout:function(){var t=this.formLayout;return"horizontal"===t?{wrapperCol:{span:8,offset:8}}:{}}}},c=r,i=a("2877"),u=Object(i["a"])(c,s,o,!1,null,null,null);e["default"]=u.exports}}]);