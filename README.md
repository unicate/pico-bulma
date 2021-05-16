[screen1]: public/assets/screen1.png
[screen2]: public/assets/screen2.png


# Pico Bulma

> A lightweight [Bulma](https://bulma.io/) theme and starter project for [Pico CMS](https://picocms.org/).

## What is it and what's included?

This project basically provides a Bulma-Theme and starter project for Pico CMS.
It can be used as foundation to build your own customized Bulma themes for Pico CMS.

- [Bulma](https://bulma.io/) is a modern CSS framework that just works.
- Icons from [Fontawesome-free](https://fontawesome.com/icons?m=free) are included and ready to use.
- [Pico CMS](https://picocms.org/) is a simple and fast flat file CMS.
- You can build your own themes with [Gulp](https://gulpjs.com/).  


## Bulma Theme

![Pico Bulma Screen 1][screen1]
![Pico Bulma Screen 2][screen2]


## Download & Install Theme

Just download the zip file in the **dist** directory.

[Download](./dist/bulma.zip)

Unzip and copy the complete **bulma** folder into the **public/themes** directory.

Replace the default theme in your **config/config.yml**.
```
theme: bulma
```

You will find more detailed information in the Pico CMS [documentation](https://picocms.org/docs/#themes).


## Install Project

Installation using Git:

```
git clone https://github.com/unicate/pico-bulma.git my-project-name
```

Download PHP dependencies using composer:
```
composer install
```

Now start your webserver and navigate to the public folder.


## Modify & Build Theme

To modify and build your own theme you need **npm**. Run the following command in the project root directory.

```
npm install
```

- To modify colors and styles please have a look at the **sass** directory.
- To modify the layout, check out the **.twig** files in **public/themes/bulma**
- The layout is split into the following files:
  - index.twig (main template)
  - sub.twig (sub or detail page)
  - navigation.twig
  - footer.twig

To build your theme run gulp <target>:

Usage: gulp [clean | build | bulma-theme-sass | bulma-theme-dist]

```
gulp build
```

## Disclaimer & License

This project is released under the [MIT](https://raw.githubusercontent.com/unicate/licenses/master/MIT/MIT-Licence.txt) licence.


## Finally
> Now go and build something and **make people happy**!


