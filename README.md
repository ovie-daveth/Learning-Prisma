# Learning PRISMA with mongoDb

After creating your project, whatever it is, react, remix, next etc. Set up your database, copy the connection string

"mongodb+srv://test:[password]@cluster0.sdg0iit.mongodb.net/" `Something like this`


Then save it somehwere, you will need it to connect prisma to your database

## Set up prisma

### Install prisma

`npm i -D prisma`  

### Initialize prisma in your project

`npx prisma init`

This initiallie prisma creating a folder called 'prisma' with a file init called schema.prisma 

But if you add the datasource to your command say

`npx prisma init --datasource-provider [database provider name]` 

eg

`npx prisma init --datasource-provider mongodb`

This will create a env file also with a database_url (it's fake though)

`DATABASE_URL="mongodb+srv://test:[password]@cluster0.sdg0iit.mongodb.net/"`

now replace the url with the one you copied earlier, yeah you get.

make sure you maintain the `DATABASE_URL` format because in your schema.prisma, that is the exact name it looks for, when it scans your env file.

### schema.prisma file


generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}


You see the env("DATABASE_URL") line, very important, make sure the content inside is the same as the one in your env file

`DATABASE_URL="mongodb+srv://test:[password]@cluster0.sdg0iit.mongodb.net/databasename"`

This schema.prisma is where you define all your schema

model User {
  
}

This is how all your model or schema looks like. Inside you define all your fields eg name, email, password etc.

model User {
  Id         String             @id @default(auto()) @map("_id") @db.ObjectId
}

Id is the field
String is the datatype it can be boolean, int etc
 @id @default(auto()) is the way you want it to appear in the database, it let Prisma know this is a unique identifier with the @id attribute. 
 @map("_id") @db.ObjectId is the way we tell prisma that, hey, I know that you originally create an "_id" on every document you create, but, map my Id, to that _id. ie use mine as the _id. Get that? Well, you can choose not to, just let mongodb create it for you

 model User {
  email     String   @unique
}

if i define my schema like this, mongodb will create an id for me...tada...

a complate model will look like this

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  email     String   @unique
  password  String
}


### push to prisma

`npx prisma db push`

This script will create the database and a collection names User, tada, youre in guy!


### npx prisma generate

`npx prisma generate` will be our best friend. every time we make any new change to our schema, we run tht script to update our database

