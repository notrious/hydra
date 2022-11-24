document.querySelectorAll("header ul li").forEach(function (page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    };
});
