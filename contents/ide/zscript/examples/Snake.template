#!/usr/bin/zScript

var UP = 65;//上
var DOWN = 66;//下
var LEFT = 68;//左
var RIGHT = 67;//右

var guan;//用来记录关卡
var T;//用来给记录蛇的移动速度
var t1, t2, t3 = 0;//用来记录已用时间
var HP = 5;//记录蛇的生命值,初始化为6
var food = 0;//用来记录所吃到的食物数
var x = 12, y = 12;//记录食物所在地
var p = [];
var food_pos, star_pos;

var fred = 31, fgreen = 32, fyellow = 33, fblue = 34, fwhite = 37;
var bblack = 40, bred = 41, bgreen = 42, byellow = 43, bblue = 44, bwhite = 47;

var time = () {
    return sys.msecsSinceStartOfDay() / 1000;
};

var game;

//绘制墙/绘制启动画面以及隔墙
var start = () {
    var i, j;

    console.setColor(fgreen);//调成红色

    for (var z = 0; z < 20; ++z) {
        if (z >= 0) {
            console.setCursorPos(12, z);
            console.print("              ~--______-~                ~-___-~\"       ");
        }

        if (z >= 1) {
            console.setCursorPos(12, z - 1);
            console.print("            ~-_           _-~          ~-_       _-~    ");
        }

        if (z >= 2) {
            console.setCursorPos(12, z - 2);
            console.print("          \\     ~-____-~     _-~    ~-_    ~-_-~    / ");
        }

        if (z >= 3) {
            console.setCursorPos(12, z - 3);
            console.print("         (     (         _-~    _--_    ~-_    _/   |  ");
        }

        if (z >= 4) {
            console.setCursorPos(12, z - 4);
            console.print("          /    /            _-~      ~-_        |   |  ");
        }

        if (z >= 5) {
            console.setCursorPos(12, z - 5);
            console.print("           /    /              _----_           \\  \\ ");
        }

        if (z >= 6) {
            console.setCursorPos(12, z - 6);
            console.print("             /    /                            \\ \\   ");
        }

        if (z >= 7) {
            console.setCursorPos(12, z - 7);
            console.print("              /    /                          \\\\     ");
        }

        if (z >= 8) {
            console.setCursorPos(12, z - 8);
            console.print("                /    /                      \\\\       ");
        }

        if (z >= 9) {
            console.setCursorPos(12, z - 9);
            console.print("                 /     /                   \\            ");
        }

        if (z >= 10) {
            console.setCursorPos(12, z - 10);
            console.print("                  |     |                \\                ");
        }

        if (z >= 11) {
            console.setCursorPos(12, z - 11);
            console.print("                 \\     \\                                 ");
        }

        if (z >= 12) {
            console.setCursorPos(12, z - 12);
            console.print("        \\_______      \\                                  ");
        }

        if (z >= 13) {
            console.setCursorPos(12, z - 13);
            console.print(" \\____|__________/  \\                                    ");
        }

        if (z >= 14) {
            console.setCursorPos(12, z - 14);
            console.print("\\/     /~     \\_/ \\                                     ");
        }

        if (z >= 15) {
            console.setCursorPos(12, z - 15);
            console.print("        _|__|  O|                                          ");
        }

        for (var k = 15; k < z; ++k)
        {
            console.setCursorPos(12, k - 15);
            console.print("                                                           ");
        }

        sys.msleep(30);
    }

    sys.sleep(1);

    console.setCursorPos(0, 0);
    console.clear();
    console.setColor(fred);//调整输出颜色

    for (i = 0, j = 60; i < 60; ++i, --j) {//if是为了异步输出
        if (j > 20) {
            console.setCursorPos(2 * (j - 21), 0);
            console.print("回");//输出第一行
        }

        if (i < 40) {
            console.setCursorPos(2 * i, 23);
            console.print("回");// 输出最下面一行
        }

        if (j > 22 && j < 45) {
            console.setCursorPos(78, j - 22);
            console.print("回");//输出最右边列
        }

        if (j > 22 && j < 45) {
            console.setCursorPos(0, i - 15);
            console.print("回");//输出第一列
        }

        if (i > 37 && i < 60) {
            console.setCursorPos(54, i - 37);
            sys.msleep(10);
            console.print("回");//输出中间那列
        }

        sys.msleep(30);
    }

    console.setCursorPos(56, 11);
    console.print("回回回回回回回回回回回");                                            //56
    console.setCursorPos(19, 0);
    console.setColor(fyellow);//调整输出颜色
    console.print("| | |贪 吃 蛇| | |");//输出标题

    console.setCursorPos(56, 2);
    console.print("已用时间：");
    console.setCursorPos(75, 2);
    console.print("秒");
    console.setCursorPos(56, 4);
    console.print("生命值：");
    console.setCursorPos(56, 6);
    console.print("当前长度：");
    console.setCursorPos(56, 8);
    console.print("已吃食物：");
    console.setCursorPos(56, 10);
    console.print("第             关");
    console.setCursorPos(64, 12);
    console.print("提示：");
    console.setCursorPos(56, 13);
    console.print("向上：↑   向上：←");
    console.setCursorPos(56, 14);
    console.print("向下：↓   向右：→");
    console.setCursorPos(56, 15);
    console.print("暂停/开始：确定键 ");
    console.setCursorPos(56, 16);
    console.print("重新选关 ：Esc键");
    console.setCursorPos(64, 18);
    console.print("注意！");
    console.setCursorPos(56, 19);
    console.print("1:撞到障碍物或者墙生命");
    console.setCursorPos(56, 20);
    console.print("  值减一 ");
    console.setCursorPos(56, 21);
    console.print("2:吃到小星星生命值加一");
};

