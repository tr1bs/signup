<template>
<div id="output" class="">
	<div data-lettercrap-text='t r ī b s' data-lettercrap-aspect-ratio='0.3' data-lettercrap-words='trībs find your fashīon pulse'></div>

	<form class="ph4 black-80 helvetica">
	  <div class="measure center">
	    <label for="email" class="f3 db mb2 tracked">emaīl</label>
	    <input v-model="email" id="email" class="input-reset ba b--black-50 pa2 mb2 db w-100" type="text" aria-describedby="name-desc">
	    <small id="name-desc" class="f6 black-60 db mb2"></small>

	    <label for="name" class="f3  db mb2 mt4 tracked">eth, ens, or polygon address</label>
	    <input v-model="address" id="address" class="input-reset ba b--black-50 pa2 mb2 db w-100" type="text" aria-describedby="name-desc">
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
import firebase from "firebase"
import { v4 as uuidv4 } from "uuid"
import { sgMail, db } from '../db'
import axios from 'axios'


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
  	console.log(process.env.VUE_APP_SHH)
  },

  methods:{
  	async submit() {
  		const createdAt = new Date()
  		if (this.emailIsValid(this.email) && this.address) {
  			var query = await db.collection('splash2').where("email", "==", this.email).get()
  			var berry = await db.collection('splash2').where("address", "==", this.address).get()
  			const uuid = uuidv4()
  			this.uuid = uuid
  			if (query.docs.length || berry.docs.length) {
  				this.error = 'you already signed up'
  			} else {
  				db.collection('splash2').add({ 'email': this.email, 'date': createdAt, 'address': this.address, 'uuid': uuid, activated: false })
  				.then(() => {
  					this.sendEmail()
  				})

  				this.$router.push({ path: 'thanks' })
  			}
  			  				
  		}
  		
  	},

  	async sendEmail() {
  		const pkg = {
  			"email": this.email,
  			"address": this.address,
  			"uuid": this.uuid,
  			"shh": process.env.SHH
  		}
  		console.log(pkg)
  		const req = await axios.post('https://api.tri.bs/api/hello', pkg)
  		console.log(req)
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