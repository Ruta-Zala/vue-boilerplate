<script setup lang="ts">
import LinkButton from '../shared/LinkButton.vue';
</script>

<template>
    <!-- Hero Section Start -->
    <v-container>
        <v-row align="center" justify="center" class="pb-16">
            <v-col cols="12" lg="6" class="text-center text-lg-left">
                <h1 class="font-weight-bold font-theme-heading text-h1">A Simple Bookmark Manager</h1>
                <p class="mt-10   text-theme-grayish-blue">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <v-row justify="center" justify-md="start" class="mt-10">
                    <v-btn rounded="sm" class="px-5 mr-4" color="theme-primary" :href="'#download-section'"> Get It On Chrome </v-btn>
                    <v-btn rounded="sm" class="px-5" color="lightsecondary" :href="'#download-section'"> Get It On Firefox </v-btn>
                </v-row>
            </v-col>
            <v-col cols="12" lg="6" class="position-relative order-1 lg:order-none mb-20 mt-lg-0 mb-lg-0">
                <v-img src="/images/illustration-hero.svg" contain style="z-index: 10" />
                <v-container
                    class="bg-theme-primary rounded-s-pill"
                    style="position: absolute; right: -12rem; bottom: -8px; width: calc(100% + 48px); height: 20rem; z-index: 0"
                ></v-container>
            </v-col>
        </v-row>
    </v-container>
    <!-- Hero Section End -->
</template>
