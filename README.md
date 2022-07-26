![example branch parameter](https://github.com/wmaliga/note-share-react/actions/workflows/github-actions.yml/badge.svg?branch=master)

# NoteShare Demo Application GUI with React

### Features
* Sharing public and private notes
* Public notes can be listed by all users
* Every note may have an expiration time

### Prerequisites
* Node ``nvm use v18.3.0``

## Development

### Running application
```shell
npm install
npm run start
npm run test
```

Application will be available under:
```http://localhost:3000/```

## Production TODO
```shell
docker build -t com.wojtek/note-share-react .
docker run -d -p 3000:3000 -name note-share-react com.wojtek/note-share-react
```

Application will be available under:
```http://localhost:3000/```
