<script setup lang="ts">
const openLink = (url: string) => {
    window.open(url, '_blank');
};
</script>

<template>
    <v-footer class="bg-theme-dark-blue py-12" :height="60">
        <v-row class="d-flex align-center">
            <v-col cols="12" md="6" class="d-flex flex-column flex-md-row">
                <v-img src="/images/logo-bookmark-white.svg" alt="Logo" class="mb-10 mb-md-0" style="height: 30px" />
                <div class="d-flex">
                    <v-btn variant="text" v-smooth-scroll :href="'#features'">Features</v-btn>
                    <v-btn variant="text" v-smooth-scroll :href="'#faq'">FAQ</v-btn>
                    <v-btn variant="text" v-smooth-scroll :href="'#download-section'">Download</v-btn>
                </div>
            </v-col>
            <v-col class="d-flex justify-center justify-md-end mt-10 mt-md-0">
                <v-icon size="30" color="#FFF" @click="openLink('https://www.facebook.com')"> mdi-facebook </v-icon>
                <v-icon size="30" color="#FFF" class="ml-4" @click="openLink('https://www.twitter.com')"> mdi-twitter </v-icon>
            </v-col>
        </v-row>
    </v-footer>
</template>