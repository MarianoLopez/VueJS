import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';
import Card from './Components/Card';
window.axios = axios; //global reference
Vue.prototype.$http = axios;//replace vue resource with axios
new Vue({
    el:'#root',
    components:{Card},
    data:{
        form:new Form({
            name:'',
            description:''
        }),
        skills:[]
    },
    methods:{
        onSubmit() {
            this.form.submit('/skills')
                .then(res => {
                    this.form.clean();
                    this.getSkills();
                })
                .catch(err=>{
                    console.log(err);
                });

        },
        getSkills(){
            this.$http.get('/skills')
                .then(resp=>this.skills = resp.data)
                .catch(err=>{
                    if(err.response) {
                        console.log(err.response.status)
                        //handle error here..
                    }else{
                        this.skills=[{name:'fake data',description:'run the server'}];
                    }
                });
        }
    },
    mounted(){
        this.getSkills();
    }
});