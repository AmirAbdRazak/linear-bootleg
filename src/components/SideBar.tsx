import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faEllipsis,
    faLayerGroup,
    faMagnifyingGlass,
    faPenToSquare,
    faTriangleExclamation,
    faUser,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import testAvatar from '../temp/img/avatarRyz.png'


type BarItemType = {
    title: string;
    iconName?: IconDefinition;
    isChild?: boolean;
}

const BarItem = ({title, iconName, isChild = false}: BarItemType) => {
    return (
        <div className={`flex group items-center ${isChild ? "pl-12" : "pl-8"} h-7 rounded-md hover:bg-zinc-800`}>
            {iconName && <FontAwesomeIcon className="w-3.5 h-3.5 mr-2 text-zinc-300"
                                          icon={iconName}/>}
            {isChild && <span className="flex w-2 h-3 mr-2 items-center">-</span>}
            <span>{title}</span>
        </div>
    )
}

type SideBarType = {
    projectTitle: string;
}

const SideBar = ({projectTitle}: SideBarType) => {
    return (
        <div className="lg:static inset-0 lg:relative lg:translate-x-0  flex flex-col
                flex-shrink-0 w-56 text-sm text-white border-r border-zinc-800 lg:shadow-none items-start
                hidden lg:block">

            {/*Project Name and PFP*/}
            <div className="flex items-center px-4 pt-2 pb-4 justify-between w-full">

                {/*Project Name*/}
                <div
                    className="flex space-x-3 cursor-default justify-start items-center hover:bg-zinc-800 rounded-lg p-2">
                    {/*Project Abbreviation Badge*/}
                    <div className="inline-flex bg-sky-500 rounded-md items-center">
                        <h3 className="text-sm p-0.5">DE</h3>
                    </div>

                    {/*Project Name*/}
                    <div className="inline-flex">
                        <h3 className="text-base">{projectTitle}</h3>
                    </div>
                </div>

                {/*Profile Picture*/}
                <div className="flex justify-end items-center p-1 rounded-md hover:bg-zinc-700">
                    <Image
                        className="rounded-full"
                        src={testAvatar}
                        alt="PFP"
                        width={36}
                        height={36}
                    />
                </div>
            </div>

            {/*Create New and Search Button*/}
            <div className="flex items-center justify-between pl-6 pr-4 w-full">
                <div className="flex rounded-md bg-zinc-800 items-center space-x-2 border-2 border-zinc-700
                     justify-start hover:border-zinc-600 cursor-pointer">
                    <FontAwesomeIcon className="pl-2 pr-1" icon={faPenToSquare}/>
                    <h3 className="text-zinc-400 py-1 pr-10 hover:text-white">New Issue</h3>
                </div>
                <div className="flex rounded-md bg-zinc-800 items-center border-2 border-zinc-700 p-1.5
                    hover:border-zinc-600 cursor-pointer">
                    <FontAwesomeIcon className="text-zinc-400 hover:text-white" icon={faMagnifyingGlass}/>
                </div>
            </div>

            {/*Project Title and Issues*/}
            <div className="flex flex-col w-full mt-6 pl-4 pr-2 cursor-default">
                {/*Your Teams*/}
                <div className="flex group hover:bg-zinc-800 items-center
                            space-x-2 py-0.5 pl-2 pr-20 rounded-lg">
                    <h3 className="inline-flex text-zinc-500 text-xs group-hover:text-zinc-400">Your Teams</h3>
                    <FontAwesomeIcon className="inline-flex text-xs text-zinc-900 group-hover:text-zinc-400"
                                     icon={faChevronDown}/>
                </div>
                {/*Project Title*/}
                <div className="relative group w-full mt-0.5 h-7 flex hover:bg-zinc-800 items-center rounded-md
                        py-0.5 px-2 justify-between">
                    <div className="inline-flex space-x-2 items-center pr-16">
                        <FontAwesomeIcon className="inline-flex text-sky-500 text-xs" icon={faUser}/>
                        <h3 className="flex text-zinc-300 font-semibold"> {projectTitle} </h3>
                        <FontAwesomeIcon className="inline-flex text-xs text-zinc-300"
                                         icon={faChevronDown}/>
                    </div>
                    <div className="inline-flex pl-1">
                        <FontAwesomeIcon className="text-zinc-900 group-hover:text-zinc-400"
                                         icon={faEllipsis}/>
                    </div>
                </div>
                {/*Issues and Others...*/}
                <BarItem
                    title="Issue"
                    iconName={faTriangleExclamation}
                />
                <BarItem
                    title="Active"
                    isChild={true}
                />
                <BarItem
                    title="Backlog"
                    isChild={true}
                />
                <BarItem
                    title="Views"
                    iconName={faLayerGroup}
                />
            </div>

        </div>
    )
}

export default SideBar;