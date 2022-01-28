import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import MinimalMonkeys from './MinimalMonkeys'
import WebScroll from './Webscroll'
import { ScrollControls } from '@react-three/drei'
import 'modern-normalize'
import '@chris-cross-crash/ck-css'

function App() {
  return (
    <div id='three-wrapper'>
      <Canvas camera={{ fov: 55 }} gl={{ physicallyCorrectLights: true }}>
        <ScrollControls pages={3}>
          <Suspense fallback={null}>
            {/* <MinimalMonkeys /> */}
            <WebScroll />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
