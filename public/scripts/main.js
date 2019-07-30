const FILE_UNSELECTED = "/images/plain-file.png";
const FILE_SELECTED = "/images/plain-file-selected.png";
const DIR_UNSELECTED = "/images/dir.png";
const DIR_SELECTED = "/images/dir-selected.png";
let selected = null;

$(document).ready(function() {
    attachFileHandlers();
});

function attachFileHandlers() {
    $(document).on("click", function() {
        toggle(selected, false);
    })

    $(".file").draggable({"containment": "body"});
    $(".dir").draggable({"containment": "body"});
    $(".file, .dir").on("click", handleSingleClick);
    $(".file, .dir").on("mousedown", handleSingleClick);
    $(".file").on("dblclick", handleFileDoubleClick);
    $(".dir").on("dblclick", handleDirDoubleClick);
}

function handleSingleClick(e) {
    e.stopPropagation();
    toggle(selected, false);
    toggle($(this), true);
}

function handleFileDoubleClick(e) {
    const modal = $(this).attr("opensModal");
    if (modal === 'true') {
        const id = $(this).attr("id");
        console.log("showing #" + id + "-modal");
        $("#" + id + "-modal").modal('show');
    } else {
        const link = $(this).attr("link");
        window.open(link, '_blank');
    }
}

function handleDirDoubleClick(e) {
    const link = $(this).attr("link");
    window.location.href = link;
}

function toggle(elt, select) {
    if (elt) {
        const img = $(elt.children()[0]);
        const label = $(elt.children()[1]);

        if (select) {
            const img_path = elt.hasClass("dir") ? DIR_SELECTED : FILE_SELECTED;
            img.attr("src", img_path);
            label.addClass("icon-label-selected");
            elt.css('z-index', 2);
            selected = elt;
        } else {
            const img_path = elt.hasClass("dir") ? DIR_UNSELECTED : FILE_UNSELECTED;
            img.attr("src", img_path);
            label.removeClass("icon-label-selected");
            elt.css('z-index', 1);
            selected = null;
        }
    }
}