var clear = ()//用来清除屏幕
{
    for(var i = 2; i < 23; ++i)
    {
        console.setCursorPos(2, i);
        console.print("                                                    ");
    }

    food_pos = undefined;
    star_pos = undefined;
};

var guanka = () {//用来选择关卡并根据关卡设置蛇的移动速度
    console.setCursorVisible(true);//显示光标
    console.setEcho(true);//开启回显

    HP = 6;//记录蛇的生命值,初始化为6

    p = [{x:8, y:10, direction:RIGHT},
         {x:6, y:10, direction:RIGHT},
         {x:4, y:10, direction:RIGHT},
         {x:4, y:4, direction:RIGHT}];

    while (true) {
        console.setCursorPos(15, 3);
        guan = int(console.getLine("请输入关数(1-6)："));

        if (guan === 0) { //判断是否作弊
            console.setCursorPos(15, 3);
            console.setColor(fred);//变成红色
            console.print("  作弊有害智商，需谨慎");
            console.setCursorPos(15,5);
            console.setColor(fyellow);//变成黄色
            HP = console.getLine("请输入你想要的蛇的生命值：");
            console.setCursorPos(15, 3);
            console.print("                      ");
            console.setCursorPos(15, 5);
            console.print("                                    ");

            continue;//返回选关处
        }

        if (guan < 7 && guan > 0)
            break;//判断关数是否溢出

        console.setCursorPos(15, 5);
        console.print("输入错误！");
        console.setCursorPos(32, 3);
        console.print("          ");
    }

    console.setCursorPos(15, 3);
    console.print("                   ");

    switch (guan)
    {
    case 1:{T = 600;break;}//
    case 2:{T = 400;break;}//
    case 3:{T = 200;break;}//    根据关数来设定蛇的移动速度
    case 4:{T = 150;break;}//
    case 5:{T = 100;break;}//
    case 6:{T = 60;break;}//
    }

    clear();//清除屏幕
};

