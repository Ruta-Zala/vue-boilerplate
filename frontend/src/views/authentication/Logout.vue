<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
    authStore.clearAuthData();
    router.push({ name: 'Home' });
});
</script>


<template>
    <div class="d-flex justify-center align-center text-center h-100">
        <div>
            <h1 class="text-h1 pt-3">Logging Out...</h1>
        </div>
    </div>
</template>

