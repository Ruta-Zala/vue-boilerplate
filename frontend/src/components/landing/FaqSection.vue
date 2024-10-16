<script setup lang="ts">
import faqs from '../../data/landing/faqs';
import { ref } from 'vue';
import LinkButton from '../shared/LinkButton.vue';

let isOpen = ref(1);
</script>

<template>
    <!-- Questions Section Start -->
    <v-container id="faq" class="mx-auto pa-5">
        <section class="py-16 pt-18">
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                    <h2 class="text-h2 font-theme-heading font-weight-bold">Frequently Asked Questions</h2>
                    <p class="text-theme-grayish-blue text-text-body-1 mt-7">
                        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                    </p>
                </v-col>
            </v-row>

            <v-col class="mt-10 mx-auto" cols="12" lg="8" mx-auto>
                <v-list elevation="9" class="py-0">
                    <template v-for="(faq, index) in faqs" :key="faq.id">
                        <v-list-item @click="isOpen = faq.id" class="cursor-pointer py-4 bg-theme-slate-100">
                            <div class="d-flex align-center justify-space-between">
                                <div :class="isOpen === faq.id ? 'text-theme-secondary' : ''" class="font-weight-bold text-h6">
                                    {{ faq.title }}
                                </div>
                                <v-icon v-if="isOpen === faq.id" class="text-theme-secondary" size="30"> mdi-chevron-up </v-icon>
                                <v-icon v-else class="text-theme-primary" size="30"> mdi-chevron-down </v-icon>
                            </div>
                        </v-list-item>
                        <v-expand-transition>
                            <v-list-item
                                v-show="isOpen === faq.id"
                                class="text-theme-grayish-blue bg-theme-gray-500 px-6 py-5 text-justify text-body-1"
                            >
                                {{ faq.description }}
                            </v-list-item>
                        </v-expand-transition>
                    </template>
                </v-list>
                <div class="flex text-center mt-10">
                    <v-btn color="theme-primary" link="#" size="large" rounded="sm">More FAQs</v-btn>
                </div>
            </v-col>
        </section>
    </v-container>
    <!-- Questions Section End -->
</template>