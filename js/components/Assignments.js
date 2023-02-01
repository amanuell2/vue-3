import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "../../AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
     <section class="grid gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
        <AssignmentCreate @add="add"/> 
        </assignment-list>
        <assignment-list
         v-if="showCompleted"
         :assignments="filters.completed"
          title="Completed" 
          can-toggle 
          @toggle="showCompleted = !showCompleted"
          > </assignment-list>
        </section>
        `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    created() {
        fetch('http://localhost:3001/assignments').then(response => response.json()).then(data => {
            console.log(data)
            this.assignments.push(...data)
        })
    },
    methods: {
        toggle() {
            this.active = !this.active
        },
        add(assignment) {
            if (assignment.length < 1) return
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