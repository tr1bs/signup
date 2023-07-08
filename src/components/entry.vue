<template>
<div id="output" class="">

	<div class="center tc" data-letter-crap='logo.png' style='width: 100%' data-lettercrap-aspect-ratio='1' data-lettercrap-words='collective faith'></div>

	<form class="ph4 black-80 helvetica">
	  <div class="measure center">
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
	margin-left: -2.30em;
	font-weight: bolder;
}
</style>