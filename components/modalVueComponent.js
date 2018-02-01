Vue.component('modal',{
	//` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
	template:`
		<div class="modal is-active">
	      <div class="modal-background"></div>
	      <div class="modal-content">
	        <div class="box">
	          <slot></slot>
	        </div>
	      </div>
	      <!--communication between components - emit close event on click-->
	      <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
	    </div>
	`
});