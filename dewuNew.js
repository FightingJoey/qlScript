/**
 * cron 10 11 * * *
 * 依赖 crypto-js & jsencrypt 
 * 得物APP 探索中的玩一玩 所有游戏的入口都在那里  请跑任务之前手动玩一次
 * --------------------------------------------------
 * 变量名:dewuCK
 * 变量值:抓app.dewu.com   请求头Headers中的x-auth-token  去掉Bearer # 连接cookie中dutoken得值 可以直接搜dutoken
 * 两个值 x-auth-token的值去掉Bearer#dutoken的值
 * 小程序的x-auth-token 可以用 但是dutoken不能用 做不了部分任务 当然你必须填
 * 例如ejxxxxx...#d41d8cd9|16...2233|17...|4sasasasa...
 * 网站获取CK  2w.onecc.cc  机器人插件 autman 得物物 售价5.66
 * 多账号& 或换行 或新建同名变量
 * -------------------------------------------------
 * SK和UA都是请求头Headers的
 * export isDefultUASK=true  #开启默认UA  不写默认为false  用于解决用了缓存UA还是请求接口错误的问题
 * export isPromiseAll=false #是否开启并发 不写默认为true
 * export UAdefult="Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.38.6"
 * export SKdefult="9xxxxxxxxx"
 * 默认UA值和SK值 如果开启了isDefultUASK 那么则生效 不开启则缓存随机UA
 * 请求失败 请手动进页面过滑块 针对写了SK的用户 
 * --------------------------------------------------
 * new Env("得物")
 */
let ckName = "dewuCK";//CK变量名字

let tmp = "dewuwu.json";//缓存文件夹名字