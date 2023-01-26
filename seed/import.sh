#! /bin/bash

mongoimport --host localhost --db connet-db --collection products --type json --file /products.json
mongoimport --host localhost --db connet-db --collection users --type json --file /users.json
mongoimport --host localhost --db connet-db --collection brands --type json --file /brands.json
