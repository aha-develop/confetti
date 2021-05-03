# confetti

This is an example extension included as part of [Aha! Develop](https://www.aha.io/develop/overview) trial accounts. It demonstrates the power and flexibility of [extensions](https://www.aha.io/support/develop/extensions).

It provides these contributions:

- `confetti`: Fires confetti when a record is completed on the workflow board.

## Demo

https://user-images.githubusercontent.com/125077/116922398-8f63c000-ac12-11eb-978b-4bb92a9f1e99.mp4

## Working on the extension

Install `aha-cli`:

```sh
npm install -g aha-cli
```

Clone the repo:

```sh
git clone https://github.com/aha-develop/confetti.git
```

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the extension into Aha! and set up a watcher:

```sh
aha extension:install
aha extension:watch
```

Now, any change you make inside your working copy will automatically take effect in your Aha! account.

## Building

When you have finished working on your extension, package it into a `.gz` file so that others can install it:

```sh
aha extension:build
```

After building, you can upload the `.gz` file to a publicly accessible URL, such as a GitHub release, so that others can install it using that URL.

To learn more about developing Aha! Develop extensions, including the API reference, the full documentation is located here: [Aha! Develop Extension API](https://www.aha.io/support/develop/extensions)
