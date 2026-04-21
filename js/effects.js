function applyScratch() {
    document.querySelectorAll("del.scratch").forEach(el => {
        if (el.querySelector("svg")) return; // avoid duplicating

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

        const lines = 2 + Math.floor(Math.random() * 2);

        for (let i = 0; i < lines; i++) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

            const y = height * (0.4 + Math.random() * 0.2);
            const jitter = () => (Math.random() - 0.5) * 6;

            const d = `
                M 0 ${y + jitter()}
                Q ${width * 0.3} ${y + jitter()},
                  ${width * 0.6} ${y + jitter()}
                T ${width} ${y + jitter()}
           `;

            path.setAttribute("d", d);
            path.setAttribute("stroke", "black");
            path.setAttribute("stroke-width", 1);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-linecap", "round");

            svg.appendChild(path);
        }

        el.appendChild(svg);
    });
}
