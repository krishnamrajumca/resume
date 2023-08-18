import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import { Html, useProgress, Text } from '@react-three/drei'
// import CanvasLoader from "../Loader";
import krishna from '../assets/images/e.png'
import { Typography, Grid } from "@mui/material";
const Ball = ({ icon }) => {
    const [decal] = useTexture([icon]);
    const [decal1] = useTexture([krishna]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={6.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.5}>
                <sphereGeometry />
                <meshStandardMaterial
                    color='#fff'
                    map={decal1}
                // polygonOffset
                // polygonOffsetFactor={-5}
                // flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />

            </mesh>

        </Float>
    );
};

const BallCanvas = ({ icon, id }) => {
    return (
        <Canvas
            frameloop='demand'
            id={id}
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>

            <Typography
                sx={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "cursive"
                }}
            >
                {progress.toFixed(2)}%
            </Typography>

        </Html>
    )
}
