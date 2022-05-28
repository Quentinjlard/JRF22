import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { googleMapsApiKey } from 'variables.env'

export default boot(({ app }) => {
    app.use(VueGoogleMaps, {
        load: {
            key: googleMapsApiKey
        }
    })
})
