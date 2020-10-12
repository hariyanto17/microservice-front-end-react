import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as ArrowBack } from "assets/images/icon-arrow-back.svg";

const SidebarClass = ({match, data, defaultUri}) => {

    const getNavLinkClass = (path) => {
        return match.url === path || defaultUri === path ? "text-teal-500" : "text-indigo-500"
    }

    const list = []
    data.chapters.forEach((chapter, index) => {
        list.push(
            <li key={`${chapter.course_id}-${index}`}>
                <span className="nav-header relative block py-3 px-5 text-white text-left">
                    {chapter?.name ?? "Chapter Name"}
                </span>
            </li>
        )
        if(chapter?.lessons.length > 0){
            chapter.lessons.forEach((lessons, index2) => {
                list.push(
                    <li key={`${chapter.course_id}-${lessons.id}-${index2}`}>
                        <Link 
                            className={[
                            "relative flex items-center py-3 px-5 hover:text-white transition-all duration-200 w-full text-left truncate ...",
                            getNavLinkClass(
                                `/courses/${data.id}/${chapter.id}/${lessons.video}`
                            ),
                            ].join(" ")}
                            to={`/courses/${data.id}/${chapter.id}/${lessons.video}`}
                        >
                        {lessons?.name ?? "Lessons Name"}
                        </Link>
                    </li>
                )
            })
        }
    })



    return (
        <aside className="bg-indigo-1000 max-h-screen h-screen overflow-auto" style={{width : 280}} >
            <div className="bg-indigo-1000 max-h-screen h-screen flex flex-col content-between" style={{width : 280}}>
            <ul className="main-menu mt-12">
                <li>
                    <Link 
                        className="relative flex item-center py-3 px-5 w-full text-left text-white mb-12" 
                        to="/"
                    >
                        <ArrowBack className="fill-white mr-2" ></ArrowBack>
                        Back to home
                    </Link>
                </li>
                {list}
            </ul>
            </div>
        </aside>
    )
}

export default withRouter(SidebarClass)
