import Project from "./Project.tsx";
import ProjectsData from "./ProjectsData.ts";

export default function Projects() {
    return (
        <>
            <div className="h-screen w-full flex flex-col p-2 bg-gray-100">
                <div className="mt-16 flex flex-col justify-start items-center gap-2 h-full w-full overflow-y-auto snap-y snap-mandatory">
                    <Project
                        image={"/visualalgoflow.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[0]}
                    />
                    <Project
                        image={"/tarokotodo.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[1]}
                    />
                    <Project
                        image={"/BM-Home.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[2]}
                    />
                    <Project
                        image={"/yab.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[3]}
                    />
                    <Project
                        image={"/kimchinc.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[4]}
                    />
                    <Project
                        image={"/js.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[5]}
                    />
                    <Project
                        image={"/ansm.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[6]}
                    />
                </div>
            </div>
        </>
    );
}
