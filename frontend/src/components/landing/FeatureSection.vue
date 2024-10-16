<script setup lang="ts">
import features from '../../data/landing/features';
import { ref } from 'vue';
import LinkButton from '../shared/LinkButton.vue';

let isOpen = ref(1);
</script>

<template>
    <!-- Features Section Start -->
    <v-container fluid id="features">
        <section class="py-16">
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                    <h2 class="display-2 font-weight-bold font-theme-heading text-h2">Features</h2>
                    <p class="text-theme-grayish-blue mt-7 text-lg">
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your
                        devices so you can access them on the go.
                    </p>
                </v-col>
            </v-row>

            <v-row class="mt-10" justify="center">
                <v-tabs v-model="isOpen" vertical class="border-b-md border-opacity-100">
                    <v-tab
                        v-for="feature in features"
                        :key="feature.id"
                        :value="feature.id"
                        class="text-center text-h6 font-weight-bold"
                        color="theme-secondary"
                        @click.prevent="isOpen = feature.id"
                    >
                        {{ feature.name }}
                    </v-tab>
                </v-tabs>
            </v-row>

            <div class="mt-16 position-relative">
                <template v-for="feature in features" :key="feature.id">
                    <v-row v-show="isOpen === feature.id" class="align-center" justify="center">
                        <v-col cols="12" md="6" class="relative">
                            <v-img :src="feature.details.imageUrl" aspect-ratio="1.5" class="h-100 w-100" style="z-index: 10" />
                            <v-container
                                class="bg-theme-primary rounded-e-pill"
                                style="position: absolute; right: 50vw; bottom: -16px; width: calc(100% + 56px); z-index: 0; height: 20rem"
                            ></v-container>
                        </v-col>
                        <v-col cols="12" md="6">
                            <h3 class="font-theme-heading text-h3 md:text-3xl font-weight-bold text-center text-lg-left">
                                {{ feature.details.title }}
                            </h3>
                            <p class="mt-7 text-body-1 text-theme-grayish-blue text-center text-lg-left">
                                {{ feature.details.description }}
                            </p>
                            <div class="flex justify-center justify-lg-start mt-7">
                                <v-btn color="theme-primary" size="large">More Info</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </template>
            </div>
        </section>
    </v-container>
    <!-- Features Section End -->
</template>