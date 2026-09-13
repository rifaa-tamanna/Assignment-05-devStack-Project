# Dev Stack

A simple and interactive web application where users can explore different technologies and build their own development stack by selecting technologies from different categories.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Icons
* React Toastify
* JSON
* Vite

## Features

### 1. Explore Technologies

Users can explore different technologies from frontend, backend, database, and other categories.

### 2. Build Your Own Stack

Users can add technologies to their personal stack and see all selected technologies in one place.

### 3. Add & Remove Technologies

Users can add technologies to their stack, remove individual technologies, or remove all selected technologies at once.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create UI components easily.

---

## 2. What is the difference between props and state?

**Props** are used to send data from a parent component to a child component.

**State** is used to store and manage data that can change inside a component.

For example, in this project, `technologies` and functions are passed as props, while `addTech` is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store data that can change over time.

I used `useState` in the `Technologies` component to store the selected technologies:

```tsx
const [addTech, setAddTech] = useState<ITechnologies[]>([]);
```

When a user adds or removes a technology, the state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook that runs code after a component renders. It is commonly used for side effects such as fetching data.

In this project, the JSON data is loaded using a Promise and React's `use()` function, so I did not need `useEffect` to load the JSON data.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed.

In this project, I used:

```tsx
key={ind}
```

for the technology cards.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it to show the empty stack message when no technology is selected:

```tsx
{addTech.length === 0 ? (
  <p>Your Stack is empty</p>
) : (
  // Show selected technologies
)}
```

If `addTech.length` is `0`, the empty message is shown. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using **props**.

In this project, `Technologies` passes `technologies`, `handleAddToStack`, and `addTech` to the `AllStack` component.

```tsx
<AllStack
  technologies={technologies}
  handleAddToStack={handleAddToStack}
  addTech={addTech}
/>
```

The child can send something back to the parent by calling a function received through props.

For example, `SingleStackCard` receives `handleAddToStack` from the parent and calls it when the user clicks **Add to Stack**.

```tsx
handleAddToStack(technology);
```

So, the data flow is:

**Parent → Child:** through props
**Child → Parent:** by calling a function passed through props
