<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAuthStore } from '../../../store/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);
</script>

<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" icon>
                <v-avatar size="35">
                    <img src="@/assets/images/profile/user-1.jpg" height="35" alt="user" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="xl" width="200" elevation="10" class="mt-2">
            <div class="pa-4">
                <div class="text-capitalize font-weight-bold">
                    {{ user?.name }}
                </div>
                <div class="text-caption">
                    {{ user?.email }}
                </div>
            </div>
            <div class="pt-2 pb-4 px-5 text-center">
                <v-btn to="/auth/logout" color="primary" variant="outlined" class="rounded-pill" block>Logout</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
