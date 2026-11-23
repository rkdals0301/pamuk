import { createStore } from 'vuex'
import snackbar from '@/store/snackbar'

const store = createStore({
	modules: {
		snackbar,
	},
})

export default store
