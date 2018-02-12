export default {
    props: {
        title: {required: true}
    },
    //` -> tildes invertidas: ECMAScript 2015 (ES6) multiline string
    template:`
		  <div class="row">
            <div class="col s12">
              <div class="card">
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{{title}}</span>
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
              </div>
            </div>
          </div>
	`
}