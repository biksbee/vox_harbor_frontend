(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3993:function(e,t,s){Promise.resolve().then(s.t.bind(s,3054,23)),Promise.resolve().then(s.t.bind(s,4671,23)),Promise.resolve().then(s.bind(s,6010))},153:function(e,t,s){"use strict";var a=s(9222);let r=a.Z.create({baseURL:"https://vox-harbor.com/api"});t.Z=r},6010:function(e,t,s){"use strict";s.r(t),s.d(t,{Providers:function(){return l}});var a=s(7437),r=s(3198),n=s(663),d=s(6349),i=s(6319),c=s(8227),u=s(2257);let o=(0,n.configureStore)({reducer:{search:i.ZP,messages:c.ZP,text:u.ZP}});(0,d.setupListeners)(o.dispatch);let l=e=>{let{children:t}=e;return(0,a.jsx)(r.zt,{store:o,children:t})}},8227:function(e,t,s){"use strict";s.d(t,{CK:function(){return i},S$:function(){return d}});var a=s(663),r=s(153);let n=(0,a.createSlice)({name:"message",initialState:{messages:[{user_id:0,date:"",chat_id:0,message_id:0,channel_id:0,post_id:0,bot_index:0,shard:0}],status:"init"},reducers:{},extraReducers:e=>{e.addCase(d.pending,e=>{e.status="loading"}).addCase(d.fulfilled,(e,t)=>{e.status="success",e.messages=t.payload}).addCase(d.rejected,e=>{e.status="error"})}}),d=(0,a.createAsyncThunk)("/message",async e=>{let{data:t}=await r.Z.get("/comments?user_id=".concat(e.id,"&offset=").concat(e.offset));return t}),i=n.actions;t.ZP=n.reducer},2257:function(e,t,s){"use strict";s.d(t,{Q:function(){return d},tr:function(){return i}});var a=s(663),r=s(153);let n=(0,a.createSlice)({name:"text",initialState:{texts:[{text:"",chat:"",comment:{user_id:0,date:"",chat_id:0,message_id:0,channel_id:0,post_id:0,bot_index:0,shard:0}}],status:"init"},reducers:{},extraReducers:e=>{e.addCase(d.pending,e=>{e.status="loading"}).addCase(d.fulfilled,(e,t)=>{e.status="success",e.texts=t.payload}).addCase(d.rejected,e=>{e.status="error"})}}),d=(0,a.createAsyncThunk)("/getText",async e=>{let{data:t}=await r.Z.post("/messages",e);return t}),i=n.actions;t.ZP=n.reducer},6319:function(e,t,s){"use strict";s.d(t,{uP:function(){return i},yC:function(){return d}});var a=s(663),r=s(153);let n=(0,a.createSlice)({name:"search",initialState:{search:{users:[{user_id:0,usernames:[""],names:[""]}],chats:[{id:0,name:"",join_string:"",shard:0,bot_index:0,added:"",type:""}]},user:{user_id:-1,usernames:[""],names:[""]},chat:{id:-1,name:"",join_string:"",shard:0,bot_index:0,added:"",type:""},status:"init"},reducers:{addResult:(e,t)=>{0===e.search.chats.length?e.user=t.payload:e.chat=t.payload}},extraReducers:e=>{e.addCase(d.pending,e=>{e.status="loading"}).addCase(d.fulfilled,(e,t)=>{e.status="success",e.search=t.payload}).addCase(d.rejected,e=>{e.status="error"})}}),d=(0,a.createAsyncThunk)("/search",async e=>{let{data:t}=await r.Z.get("users_and_chats?query=".concat(e));return t}),i=n.actions;t.ZP=n.reducer},3054:function(){}},function(e){e.O(0,[782,437,971,864,744],function(){return e(e.s=3993)}),_N_E=e.O()}]);