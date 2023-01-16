export default {
    template: `
          <li>
                <label class="p-2 flex justify-between align-center">
                    {{assignment.name}}
                    <input type="checkbox" class="ml-4" v-model="assignment.complete">
                </label>
          </li>
    `,
    props: {
        assignment: Object
    }
}