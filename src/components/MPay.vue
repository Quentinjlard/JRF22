<template>
    <div class="q-pa-none">
        <div class="q-py-lg q-px-sm text-h5 text-primary text-center m-title">
            Inscrivez-vous en ligne !
        </div>
        <div class="q-pa-md">
            <div class="flex flex-center text-center">
                <p>
                    <b>Votre inscription ne prend pas en compte le transport. L'hébergement est proposé en option uniquement
                        pour les étudiants et alumnis.</b><br />
                    <span class="text-accent">(<span class="text-secondary">*</span>) les professeurs sont conviés aux
                        divers repas, seul le dîner du gala n'est
                        pas compris dans leur tarif</span>
                </p>
            </div>
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
                            <td class="text-left">Pass 2 Jours <span class="text-secondary">*</span></td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass 1 Jour sans gala <span class="text-secondary">*</span></td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass 1 Jour avec gala</td>
                            <td class="text-right">0.00</td>
                            <td class="text-right">0.00</td>
                        </tr>
                        <tr>
                            <td class="text-left">Pass Céremonie sans gala <span class="text-secondary">*</span></td>
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
        <div class="q-pa-md flex flex-center column text-center">
            <div>Pour les étudiants et alumni qui règlent en ligne</div>
            <q-btn color="primary" label="Je paye par carte bleue !" class="q-my-sm" rounded
                href="https://www.helloasso.com/associations/master-en-ingenierie-de-reims-association-general-etudiant/evenements/journee-reseaux-figure-1"
                target="_blank" />
            <br />
            <div>Pour les enseignants et étudiants dont les frais sont pris en charge par leur établissement</div>
            <q-btn color="primary" label="Je préfère un bon de commande" class="q-my-sm" rounded @click="notify" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Screen, Notify } from 'quasar'

function notify(): void {
    Notify.create({
        message: 'Service temporairement indisponible',
        color: 'warning',
        textColor: 'negative'
    })
}
</script>
