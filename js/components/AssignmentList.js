import Assignment from "./Assignment.js"
import AssignmentTag from "./AssignmentTag.js"
import Panel from "./Panel.js"
export default {
    components: { Assignment, AssignmentTag, Panel },
    template: `
        <Panel v-show="assignments.length" class="w-68">
                <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{title}}
                <span>({{assignments.length}})</span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
                </div>
                <assignment-tag 
                :initial-tags="assignments.map(a=>a.tag)" 
               v-model:currentTag="currentTag"/>
                
                <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <Assignment
                 v-for="assignment in filteredAssignments" 
                 :assignment="assignment" 
                 :key="assignment.id"
                 > </Assignment>
                </ul>
               <slot> </slot>

               <template v-slot:footer>
                    well this is a footer     
            </template>
        </Panel>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },
    data() {
        return { currentTag: "all" }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === "all") {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
    }
}