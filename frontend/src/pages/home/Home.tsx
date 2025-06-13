import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ClimbingBoxLoader } from 'react-spinners';
import Button from '../../components/buttons/Button.tsx';
import { homeData } from './HomeData.ts';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

    useEffect(() => {
        if (isSplineLoaded) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 500); // Delay to ensure Spline scene is fully rendered

            return () => clearTimeout(timer);
        }
    }, [isSplineLoaded]);

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center p-2 bg-gray-100">
            <div className="relative flex flex-col w-full h-full mt-16">
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ClimbingBoxLoader color="#3C85DA" />
                    </div>
                )}
                <Spline
                    scene={homeData.spline}
                    onLoad={() => setIsSplineLoaded(true)}
                />

                {!isLoading && (
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                        <div className="flex flex-col items-start bg-gray-200 bg-opacity-70 rounded-lg p-5 max-w-[90%] mx-auto">
                            <div className="text-gray-800 w-full">
                                <div>{homeData.title}</div>
                            </div>
                            <div className="text-gray-800 w-full text-xl">
                                <div>{homeData.subtitle}</div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-5 text-sm mt-2 h-8 w-full bg-gray-800 rounded-lg text-white">
                                <Button mode="text" onHover="red" link={homeData.links[0].url}>{homeData.links[0].label}</Button>
                                <Button mode="text" onHover="red" link={homeData.links[1].url}>{homeData.links[1].label}</Button>
                                <Button mode="text" onHover="red" link={homeData.links[2].url} downloadName={homeData.links[2].downloadName}>{homeData.links[2].label}</Button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
