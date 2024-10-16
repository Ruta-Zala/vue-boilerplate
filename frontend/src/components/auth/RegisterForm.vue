<script setup lang="ts">
import type { UserType } from '@/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { TOKEN } from '../../service/const';
import LocalStorageService from '../../service/localstorage';
import { authService } from '../../service/http/httpServiceProvider';
import { useAuthStore } from '../../store/auth';

const router = useRouter();
const checkbox = ref(false);
const form = ref<UserType>({ name: '', email: '', password: '' });
const errorMessage = ref<String | null>(null);
const loading = ref<boolean>(false);
const tokenLs = new LocalStorageService(TOKEN);
const authStore = useAuthStore();

const handleSignUp = async () => {
    errorMessage.value = null;
    const { email, name, password } = form.value;
    if (!name || name.trim() === '') {
        errorMessage.value = 'Please enter name.';
        return;
    }

    if (!email || email.trim() === '') {
        errorMessage.value = 'Please enter email.';
        return;
    }

    if (!password || password.trim() === '') {
        errorMessage.value = 'Please enter password.';
        return;
    }

    try {
        const { data } = await authService.registerUser(form.value);
        tokenLs.setItem({ access_token: data.token, refresh_token: data.refreshToken });
        authStore.setToken(data.token);
        authStore.setUser(data.user);
        router.push({ name: 'Dashboard' });
    } catch (error) {
        console.error('error', { error });
        errorMessage.value = error?.message || 'Something went wrong!';
    } finally {
        loading.value = false;
    }
};
</script>
<template>
    <v-form>
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-medium mb-1">Name</v-label>
                <v-text-field v-model="form.name" variant="outlined" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-medium mb-1">Email Address</v-label>
                <v-text-field v-model="form.email" variant="outlined" type="email" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-medium mb-1">Password</v-label>
                <v-text-field v-model="form.password" variant="outlined" type="password" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <div v-if="errorMessage" class="text-theme-secondary text-caption">{{ errorMessage }}</div>
            </v-col>

            <v-col cols="12">
                <v-btn :loading="loading" color="primary" rounded="pill" size="large" block flat @click="handleSignUp">Sign up</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
