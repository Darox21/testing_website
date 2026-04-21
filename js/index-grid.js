// 1. Create a reusable function
function setupHoverEffects() {
    const center = document.getElementById("center");
    const targets = document.querySelectorAll("[data-hover]");

    console.log("Found targets:", targets.length);

    targets.forEach(el => {
        // Remove old listeners first (prevents duplicates if you call this multiple times)
        el.removeEventListener("mouseenter", handleMouseEnter);
        // el.removeEventListener("mouseleave", handleMouseLeave);

        el.addEventListener("mouseenter", handleMouseEnter);
        // el.addEventListener("mouseleave", handleMouseLeave);
    });
}

// 2. Define the handlers once (cleaner and avoids memory leaks)
function handleMouseEnter(e) {
    const center = document.getElementById("center");
    if (center && e.currentTarget.dataset.hover) {
        center.src = e.currentTarget.dataset.hover;
    }
}

// function handleMouseLeave() {
//     const center = document.getElementById("center");
//     if (center) {
//         center.src = "assets/index/center-default.jpg";
//     }
// }

// Initial call when the page first loads
setupHoverEffects();