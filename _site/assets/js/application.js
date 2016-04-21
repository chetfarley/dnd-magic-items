// Individual Bootstrap Scripts
// @codekit-prepend "../../lib/bootstrap-table/bootstrap-table.js";

// Available Scripts
// "../../lib/bootstrap/js/affix.js";
// "../../lib/bootstrap/js/alert.js";
// "../../lib/bootstrap/js/button.js";
// "../../lib/bootstrap/js/carousel.js";
// "../../lib/bootstrap/js/dropdown.js";
// "../../lib/bootstrap/js/modal.js";
// "../../lib/bootstrap/js/tooltip.js";
// "../../lib/bootstrap/js/popover.js";
// "../../lib/bootstrap/js/scrollspy.js";
// "../../lib/bootstrap/js/tab.js";
// "../../lib/bootstrap/js/transition.js";

// items spreadsheet
var sheetsuUrl = "https://sheetsu.com/apis/v1.0/f29e79d5?fields=id,name,type,rarity,attunement,source";

$('#items-table').bootstrapTable({
    url: sheetsuUrl,
    columns: [{
        field: 'name',
        title: 'Name',
        sortable: true
    }, {
        field: 'type',
        title: 'Type',
        sortable: true
    }, {
        field: 'rarity',
        title: 'Rarity',
        sortable: true
    }, {
        field: 'attunement',
        title: 'Requires Attunement',
        sortable: true
    }, {
        field: 'source',
        title: 'Source',
        sortable: true
    }, ]
});
