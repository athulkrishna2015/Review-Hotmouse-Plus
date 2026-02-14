document.addEventListener("wheel", (ev) => {
    const isScrollbar = ev.clientX > document.documentElement.clientWidth;
    const isBottom = window.innerHeight < 150 || !!document.getElementById('checker') || !!document.getElementById('bottombar');

    let req = {
        "key": "wheel",
        "value": ev.deltaY,
        "is_scrollbar": isScrollbar,
        "is_bottom": isBottom
    }
    let req_str = JSON.stringify(req)
    let resp = pycmd("ReviewHotmouse#" + req_str)
    if (resp) {
        ev.preventDefault()
        ev.stopPropagation()
    }
}, { passive: false })