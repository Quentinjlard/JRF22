import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'

export default boot(({ app }) => {
    app.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCMxjfQBef_MsTZL12NpfQwaPOUozyzF1E'
        }
    })
})