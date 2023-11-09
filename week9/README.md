# Week 9

## Forms

As I briefly mentioned last week, [React Hook Form](https://react-hook-form.com/) is very useful for managing forms in React, especially as they get complex, handling managing state for you and making validation significantly easier, all while being more performant than the typical way of managing forms.

## Fetching Data

- In assignment 4, you are allowed to use `async` and `await` which should make your lives a lot easier but there's still a lot of boilerplate needed to get everything working properly in React, especially if you want to have your app be "production-ready" with loading state, error handling, etc
- The example provided has a `useFetch` custom hook to abstract most of the basic boilerplate for simple GET requests
  - This will not be enough for your assignment! If you want to use this hook I recommend you extend this hook with what you think you will need and how you want to be able to use it (also make sure you attribute the source as this tutorial exercise if you do!)
  - This hook is roughly based on a stripped-down version of this [useFetch hook](https://github.com/csesoc/chaos/blob/main/frontend/src/hooks/useFetch.ts) I wrote a while ago.
    - There are some parts of this that won't be relevant for your assignment, and some parts of it that just won't work unless you copy some other parts of the codebase as well (it's a bit coupled to the context it was written in).
    - Note that copying this whole full hook might be a bit much and trigger plagiarism detection. Don't copy this straight-up, but feel free to take some inspiration from [how it's _used_](https://github.com/csesoc/chaos/blob/e0f1f53c3824aef34e612857066d5b32f69d4a84/frontend/src/pages/admin/review/finalise_candidates/index.tsx#L50-L84).
  - This hook is actually basically just a worse version of [React Query](https://tanstack.com/query/v3/).
    - This is quite a flexible library which I didn't know about when I made the above hook, I would recommend this library for some other benefits it provides (e.g., caching, automatic refetching, cache invalidation, etc)

## Global State

- React context is the built-in way of passing things around globally in React.
- This works well when you're just passing a static value around, or a value that only changes from the root.
- As soon as you need it to be modifiable globally, or doing mutations with complex state (objects, arrays...), I would recommend using a state management library

### State Management Libraries

- [jotai](https://jotai.org/) - Quite a simple library, works very similar to React state, based on atoms
- [mobx](https://mobx.js.org/) - A bit more setup needed than jotai, but very useful for more complex state. My recommendation if managing things in React-like state is getting annoying
- [zustand](https://zustand-demo.pmnd.rs/) - An alternative to mobx. A "modern Redux" as some people like to call it. Not my cup of tea