var data = ()//用来记录和判断游戏的各种状态数据
{
    console.setCursorPos(66, 2);
    console.setColor(fred);//调成红色
    console.print(t1);//程序已用时间
    switch (guan)
    {
    case 1:{
        console.setCursorPos(59, 10);
        console.setColor(fred);//调成红色
        console.print("1");
        console.setColor(fyellow);//调成黄色
        console.print(" 2 3 4 5 6");
        break;
    }
    case 2:{
        console.setCursorPos(59, 10);
        console.setColor(fyellow);//调成黄色
        console.print("1 ");
        console.setColor(fred);//调成红色
        console.print("2");
        console.setColor(fyellow);//调成黄色
        console.print(" 3 4 5 6 ");
        break;
    }
    case 3:{
        console.setCursorPos(59, 10);
        console.setColor(fyellow);//调成黄色
        console.print("1 2 ");
        console.setColor(fred);//调成红色
        console.print("3");
        console.setColor(fyellow);//调成黄色
        console.print(" 4 5 6 ");
        break;
    }
    case 4:{
        console.setCursorPos(59, 10);
        console.setColor(fyellow);//调成黄色
        console.print("1 2 3 ");
        console.setColor(fred);//调成红色
        console.print("4");
        console.setColor(fyellow);//调成黄色
        console.print(" 5 6 ");
        break;
    }
    case 5:{
        console.setCursorPos(59, 10);
        console.setColor(fyellow);//调成黄色
        console.print("1 2 3 4 ");
        console.setColor(fred);//调成红色
        console.print("5");
        console.setColor(fyellow);//调成黄色
        console.print(" 6 ");
        break;
    }
    case 6:{
        console.setCursorPos(59, 10);
        console.setColor(fyellow);//调成黄色
        console.print("1 2 3 4 5 ");
        console.setColor(fred);//调成红色
        console.print("6");
        break;
    }
    }

    switch (HP)
    {
    case 1:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁");
        console.setColor(fred);//调成红色
        console.print("▂▃▅▆▇");
        break;
    }
    case 2:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁▂");
        console.setColor(fred);//调成红色
        console.print("▃▅▆▇");
        break;
    }
    case 3:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁▂▃");
        console.setColor(fred);//调成红色
        console.print("▅▆▇");
        break;
    }
    case 4:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁▂▃▅");
        console.setColor(fred);//调成红色
        console.print("▆▇");
        break;
    }
    case 5:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁▂▃▅▆");
        console.setColor(fred);//调成红色
        console.print("▇");
        break;
    }
    case 6:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成绿色
        console.print("▁▂▃▅▆▇");
        break;
    }
    default:{
        console.setCursorPos(65, 4);
        console.setColor(fgreen);//调成红色
        console.print("！超级模式 ！");
        break;
    }
    }

    console.setCursorPos(66, 6);
    console.setColor(fred);//调成红色
    console.print(p.count());//输出蛇的当前长度
    console.setCursorPos(66, 8);
    console.print(food);//输出蛇当前已经吃到食物
};

var isEmptyByPos = (x, y)
{
    if (star_pos.x == x && star_pos.y == y)
        return false;

    if (x == food_pos.x && y == food_pos.y)
        return false;

    var obj;

    for (var i = 0; i < p.count(); ++i) {
        obj = p.at(i);

        if (obj.x == x && obj.y == y)
            return false;
    }

    return true;
};

var getUsablePos = ()
{
    var x, y;

    while(true) {
        x = sys.random(1, 25);//产生随机横坐标
        y = sys.random(1, 21);//产生随机纵坐标

        if (isEmptyByPos(x, y))
            break;//当此处无其他元素是才生效
    }

    return x, y;
};

var show = ()//用来随机产生障碍物以及食物和生命药水以及用来判断游戏的各种参数
{
    if (!food_pos) {//判断食物是不是被吃掉
        food_pos = {};//随机出现食物
        food_pos.x, food_pos.y = getUsablePos();
        console.setCursorPos(2 * food_pos.x, food_pos.y);//定位到食物出现的位置
        console.setColor(fyellow);//调成黄色
        console.print("●");//打印出食物
    }

    if (t1 / 25 > 0 && t1 % 15 == 0 && t1 > t3 && !star_pos) {//减少星星出现的几率
        star_pos = {};
        star_pos.x, star_pos.y = getUsablePos();

        console.setCursorPos(2 * star_pos.x, star_pos.y);//定位到星星出现的位置（吃到星星长度减1）
        console.setColor(fyellow);//调成黄色
        console.print("☆");//打印出星星（吃到星星长度减1）
        t3 = t1;//以免产生多个障碍物

        if (HP < 7) {
            console.setCursorPos(18, 24);
            console.setColor(fwhite);//调成白色
            console.print("温馨提示：在选关的时候输入0可以开启作弊模式");
        }
    }

    if (p[0].x == food_pos.x *2 && p[0].y == food_pos.y) {//判断蛇是否吃到食物
        ++food;//将食物数加1
        food_pos = undefined;
        //增加蛇的长度
        p.append({x:p.at(1).x, y:p.at(1).y});
    } else if (p[0].x == star_pos.x * 2 && p[0].y == star_pos.y) {//判断蛇是否吃到星星
        star_pos = undefined;

        if (HP < 6)
            ++HP;//将生命值加1
    }

    t1 = time() - t2;//刷新游戏运行时间
};

