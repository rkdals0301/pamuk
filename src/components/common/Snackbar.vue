<template>
    <div class="text-center ma-2">
        <v-snackbar
            v-model="isShow"
            :multi-line="true">
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="isShow = false">
                Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Snackbar',
    data() {
        return {
            isShow: false,
            type: '',
            text: '',
        }
    },
    created() {
        this.setSnackbar()
        this.setSubscribe()
    },
    methods: {
        ...mapActions('snackbar', ['showSnackbar']),
        setSnackbar() {
            this.$root.showSnackbar = (type, text) => {
                this.showSnackbar({
                    type,
                    text
                })
            }
        },
        setSubscribe() {
            this.$store.subscribe((mutation, state) => {
                if (mutation.type !== 'snackbar/setSnackbar')
                    return
                    
                this.type = state.snackbar.type
                this.text = state.snackbar.text
                this.isShow = true
            })
        }
    }
}
</script>

<style scoped>

</style>