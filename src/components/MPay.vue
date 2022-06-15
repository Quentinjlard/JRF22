<template>
    <div class="q-pa-none">
        <div class="q-py-lg q-px-sm text-h5 text-primary text-center m-title">
            Réservez votre place en ligne !
        </div>
        <div class="q-pa-md">
            <div class="flex" style="justify-content: center">
                <q-markup-table :style="Screen.width > 700 ? 'width: 65vw' : 'width: calc(100vw - 20px)'">
                    <thead>
                        <tr class="bg-primary">
                            <th colspan="3">
                                <div class="text-h5 text-white text-left q-pl-lg">Nos Tarifs</div>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">Formules</th>
                            <th class="text-right">Tarif plein (euros)</th>
                            <th class="text-right">Tarif étudiant (euros)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Pass 2 Jours</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass 1 Jour sans gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass 1 Jour avec gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass Céremonie sans gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass Céremonie avec gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                    </tbody>
                </q-markup-table>
            </div>
        </div>
        <div class="q-pa-md flex flex-center column">
            <q-btn color="primary" label="Je paye par carte bleue !" class="q-my-sm" rounded />
            <q-btn color="primary" label="Je préfère un bon de commande" class="q-my-sm" rounded />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Screen } from 'quasar'
</script>
