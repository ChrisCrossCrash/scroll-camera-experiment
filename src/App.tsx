import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import MinimalMonkeys from './MinimalMonkeys'

function App() {
  return (
    <div id='three-wrapper'>
      <Canvas camera={{ fov: 55 }}>
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={null}>
          <MinimalMonkeys />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
