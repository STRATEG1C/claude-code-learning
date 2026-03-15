---
description: Create a UI Component in /shared/ui
argument-hint: Component name | Component summary
---

## Contenxt

Parse $ARGUMENTS to get the following values:

- [name]: Component name from $ARGUMENTS, cconverted to PascalCase
- [summary]: Component summary from $ARGUMENTS 

## Task

Make a UI component according to the [name] and [summary] provided, following these guidelines:

- Create the component file in `src/shared/ui/[name]/[name].tsx`
- Use a functional component with the name [name]
- Reference the [summary] when making the component
- Supply it with the CSS file alongside

## Theme

- Add support for light and dark modes

## Styling

- Use variables from @src/app/styles/variables.css for colors

## Previews

- Create a preview page to demostrate the newly created component
- Do not add this component anywhere else in the project
