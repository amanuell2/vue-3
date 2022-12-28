import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: `
     <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"> </assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>
        </section>
        `,
    data() {
        return {
            assginments: [
                {
                    id: 1,
                    name: "Finsh project",
                    complete: false
                },
                {
                    id: 2,
                    name: "Read chapter 4",
                    complete: false
                },
                {
                    id: 3,
                    name: "Turn in homework",
                    complete: false
                }
            ]
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assginments.filter(assignment => !assignment.complete),
                completed: this.assginments.filter(assignment => assignment.complete)
            }
        }
    }
}