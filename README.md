# React + Vite

=> We are using Three.js which helps us in building our 3D portfolio

<Canvas> : canvas tag is the root of our 3D component
-> camera class helps use define near and  far property so near or what to what will not be rendered
-> so we have a loader rendering under canvas, anything under canvas should be 3D, so to convert something to 3D which is not 3D we have 'React 3drei' library

->The tags <directionalLight />, <ambientLight />, <pointLight />, <spotLight />, and <hemisphereLight /> are React components provided by the @react-three/fiber library. They represent different types of lights in a 3D scene rendered using Three.js. Here's a brief