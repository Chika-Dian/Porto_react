// src/components/Lanyard.jsx
'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

const BASE = process.env.PUBLIC_URL || "";
const CARD_GLB_PATH = `${BASE}/assets/card.glb`;
const LANYARD_PNG_PATH = `${BASE}/assets/lanyard.png`;

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ transparent = true }) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={
        <div className="absolute inset-0 bg-black text-white flex justify-center items-center z-50 text-xl">
          Loading 3D...
        </div>
      }>
        <Canvas
          camera={{ position: [0, 1, 8], fov: 50 }}
          gl={{ alpha: transparent }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics gravity={[0, -25, 0]} timeStep={1/60}>
            <Band />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}

function Band({ maxSpeed=50, minSpeed=0 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const { nodes, materials } = useGLTF(CARD_GLB_PATH);
  const texture = useTexture(LANYARD_PNG_PATH);

  const [curve] = useState(() =>
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3()
    ])
  );

  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  useRopeJoint(fixed, j1, [[0,0,0],[0,0,0],1]);
  useRopeJoint(j1, j2, [[0,0,0],[0,0,0],1]);
  useRopeJoint(j2, j3, [[0,0,0],[0,0,0],1]);
  useSphericalJoint(j3, card, [[0,0,0],[0,1.5,0]]);

  useEffect(() => {
    if(hovered) document.body.style.cursor = dragged ? 'grabbing' : 'grab';
    return () => document.body.style.cursor = 'auto';
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if(dragged){
      vec.set(state.pointer.x,state.pointer.y,0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card,j1,j2,j3,fixed].forEach(ref=>ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }

    if(fixed.current){
      [j1,j2].forEach(ref=>{
        if(!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta*(minSpeed + clampedDistance*(maxSpeed-minSpeed)));
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y*0.25,
        z: ang.z
      });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0,5,0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed"/>
        <RigidBody ref={j1} position={[0.5,0,0]} {...segmentProps}><BallCollider args={[0.1]}/></RigidBody>
        <RigidBody ref={j2} position={[1,0,0]} {...segmentProps}><BallCollider args={[0.1]}/></RigidBody>
        <RigidBody ref={j3} position={[1.5,0,0]} {...segmentProps}><BallCollider args={[0.1]}/></RigidBody>

        <RigidBody ref={card} position={[2,0,0]} {...segmentProps} type={dragged?'kinematicPosition':'dynamic'}>
          <CuboidCollider args={[0.8,1.125,0.01]}/>
          <group
            scale={2.25} position={[0,-1.2,-0.05]}
            onPointerOver={()=>hover(true)}
            onPointerOut={()=>hover(false)}
            onPointerUp={e=>{e.target.releasePointerCapture(e.pointerId); drag(false);}}
            onPointerDown={e=>{e.target.setPointerCapture(e.pointerId); drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));}}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.9} metalness={0.8}/>
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal}/>
            <mesh geometry={nodes.clamp.geometry} material={materials.metal}/>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall?[1000,2000]:[1000,1000]}
          useMap map={texture} repeat={[-4,1]} lineWidth={1}
        />
      </mesh>
    </>
  );
}
