let scene, camera, control, renderer,container,light;

function init() {
    container=document.createElement('div')
    document.body.appendChild(container)
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,10, 1000)
    camera.position.set(0,0,200)
    scene = new THREE.Scene()
    let geometry = new THREE.SphereGeometry(30,30,30);
    let textTrueLoaderImg = new THREE.TextureLoader().load('./images/154127050_x.jpeg')
    let material = new THREE.MeshBasicMaterial({
        map:textTrueLoaderImg
    })
    let mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)

    renderer = new THREE.WebGLRenderer({
        antialias:true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth,window.innerHeight)
    control = new THREE.OrbitControls(camera,renderer.domElement);
    control.autoRotate = true
    control.autoRotateSpeed = -3
    container.appendChild(renderer.domElement)

}


function animate(){
    requestAnimationFrame(animate)
    control.update();

	renderer.render( scene, camera );
}
init()
animate()
