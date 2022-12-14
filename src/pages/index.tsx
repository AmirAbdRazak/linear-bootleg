import {NextPage} from "next";
import TopHeader from "../components/TopHeader";
import SideBar from "../components/SideBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBatteryFull,
    faBatteryHalf,
    faBatteryThreeQuarters,
    faCircleCheck,
    faCircleNodes,
    faEllipsis,
    faExclamationTriangle,
    faListCheck,
    faSpinner,
    faSquare,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";

type IssueListCategoryType = {
    CategoryTitle: "TODO" | "BACKLOG" | "IN PROGRESS" | "IN REVIEW" | "DONE";
}

const IssueListCategory = ({CategoryTitle}: IssueListCategoryType) => {

    let categoryIcon: IconDefinition;

    switch (CategoryTitle) {
        case "TODO":
            categoryIcon = faSquare;
            break;
        case "BACKLOG":
            categoryIcon = faCircleNodes;
            break;
        case "IN PROGRESS":
            categoryIcon = faSpinner;
            break;
        case "IN REVIEW":
            categoryIcon = faListCheck;
            break;
        case "DONE":
            categoryIcon = faCircleCheck;
            break;
    }
    return (
        <div className="inline-flex items-center flex-grow flex-shrink w-full min-w-0 py-1 pl-2 pr-8 text-sm
                        border-b bg-content-category border-content-list h-11">
            <FontAwesomeIcon className="w-5 h-5 pl-6 mr-4 text-content-category" icon={categoryIcon!}/>
            <h3 className="text-base text-content-category tracking-wide font-semibold">{CategoryTitle}</h3>
        </div>
    )
}

type IssueListItemType = {
    Priority: "low" | "medium" | "high" | "urgent" | "none";
    issueDesc: string;
    issueId: string;
    issueCategory: "TODO" | "BACKLOG" | "IN PROGRESS" | "IN REVIEW" | "DONE";
}

const IssueListItem = ({Priority, issueDesc, issueId, issueCategory}: IssueListItemType) => {

    let icon: IconDefinition;
    let color: string;
    let categoryIcon: IconDefinition


    switch (Priority) {
        case "low":
            icon = faBatteryHalf;
            color = "text-red-400"
            break;

        case "medium":
            icon = faBatteryThreeQuarters;
            color = "text-amber-400"
            break;

        case "high":
            icon = faBatteryFull;
            color = "text-emerald-400"
            break;

        case "urgent":
            icon = faExclamationTriangle;
            color = "text-red-400"
            break;
        case "none":
            icon = faEllipsis;
            color = "text-zinc-400"
            break;
    }

    switch (issueCategory) {
        case "TODO":
            categoryIcon = faSquare;
            break;
        case "BACKLOG":
            categoryIcon = faCircleNodes;
            break;
        case "IN PROGRESS":
            categoryIcon = faSpinner;
            break;
        case "IN REVIEW":
            categoryIcon = faListCheck;
            break;
        case "DONE":
            categoryIcon = faCircleCheck;
            break;
    }

    return (
        <div className="inline-flex items-center flex-grow flex-shrink w-full min-w-0 pl-2 pr-8 text-sm
                        border-b border-content-list hover:bg-content-hover py-2 h-11 ">

            <FontAwesomeIcon className={`w-5 h-5 mr-5 pl-6 ${color!}`}
                             icon={icon!}/>
            <div className="w-16 mr-5 items-center">
                <p className="text-base font-semibold text-content-tertiary whitespace-nowrap">
                    {issueId}
                </p>
            </div>
            <FontAwesomeIcon className="hidden w-4 h-4 mr-4 text-content-secondary md:block"
                             icon={categoryIcon!}/>
            <p className="hidden md:block text-base text-content-secondary whitespace-nowrap">{issueDesc}</p>
            <p className="hidden sm:block md:hidden text-base text-content-secondary whitespace-nowrap">
                {
                    issueDesc.length > 60? issueDesc.slice(0, 60) + "...": issueDesc
                }
            </p>
            <p className="sm:hidden text-base text-content-secondary whitespace-nowrap">
                {
                    issueDesc.length > 35? issueDesc.slice(0, 35) + "...": issueDesc
                }
            </p>
        </div>
    )
}

type IssueListContentType = IssueListItemType[]

const IssueList = () => {

    const issueListContent: IssueListContentType = [
        {
            Priority: "low",
            issueId: "DEV-001",
            issueDesc: "Welcome to Linear (Bootleg Version)",
            issueCategory: "TODO"
        },
        {
            Priority: "medium",
            issueId: "DEV-002",
            issueDesc: "This web application is made using the T3 Stack",
            issueCategory: "TODO"
        },
        {
            Priority: "high",
            issueId: "DEV-003",
            issueDesc: "The T3 Stack consists of Next.js, Typescript, tRPC, NextAuth.js, Prisma and Tailwind",
            issueCategory: "TODO"
        },
        {
            Priority: "urgent",
            issueId: "DEV-004",
            issueDesc: "Go check this app out!",
            issueCategory: "TODO"
        },
        {
            Priority: "none",
            issueId: "DEV-005",
            issueDesc: "Created by Amir Razak",
            issueCategory: "TODO"
        },
        {
            Priority: "none",
            issueId: "DEV-006",
            issueDesc: "A lot, I have a lot in the backlog",
            issueCategory: "BACKLOG"
        },
        {
            Priority: "high",
            issueId: "DEV-007",
            issueDesc: "Finish more UI stuff and adding button functionality",
            issueCategory: "BACKLOG"
        },
        {
            Priority: "low",
            issueId: "DEV-008",
            issueDesc: "Add database for dynamic data",
            issueCategory: "BACKLOG"
        },
        {
            Priority: "none",
            issueId: "DEV-009",
            issueDesc: "Refactoring so that it's not fully hardcode",
            issueCategory: "DONE"
        },
        {
            Priority: "none",
            issueId: "DEV-010",
            issueDesc: "Finish the skeleteon of the UI hardcoded and stuff",
            issueCategory: "DONE"
        },
        {
            Priority: "none",
            issueId: "TES-001",
            issueDesc: "Testing OverFlow",
            issueCategory: "DONE"
        },
        {
            Priority: "none",
            issueId: "TES-002",
            issueDesc: "Testing OverFlow",
            issueCategory: "DONE"
        },
        {
            Priority: "none",
            issueId: "TES-003",
            issueDesc: "Testing OverFlow",
            issueCategory: "DONE"
        }
    ]

    const issueCategories: Array<"TODO" | "BACKLOG" | "DONE"> = [
        "TODO", "BACKLOG", "DONE"
    ]


    return (
        <div className="flex flex-col overflow-auto bg-content scrollbar-theme">

            {issueCategories.map(category => {
                return (
                    <>
                        <IssueListCategory CategoryTitle={category}/>

                        {issueListContent.map(content => {
                            if (content.issueCategory == category)
                                return (
                                    <IssueListItem
                                        key={content.issueId}
                                        issueId={content.issueId}
                                        issueCategory={content.issueCategory}
                                        issueDesc={content.issueDesc}
                                        Priority={content.Priority}
                                    />
                                )
                        })}
                    </>
                )
            })
            }
        </div>
    )
}

const Home: NextPage = () => {


    return (
        <div className="flex w-full h-screen overflow-y-hidden bg-content">

            {/*Left SideBar.tsx*/}
            <SideBar
                projectTitle="DevAmir"
            />

            {/*Right Content*/}
            <div className="flex flex-col flex-grow">

                <TopHeader/>

                {/*Main Content*/}
                <IssueList/>
            </div>

        </div>
    )

};


export default Home;
