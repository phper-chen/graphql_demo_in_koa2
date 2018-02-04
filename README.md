# graphqlTest
Firstly npm i

After dependencies installed, u should install pm2 globally, and use comand "pm2 start ecosystem.config.js" to run our server

Secondly open a ide of graphql by visiting ur site localhost:3344/graphiql

Then we can insert some data with the ide by making mutation

Step 1:

            mutation{
              infoSave(
                email: "234324@qq.com",
                phone: 137459804345,
                hobby: ["广度", "焺尺"],
                relation: {
                  friends: ["对方的", "豆腐汤"],
                  family: ["保持", "吃不吃"],
                }
               ){
                    _id
                }
              }
now we should get the value of the id called "_id" the last "mutation" responsed, and use it in "step 3" to execute a associate data saving.

Step 2:


            mutation{
              userSave(
                name: "大家",
                age: 89,
                gender: "男",
                socialInfo: "5a68a3ad5096cd0e0adf0fe1",
               ){
                _id
              }
            }

Step 3:

            query{
              users {
                name
                age
                gender
                socialInfo {
                  _id
                  email
                  phone
                }
              }
            }



