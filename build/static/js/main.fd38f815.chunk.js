(this["webpackJsonpstandard-notes-editor-template-cra-typescript"]=this["webpackJsonpstandard-notes-editor-template-cra-typescript"]||[]).push([[0],{40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var i,a,o=n(1),s=n(0),d=n.n(s),r=n(13),l=n.n(r),c=(n(40),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))}),m=n(15),u=n(9),b=n(10),p=n(8),h=n(12),j=n(11),I=n(19),f=n(51),x=n(33),O=n(18),v=n(24),g=n(29),C=n(17),K=n(16),y=n(54),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={},i}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)(x.a,{children:[Object(o.jsx)(O.a,{xs:3,children:Object(o.jsx)(v.a,{variant:"link",style:{margin:"0px"},size:"sm",onClick:function(){return e.props.editItem(e.props.id,e.props.columnID)},children:Object(o.jsx)(I.b,{fill:"#000",size:16})})}),Object(o.jsx)(O.a,{xs:3,children:Object(o.jsx)(v.a,{variant:"link",style:{margin:"0px"},size:"sm",onClick:function(){return e.props.deleteItem(e.props.id,e.props.columnID)},children:Object(o.jsx)(I.d,{fill:"#000",size:16})})}),Object(o.jsx)(O.a,{xs:3,children:Object(o.jsx)(v.a,{variant:"link",style:{margin:"0px"},size:"sm",onClick:function(){return e.props.displayInfoBox(e.props.id,e.props.columnID)},children:Object(o.jsx)(I.a,{fill:"#000",size:16})})})]})})}}]),n}(d.a.Component),D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={},i}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)(C.b,{draggableId:this.props.item.id,index:this.props.index,children:function(t,n){return Object(o.jsx)("div",Object(K.a)(Object(K.a)(Object(K.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(K.a)({userSelect:"none",padding:15,margin:"0 0 3px 0",minHeight:"50px",border:"3px solid #000000",borderRadius:"15px",backgroundColor:n.isDragging?"#white":"#C9D1D9",color:"black"},t.draggableProps.style),children:Object(o.jsx)("div",{children:Object(o.jsxs)(x.a,{children:[Object(o.jsx)(O.a,{children:e.props.item.title}),Object(o.jsx)(O.a,{children:Object(o.jsx)(k,{id:e.props.item.id,editItem:e.props.editItem,deleteItem:e.props.deleteItem,displayInfoBox:e.props.displayInfoBox,columnID:e.props.columnID})})]})})}))}},this.props.item.id)}}]),n}(s.Component),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={},i}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsxs)(y.a,{children:[Object(o.jsx)(y.a.Header,{children:this.props.column.name}),Object(o.jsx)(y.a.Body,{children:Object(o.jsx)("div",{style:{margin:8,height:"80vh"},children:Object(o.jsx)(C.c,{droppableId:this.props.column.id,children:function(t,n){return Object(o.jsxs)("div",Object(K.a)(Object(K.a)({},t.droppableProps),{},{ref:t.innerRef,style:{padding:0,width:250,height:"80vh",overflowY:"auto"},children:[e.props.column.items.map((function(t,n){return Object(o.jsx)(D,{item:t,index:n,editItem:e.props.editItem,deleteItem:e.props.deleteItem,displayInfoBox:e.props.displayInfoBox,columnID:e.props.column.id},t.id)})),t.placeholder]}))}},this.props.column.id)})})]},this.props.column.id)}}]),n}(s.Component),B=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={},i.handleOnDragEnd=i.handleOnDragEnd.bind(Object(p.a)(i)),i}return Object(b.a)(n,[{key:"handleOnDragEnd",value:function(e){if(e.destination){var t=e.source,n=e.destination;t.droppableId!==n.droppableId?this.props.moveItemToNewColumn(t.droppableId,n.droppableId,e):this.props.moveItemWithinColumn(t.droppableId,e)}}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%"},children:Object(o.jsxs)(C.a,{onDragEnd:function(t){return e.handleOnDragEnd(t)},children:[Object(o.jsx)(S,{column:this.props.backLogColumn,editItem:this.props.editItem,deleteItem:this.props.deleteItem,displayInfoBox:this.props.displayInfoBox}),Object(o.jsx)(S,{column:this.props.todoColumn,editItem:this.props.editItem,deleteItem:this.props.deleteItem,displayInfoBox:this.props.displayInfoBox}),Object(o.jsx)(S,{column:this.props.inProgressColumn,editItem:this.props.editItem,deleteItem:this.props.deleteItem,displayInfoBox:this.props.displayInfoBox}),Object(o.jsx)(S,{column:this.props.doneColumn,editItem:this.props.editItem,deleteItem:this.props.deleteItem,displayInfoBox:this.props.displayInfoBox})]})})}}]),n}(s.Component),w=n(52),E=n(53),P={index:-1,id:"",title:"",notes:""},N=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;if(Object(u.a)(this,n),(i=t.call(this,e)).props.editMode&&i.props.currentKanbanItem){var a=i.props.currentKanbanItem;i.state={index:a.index,id:a.id,title:a.title,notes:a.notes}}else i.state=P;return i}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)(w.a,{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)(x.a,{children:Object(o.jsx)(O.a,{children:Object(o.jsx)("h3",{className:"text-center",children:"Please Enter Details of the Kanban Item"})})}),Object(o.jsx)(x.a,{children:Object(o.jsx)(O.a,{xs:{span:6,offset:3},children:Object(o.jsxs)(w.a.Group,{controlId:"title",children:[Object(o.jsx)(w.a.Label,{children:"Title"}),Object(o.jsx)(w.a.Control,{type:"text",placeholder:"Title",name:"title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})]})})}),Object(o.jsx)(x.a,{children:Object(o.jsx)(O.a,{xs:{span:6,offset:3},children:Object(o.jsxs)(w.a.Group,{controlId:"notes",children:[Object(o.jsx)(w.a.Label,{children:"Notes"}),Object(o.jsx)(w.a.Control,{type:"text",placeholder:"Notes",name:"notes",as:"textarea",rows:3,value:this.state.notes,onChange:function(t){return e.setState({notes:t.target.value})}})]})})}),Object(o.jsx)("br",{}),Object(o.jsx)(x.a,{children:Object(o.jsxs)(O.a,{xs:{span:2,offset:8},children:[Object(o.jsx)(v.a,{className:"float-right",onClick:this.props.onCancelAddEditKanbanItem,variant:"danger",children:"Cancel"}),Object(o.jsx)(v.a,{variant:"success",onClick:function(){e.props.editMode?e.props.handleSubmit({index:e.state.index,id:e.state.id,title:e.state.title,notes:e.state.notes},e.props.currentKanbanBoard):e.props.handleSubmit({index:-1,id:e.state.id?e.state.id:Object(E.a)(),title:e.state.title,notes:e.state.notes},"backLogColumn")},children:"Save"})]})})]})})}}]),n}(s.Component),T=n(31),L=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(T.a,{show:"true",onHide:this.props.toggleInfoModal,centered:!0,size:"lg",children:Object(o.jsxs)(T.a.Body,{children:[this.props.modalTextBody,Object(o.jsx)("div",{className:"bootstrap-like-modal-footer",children:Object(o.jsx)(v.a,{variant:"secondary",onClick:this.props.toggleInfoModal,children:"Close"})})]})})})}}]),n}(d.a.Component);!function(e){e.snComponent="sn-component",e.textarea="textarea"}(i||(i={})),function(e){e.snComponent="sn-component",e.textarea="sk-input contrast textarea"}(a||(a={}));var M={printUrl:!1,text:"",addKanbanItem:!1,editKanbanItem:!1,editKanbanItemId:void 0,editKanbanItemColumnID:void 0,loaded:!1,showInfo:!1,currentInfoText:"",backLogColumn:{id:"backLogColumn",name:"Backlog",items:[]},todoColumn:{id:"todoColumn",name:"Todo",items:[]},inProgressColumn:{id:"inProgressColumn",name:"In Progress",items:[]},doneColumn:{id:"doneColumn",name:"Done",items:[]}},A=new Map,z=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).editorKit=void 0,i.configureEditorKit=function(){var e=new g.EditorKitDelegate({setEditorRawText:function(e){var t,n="";""!==e?"backlog"in(t=JSON.parse(e))&&"todo"in t&&"inProgress"in t&&"done"in t||(n="Error with parsing columns, please switch to plain editor and clear the text. (This will delete all data in all columns!!), or try reverting to a proper save in history."):t={backlog:{id:"backLogColumn",name:"Backlog",items:[]},todo:{id:"todoColumn",name:"Todo",items:[]},inProgress:{id:"inProgressColumn",name:"In Progress",items:[]},done:{id:"doneColumn",name:"Done",items:[]}},""===n?i.setState({text:e,backLogColumn:t.backlog,todoColumn:t.todo,inProgressColumn:t.inProgress,doneColumn:t.done,loaded:!0}):alert(n)},clearUndoHistory:function(){},getElementsBySelector:function(){return[]},generateCustomPreview:function(){return{html:"<div></div>",plain:""}}});i.editorKit=new g.EditorKit({delegate:e,mode:"plaintext",supportsFilesafe:!1})},i.onBlur=function(e){},i.onFocus=function(e){},i.onKeyDown=function(e){A.set(e.key,!0),A.get("Control")&&A.get("s")&&e.preventDefault()},i.onKeyUp=function(e){A.delete(e.key)},i.state=M,i.moveItemToNewColumn=i.moveItemToNewColumn.bind(Object(p.a)(i)),i.moveItemWithinColumn=i.moveItemWithinColumn.bind(Object(p.a)(i)),i.displayInfoBox=i.displayInfoBox.bind(Object(p.a)(i)),i.onCancelAddKanbanItem=i.onCancelAddKanbanItem.bind(Object(p.a)(i)),i.onAddKanbanItem=i.onAddKanbanItem.bind(Object(p.a)(i)),i.editKanbanItem=i.editKanbanItem.bind(Object(p.a)(i)),i.handleSubmitOfKanbanItem=i.handleSubmitOfKanbanItem.bind(Object(p.a)(i)),i.deleteKanbanItem=i.deleteKanbanItem.bind(Object(p.a)(i)),i.getKanbanItem=i.getKanbanItem.bind(Object(p.a)(i)),i.updateIndexes=i.updateIndexes.bind(Object(p.a)(i)),i.toggleInfoModal=i.toggleInfoModal.bind(Object(p.a)(i)),i}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.configureEditorKit()}},{key:"saveNote",value:function(){var e=JSON.stringify({backlog:this.state.backLogColumn,todo:this.state.todoColumn,inProgress:this.state.inProgressColumn,done:this.state.doneColumn});try{this.editorKit.onEditorValueChanged(e)}catch(t){console.log("Error saving note:",t)}}},{key:"moveItemWithinColumn",value:function(e,t){var n=this,i=this.state[e],a=t.draggableId,o=i.items.findIndex((function(e){return e.id===a})),s=t.destination.index,d=i.items.find((function(e){return e.id===a}));o>=0&&void 0!==d&&(i.items.splice(o,1),i.items.splice(s,0,d),this.setState(Object(m.a)({},e,i),(function(){n.updateIndexes(e)})))}},{key:"moveItemToNewColumn",value:function(e,t,n){var i,a=this,o=this.state[e],s=this.state[t],d=n.draggableId,r=n.destination.index,l=o.items.find((function(e){return e.id===d})),c=o.items.findIndex((function(e){return e.id===d}));c>=0&&void 0!==l&&(o.items.splice(c,1),s.items.splice(r,0,l)),this.setState((i={},Object(m.a)(i,e,o),Object(m.a)(i,t,s),i),(function(){a.updateIndexes(e),a.updateIndexes(t)}))}},{key:"onAddKanbanItem",value:function(){this.setState({editKanbanItemId:"",editKanbanItemColumnID:void 0,addKanbanItem:!0,editKanbanItem:!1})}},{key:"onCancelAddKanbanItem",value:function(){this.setState({editKanbanItemId:"",editKanbanItemColumnID:void 0,addKanbanItem:!1,editKanbanItem:!1})}},{key:"editKanbanItem",value:function(e,t){this.setState({addKanbanItem:!1,editKanbanItem:!0,editKanbanItemId:e,editKanbanItemColumnID:t})}},{key:"updateIndexes",value:function(e){var t=this;if(void 0!==e){var n=this.state[e],i=n.items.map((function(e,t){return e.index=t,e}));n.items=i,this.setState(Object(m.a)({},e,n),(function(){t.saveNote()}))}}},{key:"handleSubmitOfKanbanItem",value:function(e,t){var n=this;if(void 0!==t)if(this.state.editKanbanItem){var i=this.state[t],a=i.items.findIndex((function(t){return t.id===e.id}));i.items.splice(a,1,e),this.setState(Object(m.a)({},t,i),(function(){n.saveNote(),n.setState({addKanbanItem:!1,editKanbanItem:!1,editKanbanItemColumnID:void 0,editKanbanItemId:""})}))}else{var o=this.state.backLogColumn;o.items.push(e),this.setState({backLogColumn:o,addKanbanItem:!1,editKanbanItem:!1,editKanbanItemColumnID:void 0,editKanbanItemId:""},(function(){n.updateIndexes(t)}))}else alert("Error saving changes! Column not defined!")}},{key:"deleteKanbanItem",value:function(e,t){var n=this,i=this.state[t],a=i.items.findIndex((function(t){return t.id===e}));a>=0&&void 0!==i?(i.items.splice(a,1),this.setState(Object(m.a)({},t,i),(function(){n.saveNote()}))):alert("Error deleting item!")}},{key:"displayInfoBox",value:function(e,t){var n,i=this,a=null===(n=this.state[t].items.find((function(t){return t.id===e})))||void 0===n?void 0:n.notes;void 0!==a?this.setState({currentInfoText:a},(function(){i.toggleInfoModal()})):alert("Error: Could not find item to display notes!")}},{key:"toggleInfoModal",value:function(){this.setState({showInfo:!this.state.showInfo})}},{key:"getKanbanItem",value:function(){var e=this;if(this.state.editKanbanItemColumnID)return this.state[this.state.editKanbanItemColumnID].items.find((function(t){return t.id===e.state.editKanbanItemId}));alert("Error retrieving item! Edit will be canceled!"),this.setState({editKanbanItemId:"",editKanbanItemColumnID:void 0,addKanbanItem:!1,editKanbanItem:!1})}},{key:"render",value:function(){return Object(o.jsx)("div",{className:i.snComponent+(this.state.printUrl?" print-url":""),id:i.snComponent,tabIndex:0,children:Object(o.jsx)(f.a,{fluid:!0,children:Object(o.jsxs)("div",{className:"sn-component",children:[Object(o.jsx)("div",{id:"header",children:Object(o.jsx)(x.a,{children:Object(o.jsx)(O.a,{children:Object(o.jsx)(v.a,{onClick:this.onAddKanbanItem,variant:"dark",children:Object(o.jsx)(I.c,{size:16})})})})}),this.state.showInfo?Object(o.jsx)(L,{modalTextBody:this.state.currentInfoText,toggleInfoModal:this.toggleInfoModal}):Object(o.jsx)("div",{}),this.state.loaded?this.state.addKanbanItem?Object(o.jsx)(N,{onCancelAddEditKanbanItem:this.onCancelAddKanbanItem,handleSubmit:this.handleSubmitOfKanbanItem,editMode:!1,currentKanbanBoard:this.state.editKanbanItemColumnID}):this.state.editKanbanItem?Object(o.jsx)(N,{onCancelAddEditKanbanItem:this.onCancelAddKanbanItem,handleSubmit:this.handleSubmitOfKanbanItem,currentKanbanItem:this.getKanbanItem(),currentKanbanBoard:this.state.editKanbanItemColumnID,editMode:!0}):Object(o.jsx)("div",{children:Object(o.jsx)(x.a,{children:Object(o.jsx)(O.a,{children:Object(o.jsx)(B,{backLogColumn:this.state.backLogColumn,todoColumn:this.state.todoColumn,inProgressColumn:this.state.inProgressColumn,doneColumn:this.state.doneColumn,moveItemToNewColumn:this.moveItemToNewColumn,moveItemWithinColumn:this.moveItemWithinColumn,editItem:this.editKanbanItem,deleteItem:this.deleteKanbanItem,displayInfoBox:this.displayInfoBox})})})}):Object(o.jsx)("div",{children:"Loading..."})]})})})}}]),n}(d.a.Component);n(47);l.a.render(Object(o.jsx)(d.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root")),c()}},[[48,1,2]]]);
//# sourceMappingURL=main.fd38f815.chunk.js.map