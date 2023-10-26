# Example 1

<details>
    <summary>Problem 1</summary>

    The contrast between the text and the background isn't high enough, making it hard to read for some.

    How do we measure this? Browsers can tell you the contrast ratio between text and background colours in the devtools/inspector. WCAG defines [minimum contrast ratios](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) we should meet for accessibility. Normal text should be at least 4.5:1, and large text should be at least 3:1

    There are also various tools we can use to manually check colours:

    - [Colour Contrast Checker](https://colourcontrast.cc/)
    - [coolors](https://coolors.co/contrast-checker/112a46-acc8e5)
    - [WebAIM](https://webaim.org/resources/contrastchecker/)

</details>

<details>
    <summary>Problem 2</summary>

    Images have no alt text

    Screen readers and assistive technologies need alternate text to be able to provide a description of the image to the user, so the user knows what it is. Alt text is also used as a fallback to display to users in general if the image doesn't load.

</details>
