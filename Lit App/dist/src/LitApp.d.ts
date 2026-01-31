import { LitElement } from 'lit-element';
export declare class LitApp extends LitElement {
    todos: string[];
    todoText: string;
    connectedCallback(): void;
    addTodo(event: Event): void;
    render(): import("lit-element").TemplateResult;
}
