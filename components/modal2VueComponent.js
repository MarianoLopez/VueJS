Vue.component('modal',{
	//` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
	template:`
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot name="header"></slot>
		      </p>
		      <button class="delete" @click="$emit('close')" aria-label="close"></button>
		    </header>
		    <section class="modal-card-body">
		      <slot>Default content here</slot>
		    </section>
		    <footer class="modal-card-foot">
		      <slot name="footer">
		      	<button class="button is-success" @click="$emit('close')">Ok</button>
		      </slot>
		    </footer>
		  </div>
		</div>
	`
});