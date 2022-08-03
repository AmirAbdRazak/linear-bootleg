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
        <div className={`flex group items-center ${isChild ? "pl-12" : "pl-8"} h-7 rounded-md hover:bg-sidebar-hover`}>
            {iconName && <FontAwesomeIcon className="w-3.5 h-3.5 mr-2 text-sidebar-secondary"
                                          icon={iconName}/>}
            {isChild && <span className="flex w-2 h-3 mr-2 items-center text-sidebar-secondary">-</span>}
            <span className="text-sidebar-secondary hover:text-sidebar-main">{title}</span>
        </div>
    )
}

type SideBarType = {
    projectTitle: string;
}

const SideBar = ({projectTitle}: SideBarType) => {
    return (
        <div className="lg:static inset-0 lg:relative lg:translate-x-0  flex flex-col bg-sidebar
                flex-shrink-0 w-56 text-sm text-white border-r border-content-list lg:shadow-none items-start
                hidden lg:block">

            {/*Project Name and PFP*/}
            <div className="flex items-center px-4 pt-2 pb-4 justify-between w-full">

                {/*Project Name*/}
                <div
                    className="flex space-x-3 cursor-default justify-start items-center hover:bg-sidebar-hover
                     rounded-lg p-2">
                    {/*Project Abbreviation Badge*/}
                    <div className="inline-flex bg-sky-500 rounded-md items-center">
                        <h3 className="text-sm p-0.5 text-sidebar-main">DE</h3>
                    </div>

                    {/*Project Name*/}
                    <div className="inline-flex">
                        <h3 className="text-base text-sidebar-main">{projectTitle}</h3>
                    </div>
                </div>

                {/*Profile Picture*/}
                <div className="flex justify-end items-center p-1 rounded-md hover:bg-sidebar-hover">
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
                <div className="flex group rounded-md bg-sidebar-button items-center space-x-2 border-2 border-sidebar-button
                     justify-start hover:border-sidebar-button-hover cursor-pointer">
                    <FontAwesomeIcon className="pl-2 pr-1 text-sidebar-button group-hover:text-sidebar-button-hover"
                                     icon={faPenToSquare}/>
                    <h3 className="text-sidebar-button py-1 pr-10 group-hover:text-sidebar-button-hover">New Issue</h3>
                </div>
                <div className="group flex rounded-md bg-sidebar-button items-center border-2 border-sidebar-button p-1.5
                    hover:border-sidebar-button-hover cursor-pointer">
                    <FontAwesomeIcon className="text-sidebar-button group-hover:text-sidebar-button-hover"
                                     icon={faMagnifyingGlass}/>
                </div>
            </div>

            {/*Project Title and Issues*/}
            <div className="flex flex-col w-full mt-6 pl-4 pr-2 cursor-default">
                {/*Your Teams*/}
                <div className="flex group hover:bg-sidebar-hover items-center
                            space-x-2 py-0.5 pl-2 pr-20 rounded-lg">
                    <h3 className="inline-flex text-sidebar-muted text-xs group-hover:text-sidebar-tertiary">
                        Your Teams</h3>
                    <FontAwesomeIcon className="inline-flex text-xs hidden group-hover:block
                    group-hover:text-sidebar-tertiary"
                                     icon={faChevronDown}/>
                </div>
                {/*Project Title*/}
                <div className="relative group w-full mt-0.5 h-7 flex hover:bg-sidebar-hover items-center rounded-md
                        py-0.5 px-2 justify-between">
                    <div className="inline-flex space-x-2 items-center pr-16">
                        <FontAwesomeIcon className="inline-flex text-sky-500 text-xs" icon={faUser}/>
                        <h3 className="flex text-sidebar-secondary font-semibold"> {projectTitle} </h3>
                        <FontAwesomeIcon className="inline-flex text-xs text-sidebar-secondary"
                                         icon={faChevronDown}/>
                    </div>
                    <div className="inline-flex pl-1">
                        <FontAwesomeIcon className="hidden group-hover:block group-hover:text-sidebar-secondary"
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