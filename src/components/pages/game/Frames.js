import { Html } from "@react-three/drei";

export default function Frames() {
    return (
        <>
            {/* Big frame */}
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ 1.88, 2.18, 6.98 ] }
                rotation-y={ -Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://renaultespace.littleworkshop.fr/"
                style={{
                    width: "1320px",
                    height: "780px",
                }}
            />
            </Html>
            
            {/* Big frame */}
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ 1.89, 2, 13.445 ] }
                rotation-y={ -Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "852px",
                    height: "620px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -0.77, 1.828, 15.94 ] }
                rotation-y={ Math.PI * 1 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://carvisualizer.plus360degrees.com/threejs/"
                style={{
                    width: "548px",
                    height: "512px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.88, 9.92 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://carvisualizer.plus360degrees.com/threejs/"
                style={{
                    width: "586px",
                    height: "540px",
                }}
            />
            </Html>
            
            {/* Small frame */}
            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 2.10, 7.59 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://earth.plus360degrees.com/"
                style={{
                    width: "739px",
                    height: "720px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.73, 5.435 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "430px",
                    height: "430px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.73, 5.435 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "430px",
                    height: "430px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.78, 3.46 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "477px",
                    height: "477px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.78, -3.462 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "477px",
                    height: "477px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 1.74, -5.43 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "420px",
                    height: "420px",
                }}
            />
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={ 1 }
                position={ [ -1.96, 2.12, -7.59 ] }
                rotation-y={ Math.PI * 0.5 }
                rotation-z={ 0 }
            >
            <iframe 
                src="https://www.fullerton.edu"
                style={{
                    width: "720px",
                    height: "700px",
                }}
            />
            </Html>




        </>
    )
}