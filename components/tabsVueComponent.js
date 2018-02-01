Vue.component('tabs',{
	//` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
	template:`
		<div>
			<div class="tabs">
			  <ul>
			  	<!-- bind the class is-active if tab.isActive its true -->
			    <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
			    	<a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
			    </li>
			  </ul>
			</div>
			<div class="tabs-details">
				<slot></slot>
			</div>
		</div>
	`,
	methods:{
		selectTab(selectedTab){
			this.tabs.forEach(tab=>{
				tab.isActive = (tab.name == selectedTab.name);
			});
		}
	},
	data(){
		return{
			tabs:[]
		}
	},
	created(){
		this.tabs = this.$children;
	}

});

Vue.component('tab',{
	//props are inmutables
	props:{
		name:{required:true},
		selected:{default:false}
	},
	//data are mutable
	data(){
		return {
			isActive:false
		}
	},
	computed:{
		href(){
			return '#'+this.name.toLowerCase().replace(/ /g,'-');
		}
	},
	mounted(){
		this.isActive = this.selected;
	},
	//` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
	template:`
		<div v-show="isActive">
			<slot></slot>
		</div>
	`
});