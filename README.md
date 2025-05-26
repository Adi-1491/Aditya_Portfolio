# React + Vite

=> We are using Three.js which helps us in building our 3D portfolio

<Canvas> : canvas tag is the root of our 3D component
-> camera class helps use define near and  far property so near or what to what will not be rendered
-> so we have a loader rendering under canvas, anything under canvas should be 3D, so to convert something to 3D which is not 3D we have 'React 3drei' library

->  The tags <directionalLight />, <ambientLight /> and <hemisphereLight /> are React components provided by the @react-three/fiber library. They represent different types of lights in a 3D scene rendered using Three.js. Here's a brief

-> <directionalLight /> : simulates the sunlight
-> <ambientLight /> : illuminates every object more just like contrast  
-> <hemisphereLight />  : illuminates  scene with a gradient

-> Using SketchFab to find any 3D design

-> In our code, screenScale, screenPosition, and screenRotation are variables used to adjust the scale, position, and rotation of the Island 3D model based on the screen size. These variables are part of the adjustIslandforScreenSize function, which dynamically calculates these values.

Here’s a breakdown of each:

1. screenScale
    Purpose: Determines the size of the Island model.
    Type: An array of three numbers [x, y, z], representing the scale along the X, Y, and Z axes.

    Logic:
    If the screen width is less than 768px (mobile devices), the scale is reduced to [0.9, 0.9, 0.9] (90% of the original size).
    Otherwise, the scale is set to [1, 1, 1] (default size).
    Effect: Makes the Island smaller on smaller screens to ensure it fits well.

2. screenPosition
    Purpose: Determines the position of the Island model in the 3D space.
    Type: An array of three numbers [x, y, z], representing the position along the X, Y, and Z axes.

    Default Value: [0, -6.5, -43]

    x = 0: Centered horizontally.
    y = -6.5: Positioned slightly below the center vertically.
    z = -43: Pushed back into the scene (away from the camera).

    Effect: Controls where the Island appears in the 3D space.

3. screenRotation
    Purpose: Determines the rotation of the Island model.
    Type: An array of three numbers [x, y, z], representing the rotation angles (in radians) around the X, Y, and Z axes.

    Default Value: [0.1, 4.7, 0]

    x = 0.1: Slight tilt forward/backward.
    y = 4.7: Rotated significantly around the Y-axis.
    z = 0: No tilt sideways.

    Effect: Controls the orientation of the Island in the 3D space.

-> <mesh/> : tag represents a 3D object composed of a geometry and a material

-> useGLTF : is a hook provided by the "@react-three/drei library". It is used to load GLTF/GLB 3D models into your React Three.js scene.