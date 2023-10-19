<template>
    <select :value="modelValue" @change="changeOptions">
        <option disabled value="">Выберите способ сортировки</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',

        props: {
            modelValue: {
                type: String,
            },
            options: {
                type: Array,
                default: () => [],
            }
        },

        methods: {
            changeOptions(event){
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>

<style scoped>
select{
    padding: 6px;
    border-radius: 4px;
    border: 1px solid green;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    transition: .3s linear;
}
select:hover{
    box-shadow: 1px 1px 10px green;
}
</style>