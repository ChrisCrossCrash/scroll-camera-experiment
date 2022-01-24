/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

interface GLTFAction extends THREE.AnimationClip {
  name: 'CameraAction'
}

type GLTFResult = GLTF & {
  nodes: {
    Suzanne: THREE.Mesh
    Suzanne001: THREE.Mesh
    Suzanne002: THREE.Mesh
  }
  animations: GLTFAction[]
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, animations } = useGLTF(
    '/MinimalMonkeys-transformed.glb'
  ) as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)

  useEffect(() => {
    actions.CameraAction!.play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name='Camera'
        position={[0, 0, 9.59]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <PerspectiveCamera
          name='Camera_Orientation'
          makeDefault={true}
          far={100}
          near={0.1}
          fov={22.9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        name='Suzanne'
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
      />
      <mesh
        name='Suzanne001'
        geometry={nodes.Suzanne001.geometry}
        material={nodes.Suzanne001.material}
        position={[0, -3, 0]}
      />
      <mesh
        name='Suzanne002'
        geometry={nodes.Suzanne002.geometry}
        material={nodes.Suzanne002.material}
        position={[0, -6, 0]}
      />
    </group>
  )
}

useGLTF.preload('/MinimalMonkeys-transformed.glb')