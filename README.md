# Electron Auto Update

This is a minimal example of setting up electron to automatically update.

To run this yourself:

* Fork the repo
  * You need to fork so that you can push releases to your own repositorr.
* Clone your fork
* Install dependencies: `yarn install`
* On the command line run `yarn version`
  * This will create a new git tag as well as update `package.json`.
* Run `yarn run release`
  * This will build the electron application and publish a release to github
  * **IMPORTANT:** In order to publish a release electron-builder needs to
    authenticate, so you will need to set a `GH_TOKEN` environment variable with
    a github access token that has write access to your repo.
* Go to the releases page of your repo and publish the release
  * electron-builder will create a "Draft" release, which will not be seen as an
    update. In order to trigger an update you need to make sure the release is
    publish and is also **not** marked as a pre-release.
* If you do all the above the app will detect an update, download it, notify you
  and automatically insdtall it next time the app is started.
