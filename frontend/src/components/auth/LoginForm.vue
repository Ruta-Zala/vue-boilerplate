<script setup lang="ts">
import { ref } from 'vue';

import LocalStorageService from '../../service/localstorage';
import { TOKEN } from '../../service/const';
import { useRouter } from 'vue-router';
import type { UserType } from '../../types/index';
import { useAuthStore } from '../../store/auth';
import { authService } from '../../service/http/httpServiceProvider';

const router = useRouter();
const checkbox = ref(false);
const authStore = useAuthStore();

const tokenLs = new LocalStorageService(TOKEN);
const form = ref<UserType>({ email: '', password: '' });
const errorMessage = ref<String | null>(null);
const loading = ref<boolean>(false);

const handleSignIn = async () => {
    errorMessage.value = null;
    loading.value = true;
    const { email, password } = form.value;

    if (!email || email.trim() === '') {
        errorMessage.value = 'Please enter email.';
        return;
    }

    if (!password || password.trim() === '') {
        errorMessage.value = 'Please enter password.';
        return;
    }

    try {
        const { data }: any = await authService.loginUser(form.value);
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
    <div class="d-flex align-center text-center mb-6">
        <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
            <span class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100">Your Social Campaigns</span>
        </div>
    </div>
    <div>
        <v-row class="mb-3">
            <v-col cols="12">
                <v-label class="font-weight-medium mb-1">Email</v-label>
                <v-text-field v-model="form.email" variant="outlined" class="pwdInput" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-medium mb-1">Password</v-label>
                <v-text-field
                    v-model="form.password"
                    variant="outlined"
                    class="border-borderColor"
                    type="password"
                    hide-details
                    color="primary"
                ></v-text-field>
            </v-col>
            <v-col cols="12 " class="py-0">
                <div class="d-flex flex-wrap align-center w-100">
                    <v-checkbox hide-details color="primary">
                        <template v-slot:label>Remeber this Device</template>
                    </v-checkbox>
                    <div class="ml-sm-auto">
                        <RouterLink to="" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                            Forgot Password ?</RouterLink
                        >
                    </div>
                </div>
            </v-col>
            <v-col cols="12">
                <div v-if="errorMessage" class="text-theme-secondary text-caption">{{ errorMessage }}</div>
            </v-col>
            <v-col cols="12">
                <v-btn
                    :loading="loading"
                    size="large"
                    rounded="pill"
                    color="primary"
                    class="rounded-pill"
                    block
                    type="submit"
                    flat
                    @click="handleSignIn"
                    >Sign In</v-btn
                >
            </v-col>
        </v-row>
    </div>
</template>
