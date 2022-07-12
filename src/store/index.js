import Vuex from 'vuex'
import snackbar from '@/store/snackbar'

const store = new Vuex.Store({
	namespaced: true,
	modules: {
		snackbar,
	},
})

export default store