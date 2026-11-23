import { mdiReceipt } from '@mdi/js'
import { createVuetify } from 'vuetify'
import {
  VApp, VBottomNavigation, VBtn, VCard, VContainer, VDivider, VIcon,
  VList, VListItem, VListItemSubtitle, VListItemTitle, VMain, VSnackbar
} from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

export default createVuetify({
  components: {
    VApp, VBottomNavigation, VBtn, VCard, VContainer, VDivider, VIcon,
    VList, VListItem, VListItemSubtitle, VListItemTitle, VMain, VSnackbar
  },
  icons: { defaultSet: 'mdi', aliases: { ...aliases, receipt: mdiReceipt }, sets: { mdi } }
})
