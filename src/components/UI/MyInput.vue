<template>
    <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="updateInput"
      />
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            placeholder: {
                type: String,
                required: true,
            },
            value: [String, Number,]
        },

        methods: {
            updateInput(e){
                this.$emit('update:value', e.target.value);
            }
        }
    }
</script>

<style scoped>

input {
  padding: 6px 4px;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #656565;
}
input::placeholder{
    font-size: 14px;
}

</style>