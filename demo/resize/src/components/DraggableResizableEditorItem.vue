<template>
<div class="editor">
    <DrapResize :x="200" :minw="150" :minh="100" :w="300" :h="200">
        <Header :header-name="input" @header-change="headerChange"></Header>
        <Body :details="detail" @detail-checked-changed="detailCheckedChanged"></Body>
    </DrapResize>
</div>
</template>

<script>
import Header from './EditorItemHeader';
import Body from './EditorItemBody';
import DrapResize from './DragResize'
export default {
    name: "DraggableResizableEditorItem",
    props: {

    },
    components: {
        Header,
        Body,
        DrapResize
    },
    data() {
        return {
            input: "firstTable",
            detail: ["Aaa", "Brereerrere", "Crererereerr"],
        };
    },
    methods: {
        headerChange(val) {
            console.log("标题变化了" + val);
        },
        detailCheckedChanged(val) {
            console.log(val);
        }
    }
};
</script>
