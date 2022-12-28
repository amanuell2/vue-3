import Assignment from "./Assignment.js"
export default {
    components: { Assignment },
    template: `
        <section v-show="assignments.length">
                <h2 class="font-bold mb-2">{{title}}</h2>
                <ul>
                <Assignment v-for="assignment in assignments" :assignment="assignment" :key="assignment.id"> </Assignment>
                </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}