import vue from 'vue';
export const store = vue.observable({
    AllTables: [],
    SelectedTables: [],
    SelectedRows: ''
});
export const mution = {
    initTables(tables) {
        store.AllTables = tables;
    },
    SelectedTable(table) {
        store.SelectedTables.push(table);
    },
    UpdateTableName(id, newName) {
        let model = store.AllTables.find(t => {
            return t.id === id;
        });
        if (model) {
            model.name = newName;
        }
    },
    AddRow(row) {
        store.SelectedRows = store.SelectedRows || [];
        store.SelectedRows.push(row);
    },
    DeleteRow(id) {
        let findIndex = store.SelectedRows.findIndex(t => {
            return t.id === id;
        });
        if (findIndex > -1) {
            store.SelectedRows.splice(findIndex, 1);
        }
    }
}