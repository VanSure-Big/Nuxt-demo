// 全局方法
import Vue from 'vue';
let show = () => { console.log("全局方法"); }
Vue.prototype.$show = show ;

// 混入
Vue.mixin({
  methods:{
    $seo(title,content,payload=[]){
      console.log(title);
      return{
        title,
        meta:[{
          hid:'description',
          name:'keywords',
          content
        }].concat(payload)
      }
    }
  }
})