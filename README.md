# api-ts
Minimal microservice for single module with basic CRUD operations using express


## How to Setup

### Pre-requisites
- Install Node JS
- Install Yarn

### Start in Dev Mode
Run following commands

```bash
yarn install
yarn dev
```

### Start in production mode
Run following commands

```bash
yarn install --production
yarn start
```

## To Test
To test run the following commands

```bash
# To get all data
curl localhost:3000/

# To create new data
curl -X POST -H 'content-type:application/json' -d '{"title":"title", "description":"description"}' localhost:3000/ 

# To get specific Data based on id
# Replace :id with the value of id returned in above command
curl -X GET localhost:3000/:id

# To update specific Data based on id
# Replace :id with the value of id returned in above command

curl -X PUT -H 'content-type:application/json' -d '{"title":"title1", "description":"description1"}' localhost:3000/:id  

# To delete specific Data based on id
# Replace :id with the value of id returned in above command
curl -X DELETE localhost:3000/:id  #replace id with the value of id returned in above command
```

You can test the same using postman