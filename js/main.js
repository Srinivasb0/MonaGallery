import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 5, 10);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// create the floor plane
// Load the textures

let Texture = new THREE.TextureLoader();
let floorTexture = Texture.load("../img/floor.png");
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(20, 20);


let planeGeometry = new THREE.PlaneGeometry(50, 50);
let planeMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide,
});
const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

floorPlane.rotation.x = Math.PI / 2;
floorPlane.position.y = -Math.PI;

scene.add(floorPlane);

// Create the walls
const wallGroup = new THREE.Group();
scene.add(wallGroup);

const roughTexture = new THREE.TextureLoader().load("../img/rought-white-wall-texture.jpeg")
roughTexture.wrapS = roughTexture.wrapT = THREE.RepeatWrapping;


// Front wall
const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
frontWall.position.z = -20;

// Left Wall

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001), 
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
leftWall.rotation.y = Math.PI / 2; 
leftWall.position.x = -20;


// Right Wall
const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001), 
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
rightWall.position.x = 20;
rightWall.rotation.y = Math.PI / 2; 

  // Back Wall
const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
backWall.position.z = 20;

wallGroup.add(frontWall, backWall, leftWall, rightWall);

// Loop through each wall and create the bounding boxes
for (let i = 0; i < wallGroup.children.length; i++) {
    wallGroup.children[i].BBox = new THREE.Box3();
    wallGroup.children[i].BBox.setFromObject(wallGroup.children[i]);
}

// Ceiling
// const normalTexture = new THREE.TextureLoader().load("../img/grid-ceiling.jpeg")
// normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;

const ceilingGeometry = new THREE.PlaneGeometry(50, 50);
const ceilingMaterial = new THREE.MeshBasicMaterial({map:roughTexture, color : 0xffff, side: THREE.DoubleSide});
const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

ceilingPlane.rotation.x = Math.PI / 2;
ceilingPlane.position.y = 10;
console.log(ceilingPlane);
scene.add(ceilingPlane);

function createPainting(imageURL, width, height, position) {
    const textureLoader = new THREE.TextureLoader();
    const paintingTexture = textureLoader.load(imageURL);
    const paintingMaterial = new THREE.MeshBasicMaterial({
        map: paintingTexture,
    });
    const paintingGeometry = new THREE.PlaneGeometry(width, height);
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting.position.set(position.x, position.y, position.z);
    return painting;
}

// Paintings

let paintings = [];

const painting1 = createPainting("https://ipfs.mona.gallery/ipfs/bafybeiflkfw54cj3ckt7esvg7qpxnolhlclcahnpmixnkwgkklzctfotrq", 10, 5, new THREE.Vector3(-10, 5, -19.95));
painting1.userData = {
    type: 'space',
    description: 'Brought to you by TAYLOR.WTF and WTFINDUSTRIES',
    creator: '0x550e970e31a45b06df01a00b1c89a478d4d5e00a',
    url: 'https://monaverse.com/spaces/jpeg.land-v.069'
}
painting1.castShadow = true;
painting1.receiveShadow = true;
paintings.push(painting1);

const painting2 = createPainting("https://ipfs.mona.gallery/ipfs/bafybeictvdimmdyvguna75rn2rxp4lgu423pzznqx4nxgndw6pdb4c3va4", 10, 5, new THREE.Vector3(10, 5, -19.95));
painting2.userData = {
    type: 'space',
    description: 'Brought to you by TAYLOR.WTF and WTFINDUSTRIES',
    creator: '0x550e970e31a45b06df01a00b1c89a478d4d5e00a',
    url: 'https://monaverse.com/spaces/jpeg.land-v.069'
}
painting2.castShadow = true;
painting2.receiveShadow = true;
paintings.push(painting2);


scene.add(painting1, painting2);

// Left wall
const painting3 = createPainting("https://ipfs.mona.gallery/ipfs/bafkreicxms6zvxc2gczd67u7zucwfi5hwx6gqrn3e5xjsuwnijzzcthmvi", 10, 5, new THREE.Vector3(-19.5, 5, -10));
painting3.rotation.y = Math.PI/2;
const painting4 = createPainting("https://ipfs.mona.gallery/ipfs/bafybeiaehgywxnwfztemnxa5a5rkqoggsietdc7jwci5qregoe33q2xsaq", 10, 5, new THREE.Vector3(-19.5, 5, 5));
painting4.rotation.y = Math.PI/2;
scene.add(painting3, painting4);

// Right wall
const painting5 = createPainting("https://ipfs.mona.gallery/ipfs/bafkreicxms6zvxc2gczd67u7zucwfi5hwx6gqrn3e5xjsuwnijzzcthmvi", 10, 5, new THREE.Vector3(15, 5, -15));
painting5.rotation.z = Math.PI;
const painting6 = createPainting("https://ipfs.mona.gallery/ipfs/bafybeiaehgywxnwfztemnxa5a5rkqoggsietdc7jwci5qregoe33q2xsaq", 10, 5, new THREE.Vector3(19, 5, -5));
painting6.rotation.y = Math.PI/2;
// scene.add(painting5, painting6);


// Handle mouse events

function clickHandling(renderer, camera, paintings) {
    renderer.domElement.addEventListener(
        'click',
        (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            onClick(camera, paintings);
        },
        false
    );
}

function onClick(camera, paintings) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(paintings);
    console.log(intersects)
    // const painting = intersects.object
    console.log(intersects);
    if (intersects.length > 0) {
        const painting = intersects[0].object
        console.log(painting);
        console.log('Clicked Painting: ', painting.userData.type)
    }
}

clickHandling(renderer, camera, paintings);


// Controls
document.addEventListener('keydown', onKeyDown, false);

// function when a key is pressed, execute this
function onKeyDown(event){
    let keycode = event.which;

    if (keycode === 39) {
        camera.translateX(-0.8);
    }
    else if (keycode === 37) {
        camera.translateX(0.8);
    }
    else if (keycode === 38) {
        camera.translateY(-0.8);
    }
    else if (keycode === 40) {
        camera.translateY(0.8);
    }
}

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();