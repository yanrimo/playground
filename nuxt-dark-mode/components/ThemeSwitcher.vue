<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'my-app-dark' ? 'light' : 'my-app-dark'
}
</script>

<template>
    <button @click="toggleTheme" aria-label="テーマを切り替える">
        <i v-if="colorMode.value === 'dark'" class="pi pi-sun font-lg" />
        <i v-else class="pi pi-moon font-lg" />
    </button>
</template>