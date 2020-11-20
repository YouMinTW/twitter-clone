# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project is inspired by [CleverProgrammers](https://github.com/CleverProgrammers/twitter-clone).

## Stack I used

1. TypeScript
2. styled components
3. Material UI

## Things I learned

1. Styled component and Material UI now can be good fit since we can choose CSS priority by `<StylesProvider injectFirst>`, we don't need to use important to override MUI styles.
2. Styled component and Material UI has good integration, we can directly used MUI component in styled API. eg: `styled(Button)`
3. Create theme props in Styled component for whole App usage.
4. Change tag or component dynamically within Styled component via as API
5. Using Child Selector within Styled component.

## Challenge

1. Left side bar, isActive issue, not every `<SidebarOption>` will be given isActive props, need to give an default props,and I'm not familiar the way dealing with TypeScript and defaultProps.\
   I used workaround `<StyledDiv active={isActive ? true : false} />` give props to Styled-component.
2. ~~CRA v4 with TypeScript can be annoyed by [TS config incompatible](https://github.com/facebook/create-react-app/issues/9868).~~\
   Downgrade CRA and TS version

## Ref

1. [CleverProgrammers twitter-clone](https://github.com/CleverProgrammers/twitter-clone) / [YouTube Link](https://www.youtube.com/watch?v=rJjaqSTzOxI).
2. [Styled Components & TypeScript - 😍](https://blog.agney.dev/styled-components-&-typescript/)
3. [Styled Components Official Doc.](https://styled-components.com/docs)
4. [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
5. [Creating React Styled Components with Dynamic Tags and Props](https://medium.com/swlh/creating-react-styled-components-with-dynamic-tags-and-props-ef965c839e64)
6. [Styled Components Spectrum](https://spectrum.chat/styled-components?msgsafter=MTUzODcyNDc3Mzc3Nw%3D%3D&tab=chat)
7. [[Note] styled-component 學習筆記](https://pjchender.github.io/2018/12/27/note-styled-component-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/)
8. [Material UI Official Doc.](https://material-ui.com/)
9. [利用 Material-UI 統一 UI framework — — 均一前端工程師宜陞技術分享](https://medium.com/@junyiacademy/%E5%88%A9%E7%94%A8-material-ui-%E7%B5%B1%E4%B8%80-ui-framework-%E5%9D%87%E4%B8%80%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%AE%9C%E9%99%9E%E6%8A%80%E8%A1%93%E5%88%86%E4%BA%AB-1e8595e1b19f)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