var key = ()//用户是否操作键盘
{
    var ch = console.getKey();

    switch (ch)
    {
    case 27: {
        var ch = console.getKey();

        if (ch === -1) {
            guanka();//用来选择关卡并根据关卡设置蛇的移动速度
            game();//开始游戏

            break;
        } else if (ch != 91) {
            break;
        }

        ch = console.getKey();

        if((ch === UP || ch === DOWN || ch === LEFT || ch === RIGHT)
                && (ch + p[0].direction != 131)  && (ch + p[0].direction != 135)
                && ch != p[0].direction) { //判断按键是否是方向键，并且是不是蛇移动方向的反方向
            p[0].direction = ch;//如果不是就改变蛇头方向
        }

        break;
    }
    case 10: {//回车键
        var a, b;

        a = time();//记录当前程序已用时间
        console.setCursorPos(20, 1);
        console.setColor(fwhite);//调成白色
        console.print("已暂停,按确定键开始");
        console.flushOutput();

        while(true) {
            sys.sleep(1);

            if (console.getKey() == 10) {////判断是否按键且是否解除暂停
                console.setCursorPos(19, 0);
                console.setColor(fyellow);
                console.print("| | |贪 吃 蛇| | |");//清除"已暂停,按确定键开始"这行字
                console.setColor(fred);
                console.print(" 回");

                break;
            }
        }

        b = time();//记录当前程序已用时间
        t2 += (b - a);//将暂停加到t2上供t1减去

        break;
    }
    }
};

game = () {
    var i;
    var ch = RIGHT;//向右

    t2 = time();//记录当前程序已用时间

    console.setCursorVisible(false);//隐藏光标
    console.setEcho(false);//禁用回显

    while (true) {
        t1 = time() - t2;//刷新游戏运行时间
        data();//用来记录游戏的各种状态数据
        console.setCursorPos(p[0].x, p[0].y);//转到蛇头位置
        console.setColor(fred);//改成红色
        console.print("◆");//打印蛇头

        for (i = 1; i < p.count() - 1; ++i) {
            console.setCursorPos(p[i].x, p[i].y);//转到当前蛇身位置
            console.setColor(fyellow);//改成黄色
            console.print("●");//打印蛇身
        }

        console.setCursorPos(p[p.count() - 2].x, p[p.count() - 2].y);//转到当前蛇尾位置
        console.setColor(fred);//改成红色
        console.print("●");//打印蛇尾

        sys.msleep(T);//控制蛇的移动速度
        t1 = time() - t2;//刷新游戏运行时间
        console.setCursorPos(p.last().x, p.last().y);//移到蛇尾所在地
        console.print(" ");//清除上个循环的蛇尾

        for (i = p.count() - 1; i > 0; --i) {
            p[i].x = p[i - 1].x;//移动蛇
            p[i].y = p[i - 1].y;
            p[i].direction = p[i - 1].direction;
        }

        key();//用户是否操作键盘

        switch (p[0].direction)
        {
        case 65:{p[0].y -= 1; break;}//改变蛇头坐标，移动蛇头
        case 66:{p[0].y += 1; break;}//改变蛇头坐标，移动蛇头
        case 68:{p[0].x -= 2; break;}//改变蛇头坐标，移动蛇头
        case 67:{p[0].x += 2; break;}//改变蛇头坐标，移动蛇头
        }

        if (p[0].x == 2) {//当蛇撞到左墙时
            --HP;//将生命值减一
            p[0].x = 52;//将其穿墙
        }

        if (p[0].x == 54) {//当蛇撞到右墙时
            --HP;//将生命值减一
            p[0].x = 4;//将其穿墙
        }

        if (p[0].y == 1) {//当蛇撞到上墙时
            --HP;//将生命值减一
            p[0].y = 22;//将其穿墙
        }

        if (p[0].y == 23) {//当蛇撞到下墙时
            --HP;//将生命值减一
            p[0].y = 2;//将其穿墙
        }

        for (i = 1; i < p.count() - 1; i++) {
            if(p[0].x == p[i].x && p[0].y == p[i].y)
                i = p.count() + 1;//判断蛇是否撞到自己
        }

        if (i >= p.count()) {//当蛇撞到自己
            HP = 0;//将蛇死亡
        }

        if (HP == 0) {
            console.setCursorPos(25, 5);
            console.setColor(fwhite);//调成白色
            console.print("游戏结束！！！");
            console.flushOutput();
            sys.sleep(3);//延时

            return true;
        }

        if (p.count() == 81) {
            console.setCursorPos(25, 5);
            console.setColor(fwhite);//调成白色
            console.print("恭喜你过关！！！");
            console.flushOutput();
            sys.sleep(3);//延时

            return true;
        }

        show();//用来随机产生障碍物以及食物和生命药水以及用来判断游戏的各种参数（小星星是否吃到，是否撞墙)
    }

    return false;
};

console.clear();
console.setCursorVisible(false);//隐藏光标
start();//绘制启动画面以及隔墙

while (true) {
    guanka();//用来选择关卡并根据关卡设置蛇的移动速度

    if (!game())
        break;//游戏运行
}

console.setCursorVisible(true);
