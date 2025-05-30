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

-> Explanation:
                e.touches:

                This checks if the event (e) is a touch event (like on a mobile device).
                If it is a touch event, e.touches[0].clientX gets the X-coordinate of the first touch point.
                e.clientX:

                If the event is a mouse event (like on a desktop), e.clientX gets the X-coordinate of the mouse pointer.
                lastX.current = clientX;:

                This saves the X-coordinate (from either touch or mouse) into the lastX reference.
                lastX is a useRef variable, which is used to store values that persist across renders without causing re-renders.

    This code is used to track the starting position of the pointer when the user begins interacting with the 3D model. It helps in implementing features like dragging or rotating the model based on the user's pointer movement.

-> This snippet is part of the `handlePointerUp` function in your Island.jsx file. It calculates how much the user's pointer (mouse or touch) has moved horizontally and uses that movement to rotate the 3D island model.

---

### Explanation:

1. **`const delta = (clientX - lastX.current) / viewport.width;`**
   - **`clientX`**: The current X-coordinate of the pointer (mouse or touch).
   - **`lastX.current`**: The previous X-coordinate of the pointer (stored earlier when the user started interacting).
   - **`viewport.width`**: The width of the screen or viewport.
   - **Purpose**: Calculates the relative movement of the pointer across the screen. The difference between the current and previous X-coordinates (`clientX - lastX.current`) is divided by the screen width to normalize the movement.

---

2. **`islandRef.current.rotation.y += delta * 0.01 * Math.PI;`**
   - **`islandRef.current.rotation.y`**: Refers to the rotation of the island model around the Y-axis (horizontal rotation).
   - **`delta * 0.01 * Math.PI`**: Converts the pointer movement into a rotation value. The `Math.PI` ensures the rotation is in radians (used in Three.js).
   - **Purpose**: Updates the island's rotation based on how far the pointer moved.

---

3. **`lastX.current = clientX;`**
   - **Purpose**: Updates `lastX.current` to the current pointer position (`clientX`). This ensures the next movement calculation starts from the current position.

---

4. **`roatationSpeed.current = delta * 0.01 * Math.PI;`**
   - **Purpose**: Stores the calculated rotation speed based on the pointer movement. This can be used later for smooth animations or damping effects.

---

### What Happens:
- When the user releases the pointer (mouse or touch), the code calculates how far the pointer moved horizontally (`delta`).
- It uses this movement to rotate the island model around the Y-axis (`rotation.y`), making it appear as though the user is spinning the island.
- The rotation speed (`roatationSpeed.current`) is saved for potential use in animations or inertia effects.

---

### Example:
- If the user moves the pointer from **X = 100** to **X = 300** on a screen with a width of **1000**:
  - `delta = (300 - 100) / 1000 = 0.2`
  - The island rotates by `0.2 * 0.01 * Math.PI ≈ 0.00628 radians`.

This creates a smooth and interactive rotation effect for the island model.

Example:
If the user moves the pointer from X = 100 to X = 300 on a screen with a width of 1000:
delta = (300 - 100) / 1000 = 0.2
The island rotates by 0.2 * 0.01 * Math.PI ≈ 0.00628 radians.

-> This code defines a Bird component that loads a 3D bird model from a file (bird.glb) and plays an animation when the component is displayed. Here's a simple explanation of how it works:

1. Loading the 3D Model and Animations
useGLTF(birdScene): Loads the 3D bird model and its animations from the bird.glb file.
scene: The 3D model of the bird.
animations: The animation data (e.g., flapping wings).
2. Creating a Reference for the Bird
useRef(): Creates a reference (birdref) to the bird's 3D object in the scene.
This reference allows you to directly control the bird (e.g., play animations) without causing React to re-render.
3. Linking Animations to the Bird
useAnimations(animations, birdref): Connects the animations to the bird's 3D object.
actions: Contains all the animations from the model, which can be controlled (e.g., play, pause).
4. Playing the Animation
useEffect: Runs this code when the component is first displayed.
actions['Take 001'].play(): Starts the animation named 'Take 001' (e.g., the bird flapping its wings).
5. Rendering the Bird
<mesh>: Represents the bird in the 3D scene.
position={[-5, 2, 1]}: Places the bird at a specific location in the scene.
scale={[0.003, 0.003, 0.003]}: Scales the bird down to make it smaller.
ref={birdref}: Links the bird's 3D object to the birdref reference.
<primitive object={scene} />: Renders the actual 3D bird model.
What Happens:
The bird model is loaded from the bird.glb file.
A reference (birdref) is created to control the bird.
The animation 'Take 001' (e.g., flapping wings) starts playing when the component is displayed.
The bird is positioned, scaled, and rendered in the 3D scene.
This setup ensures the bird is animated and properly displayed in your 3D portfolio.