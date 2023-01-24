import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "../../AssignmentCreate.js";
export default {
    components: { AssignmentList,AssignmentCreate },
    template: `
     <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>
      <AssignmentCreate @add="add"/> 
     </section>
        `,
    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: "Finish project",
                    complete: false,
                    tag:'math'
                },
                {
                    id: 2,
                    name: "Read chapter 4",
                    complete: false,
                    tag:'science'
                },
                {
                    id: 3,
                    name: "Turn in homework",
                    complete: false,
                    tag:'biology'
                }
            ],
           
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        },
        add(assignment) {
            if(assignment.length<1) return
            this.assignments.push({
                name: assignment,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }
}