# Samsung Referral Member Portal

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Tools

```
* Visual Studio 2019 or Visual Studio Code
```

## Coding Conventions

As for the coding standards, let's all use dofactory's standard on c# codes:
https://www.dofactory.com/reference/csharp-coding-standards

## Setup Development

Details guideline how to setup `local` environment

- Install [`.NET Core 3.1 SDK`](https://dotnet.microsoft.com/download/dotnet-core/3.1)
- Install Nodejs 8+ (optional if work with Visual Studio code)

## Visual Studio Code

```
Press F5 => Choose ".NET Core Watch"
```

```
Compile tool

- folder : src\ReferralPortal\SS.ReferralPortal

npm install

npm run start

npm run build

```

Command need to use

```
dotnet build

dotnet msbuild

dotnet watch run

dotnet publish --configuration Release

dotnet publish -c Release -o ./publish (publish to folder)
```

## Branch

- [`master`](#) - stores the official release history in product
- [`staging`](#) - stores the official release history in staging
- [`develop`](#) - serves as an integration branch for pages/features
- [`page/{page-name}`](#) - branches use to develop pages
- [`feature/{feature-name}`](#) - branches use to develop features
  Role Dev, review dev, review stag, review prod, build develop

Dev -> create merge request -> `develop` branch check conflict, update merge request

review dev -> review + approve merge
build develop -> deploy into internal develop
request merge dev into stag

review stag ->

We are currently following the general standard of gitflow. Please read [`gitflow-workflow`](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for more further information.

# Guideline build source for FE dev

## Dev

- `npm run start` will run a locally served app
- `npm run start:stg` will run a stg served app
- `npm run start:prod` will run a prod served app

## Build

- `npx prettier --write .` to formart all folder source
- `npm run build` will build the app production

- `npx prettier --write .`
- `npm run build`
- `npm run build:stg`

### Environment

- Edit files in .env

## Guideline: https://tinyurl.com/y4837xkr

## Naming

- Fodler components s1_HeroBanner
- NameClass : https://viblo.asia/p/tim-hieu-ve-bem-css-hieu-qua-voi-sass-mixin-jvlKaqWkKVr

## Regulations when working

- The tags img, p, a, h1, h2, h3, h4, h5, h6 each must be wrapped by 1 div.
- The text tags only style the font attributes ...
- The img tag should use width: 100% instead of max-width: 100%; (If you want to fix IE bug, just let it be fun ....)
- If you want to style the img tag, the set at the wrap div should not be set directly to the img tag.
- For pages with FormCode Edit form submit in folder ENV
- Rule class component method has \_ in startKey it's private method

## use lazy to load image

- add attr: data-is-firstload="true" => Load this image first
- add attr: data-src="{url}",lazy load image after DOM loaded, Ex: "img(data-src="link hình", lazy, src="/loading.gif")"

# Note:

Use style-loader v1.0.1. Not upgrade.

# Authors

See also the list of [`contributors`](#) who participated in this project
