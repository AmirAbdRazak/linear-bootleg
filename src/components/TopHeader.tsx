import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBarsProgress,
    faBoxArchive,
    faChevronDown,
    faCircleNodes,
    faGripVertical,
    faList,
    faPlus,
    faSliders,
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {useState} from "react";

const DropdownMenuIssues = () => {

    type DropDownItemType = {
        title: "Active" | "Backlog" | "All Issues" | "Archives"
    }
    const DropdownItem = ({title}: DropDownItemType) => {

        let icon: IconDefinition;

        switch (title) {
            case "Active":
                icon = faSquare;
                break;
            case "Backlog":
                icon = faCircleNodes;
                break;
            case "All Issues":
                icon = faList;
                break;
            case "Archives":
                icon = faBoxArchive;
                break;
            default:
                console.log("Something wrong happened with the dropdown items")
        }

        return (
            <div className="flex items-center py-2 pr-6 rounded-md hover:bg-zinc-700">
                <FontAwesomeIcon className="text-sm px-4" icon={icon!}/>
                <p className="text-sm whitespace-nowrap">{title}</p>
            </div>
        )
    }

    return (
        <div className="dropdownMenuIssues absolute z-30 flex flex-col bg-zinc-800 shadow-lg rounded-md top-8 right-0">
            <DropdownItem title="Active"/>
            <DropdownItem title="Backlog"/>
            <DropdownItem title="All Issues"/>
            <DropdownItem title="Archives"/>
        </div>
    )
}

const LeftSide = () => {

    const [isClicked, setClicked] = useState(false);

    function toggleClicked() {
        setClicked(prevState => !prevState);
    }

    return (
        <div className="flex relative justify-start space-x-6 items-center">

            {/*Active Issues Button*/}
            <div className="relative flex px-2 py-1 rounded-md items-center space-x-2 hover:bg-zinc-800 cursor-pointer"
                 onClick={toggleClicked}>
                <h3 className="text-sm">Active Issues</h3>
                <FontAwesomeIcon className="text-xs group-hover:text-white text-zinc-400 text-zinc-300"
                                 icon={faChevronDown}/>

                {/*Dropdown Menu*/}
                {isClicked &&
                    <>
                        <DropdownMenuIssues/>
                    </>
                }
            </div>


            {/*Projects Button*/}
            <div className="flex group border-2 px-2 py-1 border-zinc-800 rounded-lg bg-zinc-800
                            items-center cursor-pointer hover:bg-zinc-700 hover:border-zinc-700">
                <FontAwesomeIcon className="group-hover:text-white text-zinc-300 text-xs pr-2"
                                 icon={faBarsProgress}/>
                <p className="group-hover:text-white text-zinc-300 text-xs">Projects</p>
            </div>

            {/*Filter Button*/}
            <div className="flex group border-2 border-dashed pl-4 py-1 border-zinc-800 rounded-lg
                                items-center cursor-pointer hover:border-solid hover:border-zinc-600">
                <FontAwesomeIcon className="text-zinc-400 text-xs group-hover:text-white"
                                 icon={faPlus}/>
                <p className="pl-2 pr-4 text-xs text-zinc-400 group-hover:text-white">Filter</p>
            </div>

            {isClicked && <div className="fixed w-full h-full right-0 top-0 z-10" onClick={toggleClicked}> </div>}

        </div>
    )
}

const RightSide = () => {
    return (
        <div className="flex justify-end space-x-4">

            {/*Grid/List/Compact View Option*/}
            <div className="flex items-center border-2 hover:bg-zinc-800 hover:bg-opacity-50 border-zinc-800
                    rounded-lg cursor-pointer">
                <FontAwesomeIcon className="bg-zinc-800 py-1.5 rounded-sm px-2 text-xs text-zinc-400"
                                 icon={faList}/>
                <FontAwesomeIcon className="rounded-sm px-2 text-xs text-zinc-400 hover:text-white"
                                 icon={faGripVertical}/>
            </div>

            {/*View Option*/}
            <div className="flex items-center space-x-2 group border-2 px-2 py-1 border-zinc-800
                        bg-zinc-800 cursor-pointer hover:bg-zinc-700 hover:border-zinc-700 rounded-lg ">
                <FontAwesomeIcon className="text-xs group-hover:text-white text-zinc-300 text-zinc-300"
                                 icon={faSliders}/>
                <h3 className="text-xs text-zinc-400 group-hover:text-white">View</h3>
                <FontAwesomeIcon className="text-xs group-hover:text-white text-zinc-400 text-zinc-300"
                                 icon={faChevronDown}/>
            </div>
        </div>
    )
}

const TopHeader = () => {
    return (
        <div className="flex py-3 space-x-4 justify-between flex-shrink-0 border-b border-zinc-800 md:h-14
                     px-6 items-center">

            {/*Left Side of Top Header*/}
            <LeftSide/>

            {/*Right Side of Top Header*/}
            <RightSide/>
        </div>
    )
}

export default TopHeader;