<script setup lang="ts">
import { ref } from 'vue';

let mobileNav = ref(false);

let toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

const menuItems = [
    { title: 'Features', href: '#features' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Subscribe', href: '#subscribe' },
    { title: 'Login', isButton: true, href: '/auth/login' }
];
</script>


<template>
    <!-- Navbar Start -->
    <v-container class="mx-auto py-12">
        <header class="d-flex justify-space-between align-center">
            <div>
                <a href="/"><img src="/images/logo-bookmark.svg" alt="Site Logo" /></a>
            </div>

            <nav class="d-flex justify-end flex-column flex-md-row">
                <!-- Menu Toggler -->
                <button @click="toggleMobileNav()" type="button" class="d-flex d-md-none">
                    <svg viewBox="0 0 24 24" class="mobile-header-menu-icon">
                        <path
                            fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        ></path>
                    </svg>
                </button>

                <!-- Desktop Menu -->
                <div class="px-10 font-theme-heading font-medium align-center d-none d-md-flex flex-column flex-md-row">
                    <v-hover v-for="item in menuItems" :key="item.title">
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn
                                v-if="!item.isButton"
                                v-bind="props"
                                :color="isHovering ? 'theme-secondary' : ''"
                                variant="text"
                                class="text-uppercase font-weight-bold mx-1 text-subtitle-1"
                                :href="item.href"
                                v-smooth-scroll
                            >
                                {{ item.title }}
                            </v-btn>

                            <v-btn
                                v-else
                                v-bind="props"
                                color="theme-secondary"
                                :variant="isHovering ? 'outlined' : 'elevated'"
                                size="large"
                                class="text-uppercase font-weight-bold px-8"
                                :to="item.href"
                            >
                                {{ item.title }}
                            </v-btn>
                        </template>
                    </v-hover>
                </div>
            </nav>
        </header>

        <!-- Mobile Menu Start-->
        <div v-show="mobileNav">
            <div class="mobile-menu-overlay">
                <div class="d-flex justify-space-between align-center">
                    <img src="/images/logo-bookmark-white.svg" alt="Logo" />
                    <button @click="toggleMobileNav()" type="button" class="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-x text-white"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </button>
                </div>
                <ul class="text-uppercase text-white text-md tracking-widest align-center d-flex flex-column mt-14">
                    <li
                        class="hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-100 text-center"
                    >
                        <a @click="toggleMobileNav()" href="#features">Features</a>
                    </li>
                    <li
                        class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-100 text-center"
                    >
                        <a @click="toggleMobileNav()" href="#faq">FAQ</a>
                    </li>
                    <li
                        class="hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-100 text-center"
                    >
                        <a @click="toggleMobileNav()" href="#subscribe">Subscribe</a>
                    </li>
                    <li
                        class="bg-transparent border-2 rounded px-6 py-2 mt-6 w-100 text-center cursor-pointer hover:text-theme-secondary transition duration-200"
                    >
                        <a @click="toggleMobileNav()" href="#download-section">Download</a>
                    </li>
                </ul>
                <div class="d-flex justify-center items-end h-52">
                    <ul class="d-flex px-8">
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                />
                            </svg>
                        </li>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Mobile Menu End-->
    </v-container>
    <!-- Navbar End -->
</template>

<style lang="scss" scoped>
.mobile-header-menu-icon {
    height: 25px;
    width: 25px;
}

.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    background: linear-gradient(to bottom, #252b46, rgba(37, 43, 70, 0.9), #252b46);
}
</style>