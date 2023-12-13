# api edit for rest-server

用于给`rest-server`这个docker服务编辑`api`方法，`api`储存于`mongodb`数据库的`api`表中

以`group/api_name`的方式进行命,同目录结构, `group`在数据库中为表名,`api_name`为此表中的一个`document`

使用下方的`save`命令会将目录 `api/group/api_name.js` 下的文件内容保存到数据库中
同时还有 `create` `delete` 命令

同时支持为`websocket`服务编写处理函数, 具体方法如下.

```bash
# create a new api handler
npm run create group/api_name
# creeate a websocket api handler
npm run create group/api_name ws
# or group name is ws
npm run create ws/api_name

# save a api
npm run save group/api_name

# delete a api
npm run delete group/api_name
```