import React, {useEffect} from 'react'
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";

import { statusCourses, watchCourses, messageCourses } from "store/actions/courses";

import SidebarClass from 'parts/SidebarClass'

import courses from "constants/api/courses"

import Loading from 'parts/Loading'
import Centered from 'parts/Centered'


const DetailsClass = ({match}) => {
    const dispatch = useDispatch()

    const COURSES = useSelector(state => state.courses)

    useEffect(() => {
        window.scroll(0,0)

        dispatch(statusCourses("loading"))
        courses.details(match.params.class)
        .then(res => {
            if(res.chapters.length === 0)
            throw new Error("Class might be not ready yet")
            else dispatch(watchCourses(res))
        }).catch(err => {
            dispatch(messageCourses(err?.response?.data?.message ?? "error"))
        })
    }, [match.params.class, dispatch])

    if(COURSES.status === "loading")return <Loading/>
    if(COURSES.status === "error")return <Centered>{COURSES?.message ?? "Error Here"}</Centered>

    let currentChapter, currentLessons
    if (
        COURSES.status === "ok" && 
        COURSES?.data?.[match.params.class]?.chapters
    ) {
        currentChapter = COURSES?.data?.[match.params.class]?.chapters?.find(
            (chapter) => +chapter.id === +match.params.class
        ) ?? COURSES.data[match.params.class]?.chapters[0];
        currentLessons = currentChapter?.lessons?.find(
            (lesson) => lesson.video === match.params.uid
        ) ?? currentChapter?.lessons?.[0]
    }

    const nextVideo = () => {
        
    }

    return (
        <div className="flex">
            {COURSES.data?.[match.params.class]?.chapters?.length > 0 && 
            <>
                <SidebarClass 
                 data={COURSES.data[match.params.class]}
                 defaultUri={`/courses/${match.params.class}/${currentChapter.id}/$${currentLessons.video}`}
                />
                <main className="flex-1">
                    <div className="px-16">
                        <section className="flex flex-col mt-8">
                        <h1 className="text-4xl text-gray-900 font-medium">{currentLessons?.name ?? "Lesson Name"}</h1>
                        <p className="text-lg text-gray-600">Materi bagian dari {currentChapter?.name ?? "Chapter Name"}</p>
                        </section>
                        <section className="flex flex-col mt-8">
                            <div className="flex justify-start item-center -mx-4">
                                <div className="w-full px-4">
                                    <div className="relative">
                                        <div className="video-wrapper">
                                            {
                                                currentLessons?.video && 
                                                <YouTube 
                                                 videoId={currentLessons?.video}
                                                 id={currentLessons?.video}
                                                 opts={{
                                                     playerVars: {
                                                         autoplay:1,
                                                         controls: 1,
                                                         showinfo: 0,
                                                         rel:0,
                                                     }
                                                 }}
                                                 onEnd={nextVideo}
                                                >

                                                </YouTube>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </> }
        </div>
    )
}

export default DetailsClass
