import{_ as r,o as n,c as i,d as t,t as c,F as a}from"./index-4c9ff146.js";const{VITE_APP_URL:d,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/vueWeek6Hw/",MODE:"production",DEV:!1,PROD:!0},u={data(){return{product:{}}},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`${d}/api/${l}/product/${e}`).then(o=>{this.product=o.data.product}).catch(o=>{console.log(o),alert(o.data.message)})}},mounted(){this.getProduct()}},_=t("h3",{class:"mb-4"},"產品詳情",-1),p={class:"container"},h={class:"row"},m={class:"col-6"},P=["src"],g={class:"col-6"},f={class:"badge bg-primary rounded-pill"};function E(e,o,v,A,s,V){return n(),i(a,null,[_,t("div",p,[t("div",h,[t("div",m,[t("h3",null,c(s.product.title),1),t("img",{class:"img-fluid",src:s.product.imageUrl,alt:""},null,8,P)]),t("div",g,[t("span",f,c(s.product.category),1),t("p",null,"商品描述："+c(s.product.description),1),t("p",null,"商品內容："+c(s.product.content),1)])])])],64)}const x=r(u,[["render",E]]);export{x as default};
