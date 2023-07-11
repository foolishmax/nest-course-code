# Nest里实现Session和JWT

## session

session使用express的express-session中间件，通过@Session装饰器取出来传入controller里

## jwt

jwt需要引入@nestjs/jwt包的JwtModule，注入其中的JwtService，然后通过jwtService.sign生成token，通过jwtService.verify验证token

token放在authorization的header里