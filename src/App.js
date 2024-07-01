// import { Canvas, useLoader } from '@react-three/fiber'
// import { useHelper } from '@react-three/drei'
// import { useRef } from 'react'
// import { DirectionalLightHelper } from 'three'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Home } from './pages'

// function Model(props) {
//   const glb = useLoader(GLTFLoader, '/models/earth.glb') // 경로는 models부터 작성
//   console.log(glb)
//   // glb.scene.position.x = 1
//   // glb.scene.rotation.y = 1
//   return (
//     <mesh {...props}>
//       <primitive object={glb.scene} />
//     </mesh>
//   )
// }

// function Lights() {
//   // const ref = useRef()
//   // useHelper(ref, DirectionalLightHelper, 1, "red")
//   // 첫번째 인자 : 요소, 두번째 인자 : 확인하려는 빛의 Helper, 세번째 인자 : Helper의 크기, 네번째 인자 : 색상
//   return (
//     // <directionalLight ref={ref} position={[1, 3, -1]} intensity={3} />
//     <directionalLight position={[1, 3, -1]} intensity={3} />
//   )
// }

// function Box(props) {
//   return (
//     <mesh {...props}>
//       <boxGeometry args={[1]} />
//       {/* <meshBasicMaterial color={"hotpink"} /> */}
//       {/* 
//         meshBasicMaterial은 그림자를 받지 않는다
//         그림자를 적용하려면 Standard로 변경해야한다
//       */}
//       <meshStandardMaterial color={"hotpink"} wireframe />
//     </mesh>
//   )
// }

function App() {
  return (
    <>
      <Home />
    </>
    // <Canvas camera={{position: [0, 1, 5]}}>
    //   {/* <color attach="background" args={[0, 1, 0]}></color> */}
    //   {/* 숫자가아닌 문자열로 색상을 지정 가능 */}
    //   <color attach="background" args={["yellow"]}></color>
    //   {/* <Box rotation-y={1} />
    //   <Box position={[0, 0, -1.5]} rotation-y={1} /> */}
    //   <Lights />
    //   <Model position={[0, -2, 0]} />
    // </Canvas>
  );
}

export default App;