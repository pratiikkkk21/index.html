const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.style.backgroundColor = '#DDA0DD';
    });

    zone.addEventListener('dragleave', () => {
        zone.style.backgroundColor = '#F8F8FF';
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        zone.appendChild(draggableElement);
        zone.style.backgroundColor = '#F8F8FF';
    });
});
