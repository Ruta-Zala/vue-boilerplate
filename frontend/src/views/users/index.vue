<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LocalStorageService from '../../service/localstorage';
import { userService } from '../../service/http/httpServiceProvider';
import profile from '../../assets/images/profile/user-1.jpg';

const usersList = ref([]);
const loading = ref(false);

onMounted(() => {
    fetchUsers();
});

const fetchUsers = async () => {
    try {
        loading.value = true;
        const { data } = await userService.getAllUsers();
        usersList.value = data;
    } catch (error) {
        console.error('Failed at fetchUsers:', { error });
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <v-card elevation="10" class="mb-3">
        <v-card-text class="py-3">
            <h1 class="text-h3">Users list</h1>
        </v-card-text>
    </v-card>
    <v-card elevation="10">
        <v-card-text>
            <v-skeleton-loader v-if="loading" class="mx-auto" type="table-row" />
            <template v-else>
                <div v-if="!usersList.length" class="text-body-2">No Users Available!</div>
                <v-table v-else>
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Role</th>
                            <th class="text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in usersList" :key="item.name">
                            <td><v-avatar class="mr-3" :image="profile"> </v-avatar> {{ item.name }}</td>
                            <td>{{ item.role }}</td>
                            <td>{{ item.email }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </template>
        </v-card-text>
    </v-card>
</template>