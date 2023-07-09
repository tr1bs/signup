<template>
<div id="output" class="">

	<div class="" data-letter-crap='logo.png' style='width: 100%' data-lettercrap-aspect-ratio='1' data-lettercrap-words='collective faith'></div>

	<form class="ph4 black-80 helvetica">
	  <div class="">
	    <label for="email" class="f3 db mb2 tracked">emaīl</label>
	    <input v-model="email" id="email" class="input-reset ba b--black-50 pa2 mb2 db w-100" type="text" aria-describedby="name-desc">
	    <small id="name-desc" class="f6 black-60 db mb2"></small>


	    <div class="center tc">
	    	<a class="f6 b grow-large link dim br1 ba bw1 ph3 pv2 mb2 dib near-black mt4 pointer" @click="submit">submīt</a>
	    	<h3 class="mt4 red" v-if="error">{{ error }}</h3>
	    </div>
	  </div>
	</form>

</div>	
</template>

<script>


//todo: check for email already, validate feed errors
export default {

  name: 'entry',

  data () {
    return {
    	'email': '',
    	'isValid': false,
    	'address': '',
    	'error': null,
    	'uuid': null
    }
  },

  mounted() {

  },

  methods:{
  	async submit() {
		console.log('here')
		const url = "https://api.collective.faith/email";
		const options = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8",
		},
		body: JSON.stringify({
			email: this.email,
		}),
		};
		fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			alert('ut desint vires, tamen est laudanda voluntas')

		})
		.catch(error => {
			console.error('timeout exceeded')
			alert('invalid request. try again')
		})	
  	},

  	async sendEmail() {
  		// make prod/local env vars for that post url
  	},

  	emailIsValid (email) {
  	  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  	}
  }
}
</script>

<style lang="css">
[data-letter-crap] {
	white-space: pre;
	overflow: hidden;
	font-size: 10px;
	line-height: 11px;
	font-family: monospace;
	padding: 0;	
	font-weight: bolder;
}
</style>