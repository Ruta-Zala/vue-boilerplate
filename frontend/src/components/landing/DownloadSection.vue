<script setup lang="ts">
import downloads from '../../data/landing/downloads';
</script>

<template>
    <!-- Download Section Start -->
    <v-container id="download-section" fluid class="mx-auto pa-5" md="4/5">
        <section class="py-16 pt-18">
            <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                    <h2 class="display-2 font-theme-heading font-medium">Download the extension</h2>
                    <p class="text-theme-grayish-blue text-lg   mt-7">
                        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to
                        prioritize.
                    </p>
                </v-col>
            </v-row>
            <v-row class="mt-6" justify="center" align="center">
                <v-col
                    v-for="(download, index) in downloads"
                    :key="download.id + index"
                    cols="12"
                    md="6"
                    lg="4"
                    class="shadow-lg rounded-lg"
                >
                    <v-card class="d-flex flex-column align-center pa-6" elevation="10">
                        <v-img :src="download.icon" alt="Browser Logo" style="height: 100px; width: 100px" />
                        <h3 class="font-theme-heading text-2xl font-medium text-center mt-4">{{ download.title }}</h3>
                        <p class="text-md   text-theme-grayish-blue text-center mt-3">{{ download.subTitle }}</p>
                        <v-img class="w-100 my-7" src="/images/bg-dots.svg" alt="Dot Background" />

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn v-bind="props" color="theme-primary" :variant="isHovering ? 'outlined' : 'elevated'">
                                    Add & Install Extension
                                </v-btn>
                            </template>
                        </v-hover>
                    </v-card>
                </v-col>
            </v-row>
        </section>
    </v-container>
    <!-- Download Section End -->
</template>