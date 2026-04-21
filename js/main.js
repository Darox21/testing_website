// MAIN.JS

const index_grid = document.getElementById("index-grid");
const header = document.getElementById("header");

// When everything is loaded, load the header, the main content, and the footer
document.addEventListener("DOMContentLoaded", function () {
    // Load templates
    loadTemplate("header", "templates/header.html");
    loadTemplate("index-grid", "templates/index-grid.html");
    loadTemplate("footer", "templates/footer.html");

    // If there's a fragment identifier, load it
    // Otherwise, load the main page
    handleHashChange();

    // Listen for hash changes (e.g., when the user clicks the back button)
    window.addEventListener("hashchange", handleHashChange);
});

function handleHashChange() {
    const hash = window.location.hash.substring(1); // remove the #
    
    if (hash) {
        const file = decodeURIComponent(hash);
        console.log("Loading content:", file);
        loadMarkdown("main", file);

        header.classList.remove("hidden");
        index_grid.classList.add("hidden");
    } else {
        header.classList.add("hidden");
        loadMarkdown("main", "home.md", false);
        index_grid.classList.remove("hidden");
    }
}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a.dynamic-link");
    if (!link) return;

    // Middle-click, Ctrl-click, Cmd-click → let browser open new tab
    if (e.button === 1 || e.metaKey || e.ctrlKey) return;

    e.preventDefault();

    const file = decodeURIComponent(link.getAttribute("href").substring(1));
    loadMarkdown("main", file);
});