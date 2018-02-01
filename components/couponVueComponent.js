 Vue.component('coupon',{
	<!-- blur = obj loses focus-->
	template:`<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,
	methods:{
		onCouponApplied(){
			Event.fire('applied');
		}
	}
});