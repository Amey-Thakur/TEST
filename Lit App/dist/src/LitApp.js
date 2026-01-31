import { __decorate } from "tslib";
import { html, LitElement, property } from 'lit-element';
export class LitApp extends LitElement {
    constructor() {
        super(...arguments);
        this.todos = [];
        this.todoText = '';
    }
    connectedCallback() {
        super.connectedCallback();
        const existingTodos = localStorage.getItem('todos');
        this.todos = JSON.parse(existingTodos) || [];
    }
    addTodo(event) {
        event.preventDefault();
        console.log(this.todoText, event);
        this.todos = [...this.todos, this.todoText];
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    render() {
        return html `

    <ul>
      ${this.todos.map(todo => html `<li>${todo}</li>`)}
    </ul>

      <form @submit="${this.addTodo}">
        <input type="text" .value="${this.todoText}" @change=${(e) => this.todoText = e.target.value} />
        <input type="submit">
      </form>
    `;
    }
}
__decorate([
    property({ type: Array })
], LitApp.prototype, "todos", void 0);
__decorate([
    property({ type: String })
], LitApp.prototype, "todoText", void 0);
//# sourceMappingURL=LitApp.js.map