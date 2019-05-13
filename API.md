# API Document for Live LaTeX Room
  
**Team: Segment Fault**
  
## base_config

* *base_url :* /api/v1/

* *time_format :* ISO 8601
   ```
   YYYY-MM-DDTHH:MM:SSZ
   ```
* *return_form :*
    ```
    {
        "status":200,
        "message":"OK",
        "data":...,
    }
    ```
* *status_code :*

   |status|description|
   |:-:|:-|
   |200|success|
   |403|permission denied|
   
## usr module

* ### database design
#### usr

  |key|description|
  |-|-|
  |user_id|用户id|
  |passwd|密码|

* ### login
  ```
  POST  /login
  ```
  #### request
  
  |name|type|description|
  |:-:|:-:|:-:|
  |user_id|string|用户id|
  |passwd|string|密码|
  
  #### response
  ```
  {
  “status”：200，
  “message”：“OK”，
  }
  ```
  
* ### logout  
  ```
  POST  /logout
  ```
  #### response
  ```
  {
  “status”：200，
  “message”：“OK”，
  }
  ```
* ### register
  ```
  POST /register
  ```
  #### request
  
  |name|type|description|
  |:-:|:-:|:-:|
  |user_id|string|用户id|
  |passwd|string|密码|
  
  #### response
  ```
  {
  ”status“：200，
  ”message“：”OK“，
  }
  
* ### 登录状态
  ```
  GET  /status
  ```
  
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":true   //true:已登录 | false：未登录
  }
  ```
* ### 用户信息
  ```
  GET /user
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |user_id|string|用户id|
  
  **!user_id缺省时返回用户自己的信息**
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":{
          "user_id":xxxx,
          },
  }
  ```
              
                          
## group module
* ### database design
#### group
  |key|description|
  |-|-|
  |group_id|群组id|
  |group_name|群组名|
  |owner_id|群主|
#### group-usr
  |key|description|
  |-|-|
  |group_id|群组id|
  |user_id|用户id|

* ### create group
    ```
    POST /group
    ```
    #### request
    |name|type|description|
    |:-:|:-:|:-:|
    |group_name|string|群组名|
    #### response
    ```
    {
    "status":200,
    "message":"OK",
    "data":{
        "group_id":"xxxx"
        },
    }
    ```
* ### delete group
    ```
    POST /group/deletion
    ```
    #### request
    |name|type|description|
    |:-:|:-:|:-:|
    |group_id|string|群组id|
    
    #### response
    ```
    {
    “status”：200，
    “message”：“OK”，
    }
    ```
* ### 获取group list  
    ```
    GET /group/list
    ```
    #### response
    ```
    {
    “status”：200，
    “message”：“OK”，
    "data":[
                {   
                 "group_id":xxxx,
                 "group_name":xxxx,
                 "owner"：xxxx，//user_id
                 "is_owner":true,//是否是owner
                 },
                  {   
                 "group_id":xxxx,
                 "group_name":xxxx,
                 "owner"：xxxx，//user_id
                 "is_owner":true,//是否是owner
                 },
           ]
    }
    ```
* ### 获取群组成员
    ```
    GET /group/{ group_id }
    ```
    #### request
    |name|type|description|
    |:-:|:-:|:-:|
    |group_id|string|群组id|
    
    #### response
    ```
    {
    “status”：200，
    “message”：“OK”，
    ”data":[
            "xxxx", //user_id
            "oooo",
           ],
    }
    ```
* ### 邀请加入
  ```
  POST group/{ group_id }/invitation
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |user_id|string|用户id|
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":[
          "xxxx", //user_id
          “oooo",
          ]
   }
  ```
* ### 删除组员
  ```
  POST /group/{ group_id }/deletion
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |user_id|string|用户id|
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":[
          "xxxx", //user_id
          “oooo",
          ]
   }
  ```    
* ### 组用户退出
  ```
  POST /group/{ group_id }
  ```
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  }
  ```
## project&file module

* ### database design

#### pro
|key|description|
|-|-|
|pro_id|项目id|
|pro_name|项目名称|

#### pro-group-usr table
|key|description|
|-|-|
|pro_id|项目id|
|owner_id|owner id|
|group_id|group_id|

#### file table
|key|description|
|-|-|
|file_id|文件id|
|file_type|文件类型|
|file_source|文件源码|
|file_pdf|编译文件|

#### file-pro table
|key|description|
|-|-|
|file_id|文件id|
|pro_id|项目id|

* ### create project
  ```
  POST /project
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |pro_name|string|项目名称|
  #### response
  ```
  {
   "status":200,
   "message":"OK",
   "data":{
            "pro_name":"xxoo",//pro_id
           },
   }
   ```
   
* ### project list
  ```
  GET /project/list
  ```
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":[
            {
            "pro_id":"xxoo",
            "pro_name":"xxoo",
            "group_id":"xxoo",
            },
            {
            "pro_id":"xxoo",
            "pro_name":"xxoo",
            "group_id":"xxoo",
            },
         ],
  }
  ```
* ### delete project
  ```
  POST /project/deletion
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |pro_id|string|项目id|
  #### response
  ```
  {
  “status":200,
  "message":"OK",
  }
  ```
* ### load project
  ```
  GET /project/{ pro_id }/loading
  ```
  #### response
  ```
  {
  "status":200,
  "message":"OK",
  "data":{
            "pro_name":"xxoo",
            "pro_file_list":[]//list 格式留待商讨
          }
  }
  ```
* ### 添加用户组
  ```
  POST /project/{ pro_id }/group
  ```
  **!该部分逻辑未解决，留待解决**
* ### create file
  **!该部分逻辑未解决，留待解决**
* ### delete file
  **!该部分逻辑未解决，留待解决**
* ### file store
  **!该部分逻辑未解决，留待解决**
## compilation module
* ### compile
  ```
  POST /compile
  ```
  #### request
  |name|type|description|
  |:-:|:-:|:-:|
  |file_id|string|文件id|
  |file_source|file|文件源码|
  #### response
  ```
  {
  ”status“：200，
  “message”："OK",
  "data":{
            "file_id":xxoo,
            "file_pdf":pdf, //文件地址
         }
   }
   ```
