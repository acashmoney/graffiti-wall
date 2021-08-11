# Graffiti Wall

Graffiti Wall is a full-stack MERN application that allows users to create pieces of art and add them to the wall.

![Home Page](https://i.imgur.com/68sVUNV.png)

![Create Art](https://i.imgur.com/eq08tOk.png)



#### Setup your git repo

1. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
2.  Then follow the directions on github that says ```…or create a new repository on the command line```

it should look like this

```
git init
git add .
git commit -m "first commit"
git remote add origin git@git.generalassemb.ly:SEI-CC/test.git // this will be whatever your address will be
git push -u origin master
```

#### Setup the App

```npm install```

*DOTENV*

`touch .env`

add your variables

```
DATABASE_URL=mongodb://localhost:27017/testagramV2
BUCKET_NAME=catcollectorone
SECRET=mysecretforjwt
```

The app is configured, to use those respective key names for the database, jwt secret and aws bucket, of course you'll have your own values
