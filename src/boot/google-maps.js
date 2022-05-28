import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { googleMapsApiKey } from 'google-maps-api-key'

export default boot(({ app }) => {
    app.use(VueGoogleMaps, {
        load: {
            key: googleMapsApiKey
        }
    })
})
