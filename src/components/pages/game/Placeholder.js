export default function Placeholder (props){

    return <mesh {...props}> 
    <boxGeometry args={[10, 10, 10, 15, 15, 15]} />
    <meshBasicMaterial wireframe color = "red"/>
</mesh>
}