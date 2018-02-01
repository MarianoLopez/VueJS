Vue.component('message',{
	props:['title','body'],//properties that component will recive
	data(){
		return {
			isVisible:true
		}
	},
	//` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
	template:`
		<article class="message" v-show="isVisible">
	      <div class="message-header">
	        <p>{{title}}</p>
	        <button class="delete"  @click="isVisible = false" aria-label="delete"></button>
	      </div>
	      <div class="message-body">
	        {{body}}
	      </div>
	    </article>
	`
});