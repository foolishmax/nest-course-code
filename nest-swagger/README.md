# 使用Swagger自动生成api文档

- @ApiOperation描述接口的信息

- @ApiResponse描述返回值信息

- @ApiQuery描述query参数信息

- @ApiParam: 声明param参数信息

- @ApiBody: 声明body参数信息,可以省略

- @ApiProperty: 声明dto、vo的属性信息

- @ApiPropertyOptional:声明dot、vo的属性信息，相当于required: false的ApiProperty

- @ApiTags: 对接口进行分组

- ApiBearerAuth: 通过jwt的方式认证，也就是Authorization： Bearer xxx

- ApiCookieAuth: 通过cookie的方式认证

- ApiBasicAuth: 通过用户名、密码认证，在header添加Authorization: Basic xxx
