<script setup lang="ts">
import { ref } from 'vue';
// import Swal from 'sweetalert2';
import Button from '../shared/Button.vue';

let email = ref('');
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.value = true;
    } else {
        console.log(emailRegex.test(email.value));
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Thank You',
        //     text: `${email.value} subscribed to our newsletter!`
        // });
    }
};
</script>

<template>
    <!-- Newsletter Section Start -->
    <div id="subscribe" class="bg-theme-primary mt-10" fluid>
        <v-row class="mx-auto">
            <v-col cols="12" lg="7" class="mx-auto px-5">
                <section class="py-16">
                    <h4 class="text-caption text-uppercase text-center text-white font-weight-bold">35,000+ Already Joined</h4>
                    <h2 class="font-weight-medium text-center text-white mt-9 mb-10 text-h1" style="color: white !important">
                        Stay up-to-date with what we're doing
                    </h2>

                    <v-form @submit.prevent="handleSubmit()" class="d-flex mx-auto justify-center">
                        <v-row class="align-center justify-center" no-gutters>
                            <v-col class="d-flex relative flex-column" cols="12" lg="8">
                                <div class="position-relative">
                                    <v-text-field
                                        v-model="email"
                                        @input="emailError = false"
                                        :class="{ 'error-input': emailError }"
                                        placeholder="Enter your email address"
                                        hide-details
                                        bg-color="#FFFFFF"
                                        color="theme-primary"
                                        rounded="sm"
                                    />
                                    <v-img
                                        v-if="emailError"
                                        src="/images/icon-error.svg"
                                        class="position-absolute"
                                        width="24"
                                        height="24"
                                        alt="Error Icon"
                                        style="top: 10px; right: 10px"
                                    />
                                </div>
                                <div
                                    v-if="emailError"
                                    class="bg-theme-secondary font-italic text-caption pl-2 rounded-sm"
                                    density="compact"
                                    size="x-small"
                                >
                                    Whoops, make sure it's an email
                                </div>
                            </v-col>
                            <v-col cols="12" lg="auto" class="mt-3 mt-lg-0 pl-2">
                                <v-btn type="submit" color="theme-secondary" class="px-6" size="large" rounded="sm"> Subscribe </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </section>
            </v-col>
        </v-row>
    </div>
    <!-- Newsletter Section End -->
</template>
