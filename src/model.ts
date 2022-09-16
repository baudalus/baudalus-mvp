
export interface Task {
    title: string
    description: string
    assignee?: Company
    target?: WorldObject
    status: "todo" | "doing" | "done" | "accepted"

    dependencies: Task[]
}

interface WorldObject {
    children: WorldObject[]
}

interface StatusReport {

}

interface Company {
    name: string
}

interface TaskProve {

}




interface Project {
    name: string
    tasks: Task[]
}



const fakeData = {
    "projects": [


    ]
}
