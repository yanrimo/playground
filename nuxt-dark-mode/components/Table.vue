<script setup>
const products = [
    { name: 'aaaa', quantity: 1},
    { name: 'iiii', quantity: 2}
]
</script>

<template>
    <DataTable :value="products">
        <Column field="name" header="Name" headerClass="!bg-orange-400 dark:!bg-transparent"></Column>
        <Column field="quantity" header="Quantity" headerClass="!bg-orange-400"></Column>
    </DataTable>
</template>
