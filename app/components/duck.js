


export const types={
    LOAD:'duck-load',
    CREATE:'duck-create',
    UPDATA:'duck-updata',
    REMOVE:'duck-remove'
}
  
const inlitalState={
    ducknum:1,
    isloading:false
}

export default function duck(state=inlitalState,action={}){
   switch(action.type){
       case types.LOAD:
       return Object.assign({}, state, {ducknum:'我在加载'});
       case types.CREATE:
       return Object.assign({}, state, {ducknum:'我在创建'});
       case types.UPDATA:
       return Object.assign({}, state, {ducknum:'我在更新'});
       case types.REMOVE:
       return Object.assign({}, state, {ducknum:'我在删除'});
       default:
		return state
   }
}

export let actions={
    loadduck:function(){
        return {type:types.LOAD}
    },
    creatduck:function(){
        return {type:types.CREATE}
    },
    updataduck:function(){
        return {type:types.UPDATA}
    },
    removeduck:function(){
        return {type:types.REMOVE}
    },

}