class Task {
    done: boolean = false;

    constructor(public description: string, public priority: string){}

    markDone(){
        this.done = true;
    }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'medium'));
tasks.push(new Task('Buy Chocolate', 'high'));
tasks.push(new Task('Do the laundry', 'low'));

tasks[0].markDone();

for(var task of tasks){
    console.log(task);
}
