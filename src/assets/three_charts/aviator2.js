import * as THREE from 'three'
import {
    MTLLoader,
    OBJLoader
} from 'three-obj-mtl-loader'
import GLTFLoader from 'three-gltf-loader';
import bus from '@/bus.js'
const Colors = {
    red: 0xf25346,
    white: 0xd8d0d1,
    brown: 0x59332e,
    pink: 0xF5986E,
    brownDark: 0x23190f,
    blue: 0x68c3c0
}
let scene, camera, fieldOfView, aspectRatio, nearPlane,
    farPlane, HEIGHT, WIDTH, renderer,container;
function createScene() {
    // 获得屏幕的宽和高，
    // 用它们设置相机的纵横比
    // 还有渲染器的大小
    container = document.getElementById('world')
    HEIGHT = container.clientHeight;
    WIDTH = container.clientWidth;

    // 创建场景
    scene = new THREE.Scene();
    // 在场景中添加雾的效果；样式上使用和背景一样的颜色
    // scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
    // 创建相机
    aspectRatio = WIDTH / HEIGHT
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    /**
     * PerspectiveCamera 透视相机
     * @param fieldOfView 视角
     * @param aspectRatio 纵横比
     * @param nearPlane 近平面
     * @param farPlane 远平面
     */
    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );
    // 设置相机的位置
    camera.position.x = 0;
    camera.position.z = 300;
    camera.position.y = 100;
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
        // 在 css 中设置背景色透明显示渐变色
        alpha: true,
        // 开启抗锯齿，但这样会降低性能。
        // 不过，由于我们的项目基于低多边形的，那还好 :)
        antialias: true
    });
    // 定义渲染器的尺寸；在这里它会填满整个屏幕
    renderer.setSize(WIDTH, HEIGHT);
    // 打开渲染器的阴影地图
    renderer.shadowMap.enabled = true;
    // 在 HTML 创建的容器中添加渲染器的 DOM 元素
    container.appendChild(renderer.domElement);
    // 监听屏幕，缩放屏幕更新相机和渲染器的尺寸
    window.addEventListener('resize', handleWindowResize, false);
}

function handleWindowResize() {
    // 更新渲染器的高度和宽度以及相机的纵横比
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function createLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    // const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.9 );
    directionalLight.position.set(0, 0.3, 1);
    // directionalLight2.position.set( -1, 1, 0 );
    scene.add(ambientLight);
    scene.add(directionalLight);
    // scene.add(directionalLight2);
}

let mouse;
let mouseRotate = {
    x:0,
    y:0,
    z:0
}

function createPlane() {

    // let mtlLoader = new MTLLoader();
    // let objLoader = new OBJLoader();
    // mtlLoader.load('https://www.wjceo.com/lib/assets/models/butterfly.mtl', (materials) => {
    // mtlLoader.load('src/assets/three_obj/未标题_2.mtl', (materials) => {
    //     materials.preload()
    //     objLoader.setMaterials(materials)
    //     // objLoader.load('https://www.wjceo.com/lib/assets/models/butterfly.obj', (object) => {
    //     objLoader.load('src/assets/three_obj/未标题_2.obj', (object) => {
    //         mouse = object

    //         scene.add(mouse)
    //     })
    // })
    const loader = new GLTFLoader();
    loader.load(
        // 'src/assets/three_obj/mouse.gltf',
        'https://hjx-1255882558.cos.ap-guangzhou.myqcloud.com/jjh/mouse.gltf',
        (gltf) => {
            // called when the resource is loaded
            mouse = gltf.scene
            log(mouse)
            mouse.position.z = -300
            handleLoadOver()
            scene.add(gltf.scene);
        },
        (xhr) => {
            // called while loading is progressing
            bus.$emit('object_load',xhr.loaded / xhr.total)
            // console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
        },
        (error) => {
            // called when loading has errors
            console.error('An error happened', error);
        },
    );
}

function loop() {
    // airplane.propeller.rotation.x += 0.3;
    if (mouse && mouse.position) {
        // mouse.position.z += 0.3;
        mouse.rotation.x = mouseRotate.x;
        mouse.rotation.y = mouseRotate.y;
        mouse.rotation.z = mouseRotate.z;
    }
    // sea.mesh.rotation.z += .005;
    // sky.mesh.rotation.z += .01;
    // 更新每帧的飞机
    //updatePlane();
    // 渲染场景
    renderer.render(scene, camera);
    // 重新调用 render() 函数
    requestAnimationFrame(loop);
}
let position = {
    move:{x:0,y:0}
}
function itemTouchStart(e) {
    // position.start = getClientPosition(e);
    position.move = getClientPosition(e);
}

function itemTouchMove(e, index) {
    const currentItem = e.target;
    const {
        x,
        y
    } = getClientPosition(e);
    let mx = x - position.move.x
    let my = y - position.move.y
    // HEIGHT, WIDTH
    mouseRotate = {
        x:mouseRotate.x + my/HEIGHT*2,
        y:mouseRotate.y + mx/WIDTH*2,
        z:0
    }
    position.move = {
        x,
        y
    }
}

function itemTouchEnd(e, index) {
    
}
function handleLoadOver(){
    mouse.position.z += 10;
    if(mouse.position.z < 0){
        requestAnimationFrame(handleLoadOver)
    }
}
function getClientPosition(e) {
    return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
    };
}
export default function () {
    // 创建场景，相机和渲染器
    createScene()
    // 添加光源
    createLights()
    //// 添加对象
    createPlane()
    //添加监听器
    // document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('touchstart', itemTouchStart, false);
    document.addEventListener('touchmove', itemTouchMove, false);
    document.addEventListener('touchend', itemTouchEnd, false);
    //// 调用循环函数，在每帧更新对象的位置和渲染场景
    loop()
}