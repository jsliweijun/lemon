<template>
    <i :class="`sydney-ui-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
});
</script>

<style></style>
