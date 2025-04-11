const insert = document.querySelector(".insert");
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class = "color">
    <table border = "2px">
    <tr>
        <th>key</th>
        <th>keycode</th>
        <th>code</th>
    </tr>
    <tr>
        <th>${e.key === ' ' ? 'space' : e.key}</th>
        <th>${e.keyCode}</th>
        <th>${e.code}</th>
    </tr>
    <table>
    <div>
    `;
})