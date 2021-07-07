[screen1]: preview/screen1.png
[screen2]: preview/screen2.png


# Pico Bulma

> A lightweight [Bulma](https://bulma.io/) theme for [Pico CMS](https://picocms.org/).

## What's included?

- [Bulma](https://bulma.io/) is a modern CSS framework that just works.
- Icons from [Fontawesome-free](https://fontawesome.com/icons?m=free) are included and ready to use.
- You can build your own themes with [Gulp](https://gulpjs.com/).  


## Bulma Theme

![Pico Bulma Screen 1][screen1]
![Pico Bulma Screen 2][screen2]


## Download & Install Theme

- Download repo.
- Extract themes/bulma to your Pico themes folder.
- Extract sample-content to your content folder.
- Modify your config.yml. Set **theme: bulma**.

config.yml
```
theme: bulma
```

File structure:
- themes
  - bulma
  - default

You will find more detailed information in the Pico CMS [documentation](https://picocms.org/docs/#themes).


## Modify & Build Theme

To modify and build your own theme you need **npm**. Run the following command in the project root directory.

```
npm install
```

- To modify colors and styles please have a look at the **sass** directory.
- To modify the layout, check out the **.twig** files in **themes/bulma**
- The layout is split into the following files:
  - index.twig (main template)
  - sub.twig (sub or detail page)
  - navigation.twig
  - footer.twig

To build your theme run gulp <target>:

```
gulp build
```

Usage: gulp [clean | build | bulma-theme-sass | bulma-theme-dist]


## Disclaimer & License

This project is released under the [MIT](https://raw.githubusercontent.com/unicate/licenses/master/MIT/MIT-Licence.txt) licence.


## Finally
> Now go and build something and **make people happy**!


