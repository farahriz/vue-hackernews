# Vue HackerNews

_A Hacker News clone with tests, written for the book [Testing Vue.js Applications](https://www.manning.com/books/testing-vuejs-applications)_

## Experimentation notes
Branches in the format `chapter-<number>` are cloned from the original repo.
Branches in the format `chapter-<number>-do` are where I tried to follow along with the instructions in the book to write tests.

Any issues encountered or notable points I learn while playing around with this will be added into this README as a reference.

### Chapter 2
If you are also following along with the book, you will find chapter 2 to be full of frustrating errors. Please checkout out the [errata](https://manning-content.s3.amazonaws.com/download/b/921f670-42b2-4adb-ab94-70efb8bbf428/Yerburgh_Testingue.jsApplications_Err1.html) to pin your package versions. 

Even despite pinning package versions, an import error may occur in chapter 2 as babel fails to transpile. Try adding the following to your package.json to resolve the issue. It worked for me. 

`
"jest": {
    "transform": {
      "^.+\\.vue$": "vue-jest",
      "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest"
    }
  }
`

If it is still too frustrating, you'll have to skip doing Chapter 2. Just read through, internalise the messages, then `$git checkout chapter-3` and `$npm install` and you should be able to follow along with Chapter 3 just fine.



## Default notes from original repo
### Test

Run full suite:

```
npm run test
```

Unit tests:
```
npm run test:unit
```

Integration tests:
```
npm run test:integration
```

E2E tests:
```
npm run test:e2e
```

### Development

Run the development server:

```
npm run serve
```
