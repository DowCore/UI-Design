<template>
<div id="app">
    <DraggableResizableEditor />
</div>
</template>

<script>
import DraggableResizableEditor from "./components/DraggableResizableEditorItem.vue";

export default {
    name: "App",
    components: {
        DraggableResizableEditor,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
