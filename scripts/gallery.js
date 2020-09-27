const trips = {
    cabin: {
        id: 'cabin',
        nbImage: 12,
        vignette: 'cab',
        zoom: 'ocab',
    },
    louisiana: {
        id: 'louisiana',
        nbImage: 13,
        vignette: 'louis',
        zoom: 'olouis',
    },
    newyork: {
        id: 'newyork',
        nbImage: 9,
        vignette: 'newyork',
        zoom: 'onewyork',
    },
    thailand: {
        id: 'thailand',
        nbImage: 14,
        vignette: 'thai',
        zoom: 'othai',
    },
};

const $ = document.querySelector.bind( document );

const vignettes = $('.vignettes');
const lArrow = $('.lArrow');
const rArrow = $('.rArrow');
const close = $('.close');
const zoomedElement = $('.zoomed');
const zoomedImage = $('.zoomed .image');

// Trip menus
const tripIds = Object.keys(trips); // ['cabin', 'louisiana', 'newyork', 'thailand']
console.log(tripIds);
/* 
REFERENCE

for (let i = 0; i <= max; i+=1 ) {}
for (const element of array) {}
for (const [index, element] of Object.entries(trips)) {} // [['cabin', {}], ['louisiana', {}], [], ...]
for (const index in tripIds) { // 0, 1, 2, ... length
    // cabin, louisiana, newyork, thailand
    if (trips.hasOwnProperty(index)) {
        const trip = trips[index];
    }
}

function () {
    this = {};
}

const getStuff = () => {
    this = undefined;
};
 
getStuff();
*/

for (const id of tripIds) {
    const btn = $(`#${id}`);

    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        selectTrip(id);
    });
}
close.addEventListener('click', zoomOut);

function selectTrip (trip) {
    console.log(trip);
    refreshVignettes(trips[trip]);
}

function refreshVignettes (trip) {
    // Empty .vignettes.
    vignettes.innerHTML = '';
    // Loop nbImages of selected trip.
    for (let i = 1; i <= trip.nbImage; i += 1) {
        //    => create image element
        const image = createVignette(trip, i);
        //    => addEventListener zoomIn
        image.addEventListener('click', function () {
            selectImage(trip, i);
        });
        //    => inject image in div
        vignettes.appendChild(image);
    }
}

function getZoomSrc(trip, i) {
    return `image/travels/${trip.id}/${trip.zoom}${i}.JPG`;
}

function getVignetteSrc(trip, i) {
    return `image/travels/${trip.id}/${trip.vignette}${i}.JPG`;
}

function createVignette (trip, i) {
    const vignette = document.createElement('img');
    vignette.setAttribute('src', getVignetteSrc(trip, i));
    vignette.setAttribute('class', 'imageSmall');
    return vignette;
}

let previousImage;
let nextImage;
lArrow.addEventListener('click', function () {
    previousImage();
});
rArrow.addEventListener('click', function () {
    nextImage();
});

function selectImage (trip, i) {
    // Swap src of zoomed image.
    zoomedImage.setAttribute('src', getZoomSrc(trip, i));
    // Reassign event handler for next and previous
    previousImage = function () {
        previous(trip, i);
    }
    nextImage = function () {
        next(trip, i);
    }
    zoomIn();
}

function next (trip, i) {
    // Increment indexImage or 0 if last image.
    let newI = i + 1;
    if (newI > trip.nbImage) {
        newI = 1;
    }
    selectImage(trip, newI);
}

function previous (trip, i) {
    // Decrement indexImage or max if first image.
    let newI = i - 1;
    if (newI < 1) {
        newI = trip.nbImage;
    }
    selectImage(trip, newI);
}

function zoomIn () {
    // Show zoomedLayout.
    zoomedElement.classList.remove('hidden');
}

function zoomOut () {
    // Hide zoomedLayout.
    zoomedElement.classList.add('hidden');
}