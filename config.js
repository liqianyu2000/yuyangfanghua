// ============================================
// 毓养芳华 - 游戏配置文件
// 修改此文件即可更新所有玩家的配置数据
// ============================================

const ITEM_DB = {
  normal: [
    {name:"狼毫笔",type:"属性增益",effect:"书画+10"},
    {name:"玉笛",type:"属性增益",effect:"乐舞+10"},
    {name:"银针套",type:"属性增益",effect:"医药+10"},
    {name:"算盘珠",type:"属性增益",effect:"算数+10"},
    {name:"鲁班尺",type:"属性增益",effect:"制造+10"},
    {name:"菜刀",type:"属性增益",effect:"烹饪+10"},
    {name:"策论集",type:"属性增益",effect:"策论+10"},
    {name:"铁胎弓",type:"属性增益",effect:"骑射+10"},
    {name:"罗盘",type:"属性增益",effect:"堪舆+10"},
    {name:"西域词典",type:"属性增益",effect:"习语+10"},
    {name:"花剪",type:"属性增益",effect:"花艺+10"},
    {name:"茶经",type:"属性增益",effect:"茶道+10"},
    {name:"强身丹",type:"属性增益",effect:"体质+3"},
    {name:"银票",type:"属性增益",effect:"银两+20"},
    {name:"玉佩",type:"属性增益",effect:"好感+5（通用）"}
  ],
  rare: [
    {name:"玉簪",type:"属性增益",effect:"全属性+10",rarity:"rare"},
    {name:"先帝的墨宝",type:"属性增益",effect:"策论+40",rarity:"rare"},
    {name:"太后的懿旨",type:"属性增益",effect:"可调用一次太后势力",rarity:"rare"},
    {name:"玄机子的天机符",type:"属性增益",effect:"关键时刻挡一次灾",rarity:"rare"},
    {name:"秦毅的佩刀",type:"属性增益",effect:"骑射+420，秦霜好感+5",rarity:"rare"}
  ],
  consumable: [
    {name:"金疮药",type:"消耗品",effect:"恢复体质5点"},
    {name:"凝神汤",type:"消耗品",effect:"策论+10"},
    {name:"忘川草解药",type:"消耗品",effect:"解忘川草毒（关键）"},
    {name:"瘟疫解药",type:"消耗品",effect:"治瘟疫（第三卷关键）"},
    {name:"雪参",type:"消耗品",effect:"珍稀药材，可做解药或药膳"},
    {name:"南瓜子",type:"消耗品",effect:"林晚樵最爱，送她好感+5"},
    {name:"夜来香干花",type:"消耗品",effect:"夜鸩最爱，送她好感+5"},
    {name:"鸢尾花种",type:"消耗品",effect:"白照儿最爱，送她好感+5"},
    {name:"梅花酒",type:"消耗品",effect:"云程/冯学士爱喝，送好感+5"},
    {name:"猫薄荷",type:"消耗品",effect:"猫最爱，所有猫亲密度+10"},
    {name:"面",type:"消耗品",effect:"烹饪食材"},
    {name:"葱",type:"消耗品",effect:"烹饪食材"},
    {name:"盐",type:"消耗品",effect:"烹饪食材"},
    {name:"米",type:"消耗品",effect:"烹饪食材"},
    {name:"蛋",type:"消耗品",effect:"烹饪食材"},
    {name:"番茄",type:"消耗品",effect:"烹饪食材"},
    {name:"肉",type:"消耗品",effect:"烹饪食材"},
    {name:"酱油",type:"消耗品",effect:"烹饪食材"},
    {name:"鱼",type:"消耗品",effect:"烹饪食材"},
    {name:"姜",type:"消耗品",effect:"烹饪食材"},
    {name:"鸡",type:"消耗品",effect:"烹饪食材"},
    {name:"花生",type:"消耗品",effect:"烹饪食材"},
    {name:"辣椒",type:"消耗品",effect:"烹饪食材"},
    {name:"排骨",type:"消耗品",effect:"烹饪食材"},
    {name:"醋",type:"消耗品",effect:"烹饪食材"},
    {name:"豆腐",type:"消耗品",effect:"烹饪食材"},
    {name:"花椒",type:"消耗品",effect:"烹饪食材"},
    {name:"整鸡",type:"消耗品",effect:"烹饪食材"},
    {name:"荷叶",type:"消耗品",effect:"烹饪食材"},
    {name:"泥",type:"消耗品",effect:"烹饪食材"},
    {name:"海参",type:"消耗品",effect:"珍稀烹饪食材"},
    {name:"鲍鱼",type:"消耗品",effect:"珍稀烹饪食材"},
    {name:"鱼翅",type:"消耗品",effect:"珍稀烹饪食材"},
    {name:"酒",type:"消耗品",effect:"烹饪食材/调味"},
    {name:"莲子",type:"消耗品",effect:"烹饪食材"},
    {name:"冰糖",type:"消耗品",effect:"烹饪食材"},
    {name:"银耳",type:"消耗品",effect:"烹饪食材"},
    {name:"糯米",type:"消耗品",effect:"烹饪食材"},
    {name:"桂花",type:"消耗品",effect:"烹饪食材/香料"},
    {name:"面粉",type:"消耗品",effect:"烹饪食材"},
    {name:"桃花",type:"消耗品",effect:"烹饪食材/香料"},
    {name:"黄油",type:"消耗品",effect:"烹饪食材"},
    {name:"杏仁",type:"消耗品",effect:"烹饪食材"},
    {name:"奶",type:"消耗品",effect:"烹饪食材"},
    {name:"南瓜",type:"消耗品",effect:"烹饪食材"},
    {name:"八种豆米",type:"消耗品",effect:"烹饪食材"},
    {name:"菜",type:"消耗品",effect:"烹饪食材"},
    {name:"芝麻",type:"消耗品",effect:"烹饪食材"},
    {name:"莲蓉",type:"消耗品",effect:"烹饪食材"},
    {name:"蛋黄",type:"消耗品",effect:"烹饪食材"},
    {name:"豆沙",type:"消耗品",effect:"烹饪食材"},
    {name:"色素",type:"消耗品",effect:"烹饪食材"},
    {name:"当归",type:"消耗品",effect:"药膳食材"},
    {name:"枸杞",type:"消耗品",effect:"药膳食材"},
    {name:"人参",type:"消耗品",effect:"珍稀药膳食材"},
    {name:"茯苓",type:"消耗品",effect:"药膳食材"},
    {name:"红枣",type:"消耗品",effect:"药膳食材"},
    {name:"阿胶",type:"消耗品",effect:"珍稀药膳食材"},
    {name:"核桃",type:"消耗品",effect:"药膳食材"},
    {name:"川贝",type:"消耗品",effect:"药膳食材"},
    {name:"梨",type:"消耗品",effect:"药膳食材"},
    {name:"川芎",type:"消耗品",effect:"药膳食材"},
    {name:"白芍",type:"消耗品",effect:"药膳食材"},
    {name:"熟地",type:"消耗品",effect:"药膳食材"},
    {name:"薄荷",type:"消耗品",effect:"药膳食材"},
    {name:"柠檬",type:"消耗品",effect:"药膳食材"},
    {name:"酸枣仁",type:"消耗品",effect:"药膳食材"},
    {name:"茯神",type:"消耗品",effect:"药膳食材"},
    {name:"布料",type:"消耗品",effect:"花工坊材料，制作香包所需"},
    {name:"糖",type:"消耗品",effect:"花工坊材料，制作花酱所需"},
    {name:"酒曲",type:"消耗品",effect:"花工坊材料，制作花酒所需"},
    {name:"明矾",type:"消耗品",effect:"花工坊材料，制作花染料所需"},
    {name:"纸",type:"消耗品",effect:"花工坊材料，制作花信纸所需"},
    {name:"草药",type:"消耗品",effect:"花工坊材料，制作花瓣浴包所需"},
    {name:"火石",type:"消耗品",effect:"花工坊材料，制作火把所需"},
    {name:"鸢尾种子",type:"消耗品",effect:"可播种鸢尾"},
    {name:"夜来香种子",type:"消耗品",effect:"可播种夜来香"},
    {name:"菊花种子",type:"消耗品",effect:"可播种菊花"},
    {name:"梅花种子",type:"消耗品",effect:"可播种梅花"},
    {name:"桃花种子",type:"消耗品",effect:"可播种桃花"},
    {name:"荷花种子",type:"消耗品",effect:"可播种荷花"},
    {name:"桂花种子",type:"消耗品",effect:"可播种桂花"},
    {name:"茉莉种子",type:"消耗品",effect:"可播种茉莉"},
    {name:"南瓜花种子",type:"消耗品",effect:"可播种南瓜花"},
    {name:"满天星种子",type:"消耗品",effect:"可播种满天星"},
    {name:"海棠种子",type:"消耗品",effect:"可播种海棠"},
    {name:"剑兰种子",type:"消耗品",effect:"可播种剑兰"},
    {name:"月季种子",type:"消耗品",effect:"可播种月季"},
    {name:"杜鹃种子",type:"消耗品",effect:"可播种杜鹃"},
    {name:"水仙种子",type:"消耗品",effect:"可播种水仙"},
    {name:"牡丹种子",type:"消耗品",effect:"可播种牡丹"},
    {name:"兰花种子",type:"消耗品",effect:"可播种兰花"},
    {name:"玫瑰种子",type:"消耗品",effect:"可播种玫瑰"},
    {name:"雪莲种子",type:"消耗品",effect:"可播种雪莲"},
    {name:"昙花种子",type:"消耗品",effect:"可播种昙花"},
    {name:"黑色鸢尾种子",type:"消耗品",effect:"可播种黑色鸢尾"},
    {name:"双色牡丹种子",type:"消耗品",effect:"可播种双色牡丹"},
    {name:"蓝色玫瑰种子",type:"消耗品",effect:"可播种蓝色玫瑰"},
    {name:"曼珠沙华种子",type:"消耗品",effect:"可播种曼珠沙华"},
    {name:"罂粟种子",type:"消耗品",effect:"可播种罂粟"},
    {name:"加速一小时卷",type:"消耗品",effect:"花圃加速1小时，每日限用5次"},
    {name:"加速两小时卷",type:"消耗品",effect:"花圃加速2小时，每日限用5次"},
    {name:"杏仁油",type:"消耗品",effect:"花工坊材料，制作花胭脂所需"},
    {name:"蜂蜡",type:"消耗品",effect:"花工坊材料，制作花胭脂所需"}
  ],
  special: [
    {name:"木头刻的夜来香",type:"特殊趣味",effect:"夜鸩每次杀人后放的，收集37朵解锁成就"},
    {name:"大橘的毛",type:"特殊趣味",effect:"从大橘身上梳下来的，据说能带来好运"},
    {name:"玄机子的签",type:"特殊趣味",effect:"花签占卜抽到的吉签，可保留"},
    {name:"孟御厨的菜刀",type:"特殊趣味",effect:"借来了就不想还的神器，获得随机食材3种"},
    {name:"冯学士的老花镜",type:"特殊趣味",effect:"戴上看字更清楚，策论临时+20"},
    {name:"公输叙之的水晶眼镜",type:"特殊趣味",effect:"全大胤找不出三副，制造临时+20"},
    {name:"白照儿的干花书签",type:"特殊趣味",effect:"她亲手做的，送你代表信任"},
    {name:"林晚樵的晚阳帮令牌",type:"特殊趣味",effect:"持此令牌京城地下通行"},
    {name:"李令月的密卫腰牌",type:"特殊趣味",effect:"持此牌可调动密卫一次"},
    {name:"许愿的诗稿",type:"特殊趣味",effect:"她亲笔写的诗，文人见了都要膜拜"}
  ],
  fragment: [
    {name:"毓芳群芳图碎片",type:"碎片",effect:"集齐5块拼出十二先生+六美群像图"},
    {name:"天下形势图碎片",type:"碎片",effect:"集齐6块拼出大胤+北狄+南疆+西域+海上形势图"},
    {name:"百工谱碎片",type:"碎片",effect:"集齐8块拼出墨家失传百工技艺图谱"},
    {name:"宫闱秘辛录碎片",type:"碎片",effect:"集齐5块揭开宫中所有秘密"},
    {name:"先帝变法全案碎片",type:"碎片",effect:"集齐7块得先帝元和新政完整变法方案"}
  ],
  keyPlot: [
    {name:"《毓芳策》上半部",type:"关键剧情",effect:"第一卷失窃，核心道具",rarity:"legend"},
    {name:"《毓芳策》下半部",type:"关键剧情",effect:"藏香阁七层，庄妃遗志",rarity:"legend"},
    {name:"先帝密诏",type:"关键剧情",effect:"先帝陵墓，传位/变法遗命",rarity:"legend"},
    {name:"传国玉玺",type:"关键剧情",effect:"先帝陵墓，正统象征",rarity:"legend"},
    {name:"庄妃的遗书",type:"关键剧情",effect:"藏香阁七层，吾以死为种待后来者开花",rarity:"legend"},
    {name:"先皇后的香囊",type:"关键剧情",effect:"周嬷嬷花树下，先皇后被毒杀证据",rarity:"rare"},
    {name:"沈家旧案卷宗",type:"关键剧情",effect:"大理寺，如蕴父亲冤案证据",rarity:"rare"},
    {name:"萧家贪墨黑账",type:"关键剧情",effect:"良算盘整理，萧家贪墨军饷证据",rarity:"rare"},
    {name:"复齐会投毒记录",type:"关键剧情",effect:"第三卷疫区破庙，瘟疫真相证据",rarity:"rare"},
    {name:"齐逸尘的亲笔信",type:"关键剧情",effect:"复齐会分舵，齐逸尘身份证据",rarity:"rare"},
    {name:"铜钥匙·壹",type:"关键剧情",effect:"开藏香阁二层"},
    {name:"铜钥匙·贰",type:"关键剧情",effect:"开藏香阁三层"},
    {name:"铜钥匙·叁",type:"关键剧情",effect:"开藏香阁四层"},
    {name:"银钥匙·壹",type:"关键剧情",effect:"开藏香阁五层"},
    {name:"银钥匙·贰",type:"关键剧情",effect:"开藏香阁六层"},
    {name:"墨家密道图",type:"关键剧情",effect:"藏香阁四层，地下密道全图",rarity:"rare"},
    {name:"北狄和亲录",type:"关键剧情",effect:"藏香阁六层，北狄关系全记录",rarity:"rare"}
  ]
}

const FORTUNE_TEXTS = {
  ji: [
    {text:"春风得意马蹄疾，一日看尽长安花", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"},
    {text:"潮平两岸阔，风正一帆悬", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"},
    {text:"好雨知时节，当春乃发生", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"},
    {text:"会当凌绝顶，一览众山小", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"},
    {text:"长风破浪会有时，直挂云帆济沧海", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"},
    {text:"等闲识得东风面，万紫千红总是春", effect:"今日所得数值额外+5，夜晚行动不被发现，写信必有回音"}
  ],
  ping: [
    {text:"行到水穷处，坐看云起时", effect:"平常之日，无喜无悲"},
    {text:"宠辱不惊，闲看庭前花开花落", effect:"平常之日，无喜无悲"},
    {text:"去留无意，漫随天外云卷云舒", effect:"平常之日，无喜无悲"},
    {text:"竹杖芒鞋轻胜马，谁怕", effect:"平常之日，无喜无悲"},
    {text:"回首向来萧瑟处，也无风雨也无晴", effect:"平常之日，无喜无悲"},
    {text:"采菊东篱下，悠然见南山", effect:"平常之日，无喜无悲"},
    {text:"明月松间照，清泉石上流", effect:"平常之日，无喜无悲"},
    {text:"人闲桂花落，夜静春山空", effect:"平常之日，无喜无悲"}
  ],
  xiong: [
    {text:"山雨欲来风满楼", effect:"今日探索恐有危险，所得数值-1"},
    {text:"欲渡黄河冰塞川，将登太行雪满山", effect:"今日探索恐有危险，所得数值-1"},
    {text:"行路难，行路难，多歧路，今安在", effect:"今日探索恐有危险，所得数值-1"},
    {text:"风萧萧兮易水寒", effect:"今日探索恐有危险，所得数值-1"},
    {text:"黑云压城城欲摧", effect:"今日探索恐有危险，所得数值-1"},
    {text:"无边落木萧萧下，不尽长江滚滚来", effect:"今日探索恐有危险，所得数值-1"}
  ]
}

const SEARCH_LOCATIONS = ["明伦堂","十二课室","钟鼓楼","骑射场","群芳居","知味堂","茶寮","汤沐阁","小厨房","库房","浣衣局","后花园","月下亭","药圃","百工坊","马厩","护院房","下人房"]

const FLOWER_DB = {
  "鸢尾":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},"夜来香":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},
  "菊花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},"梅花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},
  "桃花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},"荷花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},
  "桂花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},"茉莉":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},
  "南瓜花":{rarity:"普通",stageTime:2,sellPrice:30,edible:true},"满天星":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},
  "海棠":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},"剑兰":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},
  "月季":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},"杜鹃":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},
  "水仙":{rarity:"普通",stageTime:2,sellPrice:30,edible:false},
  "牡丹":{rarity:"稀有",stageTime:4,sellPrice:100,edible:true},"兰花":{rarity:"稀有",stageTime:4,sellPrice:100,edible:false},
  "玫瑰":{rarity:"稀有",stageTime:4,sellPrice:100,edible:true},"雪莲":{rarity:"稀有",stageTime:4,sellPrice:100,edible:false},
  "昙花":{rarity:"稀有",stageTime:4,sellPrice:100,edible:false},
  "黑色鸢尾":{rarity:"传说",stageTime:6,sellPrice:500,edible:false},"双色牡丹":{rarity:"传说",stageTime:6,sellPrice:500,edible:false},
  "蓝色玫瑰":{rarity:"传说",stageTime:6,sellPrice:500,edible:false},"曼珠沙华":{rarity:"传说",stageTime:6,sellPrice:500,edible:false},
  "罂粟":{rarity:"传说",stageTime:6,sellPrice:0,edible:false}
}

const STOVE_LEVELS = [
  {name:"一级·泥灶",maxDishes:1,bonus:0,req:null},
  {name:"二级·砖灶",maxDishes:2,bonus:10,req:{cook:300,money:50}},
  {name:"三级·铜灶",maxDishes:3,bonus:20,req:{cook:600,money:200}},
  {name:"四级·御灶",maxDishes:4,bonus:30,req:{cook:900,mengFavor:60}}
]

const RECIPES = [
  {name:"阳春面",ingredients:["面","葱","盐"],stars:1,type:"基础",effect:"体质恢复3点",sellPrice:10},
  {name:"蛋炒饭",ingredients:["米","蛋","葱"],stars:1,type:"基础",effect:"体质恢复5点",sellPrice:10},
  {name:"西红柿炒蛋",ingredients:["番茄","蛋","糖"],stars:1,type:"基础",effect:"体质恢复5点，烹饪+15，乐舞+10，茶道+10",sellPrice:10},
  {name:"红烧肉",ingredients:["肉","糖","酱油"],stars:2,type:"基础",effect:"体质恢复5点，烹饪+15，制造+10，策论+10",sellPrice:20},
  {name:"清蒸鱼",ingredients:["鱼","姜","葱"],stars:2,type:"基础",effect:"体质恢复5点，烹饪+15，花艺+10，骑射+10",sellPrice:20},
  {name:"宫保鸡丁",ingredients:["鸡","花生","辣椒"],stars:2,type:"基础",effect:"体质恢复5点，烹饪+15，算数+10，堪舆+10",sellPrice:20},
  {name:"糖醋排骨",ingredients:["排骨","糖","醋"],stars:2,type:"基础",effect:"体质恢复5点，烹饪+15，书画+10，习语+10",sellPrice:20},
  {name:"麻婆豆腐",ingredients:["豆腐","辣椒","花椒"],stars:3,type:"基础",effect:"烹饪+20，体质恢复8点，乐舞+15，策论+15，骑射+15",sellPrice:35},
  {name:"叫花鸡",ingredients:["整鸡","荷叶","泥"],stars:3,type:"基础",effect:"烹饪+20，体质恢复8点，茶道+15，习语+15，制造+15",sellPrice:35},
  {name:"佛跳墙",ingredients:["海参","鲍鱼","鱼翅","酒"],stars:5,type:"基础",effect:"烹饪+25，体质恢复10点，十二属性全部+10",sellPrice:55},
  {name:"莲子羹",ingredients:["莲子","冰糖","银耳"],stars:2,type:"基础",effect:"烹饪+15，容貌+5，茶道+10，习语+10",sellPrice:20},
  {name:"桂花糕",ingredients:["糯米","桂花","糖"],stars:2,type:"基础",effect:"烹饪+15，容貌+5，骑射+10，策论+10",sellPrice:20},
  {name:"桃花酥",ingredients:["面粉","桃花","黄油"],stars:3,type:"基础",effect:"烹饪+20，容貌+8，书画+10，堪舆+10，算数+10",sellPrice:35},
  {name:"杏仁豆腐",ingredients:["杏仁","奶","糖"],stars:2,type:"基础",effect:"烹饪+15，容貌+5，乐舞+10，制造+10",sellPrice:20},
  {name:"南瓜饼",ingredients:["南瓜","糯米","糖"],stars:1,type:"基础",effect:"烹饪+15，容貌+5，算数+10，堪舆+10",sellPrice:10},
  {name:"腊八粥",ingredients:["八种豆米","糖"],stars:2,type:"基础",effect:"烹饪+15，容貌+5，花艺+10，书画+10",sellPrice:20},
  {name:"饺子",ingredients:["面粉","肉","菜"],stars:2,type:"基础",effect:"烹饪+15，体质恢复8点，体质上限+5",sellPrice:20},
  {name:"汤圆",ingredients:["糯米","芝麻","糖"],stars:2,type:"基础",effect:"烹饪+15，容貌+8，送人好感+10",sellPrice:20},
  {name:"月饼",ingredients:["面粉","莲蓉","蛋黄"],stars:3,type:"基础",effect:"烹饪+20，容貌+8，送人好感+10",sellPrice:35},
  {name:"寿桃包",ingredients:["面粉","豆沙","色素"],stars:3,type:"基础",effect:"祝寿专属，声望+15，好感+15",sellPrice:35},
  {name:"当归鸡汤",ingredients:["鸡","当归","姜"],stars:2,type:"药膳",effect:"体质+12，补血益气",sellPrice:30},
  {name:"枸杞银耳羹",ingredients:["枸杞","银耳","冰糖"],stars:2,type:"药膳",effect:"体质+10，明目润肺",sellPrice:25},
  {name:"人参炖鸡",ingredients:["鸡","人参","酒"],stars:3,type:"药膳",effect:"体质+18，大补元气",sellPrice:50},
  {name:"茯苓粥",ingredients:["米","茯苓","红枣"],stars:2,type:"药膳",effect:"体质+10，健脾安神",sellPrice:25},
  {name:"阿胶糕",ingredients:["阿胶","核桃","芝麻"],stars:3,type:"药膳",effect:"体质+15，补血养颜",sellPrice:45},
  {name:"川贝炖梨",ingredients:["梨","川贝","冰糖"],stars:2,type:"药膳",effect:"体质+10，止咳润肺",sellPrice:25},
  {name:"四物汤",ingredients:["当归","川芎","白芍","熟地"],stars:3,type:"药膳",effect:"体质+14，调经补血",sellPrice:40},
  {name:"薄荷茶",ingredients:["薄荷","冰糖","柠檬"],stars:1,type:"药膳",effect:"体质+5，提神醒脑",sellPrice:10},
  {name:"凝神汤",ingredients:["酸枣仁","茯神"],stars:2,type:"药膳",effect:"体质+8，凝神静气，策论临时+10",sellPrice:20}
]

const DARK_DISHES = ["辣椒炒月饼","西瓜炖排骨","板蓝根泡面","巧克力腐乳","草莓红烧肉","菠萝炒豆腐","咖啡煮蛋","牛奶泡面","牙膏拌沙拉","肥皂味汤圆"]

const CREATIVE_NAMES = ["翡翠白玉羹","金丝凤凰盏","琉璃珍珠丸","云霞映雪酥","月影暗香糕","金玉满堂煲","瑶池仙露冻","凤髓龙肝羹","琥珀琉璃脆","霓裳羽衣饼"]

const COURSE_STATS = ["乐舞","书画","花艺","茶道","医药","算数","制造","烹饪","策论","骑射","堪舆","习语"]

const PERSONAL_STATS = ["体质","银两","声望","容貌"]

const TITLES = {
  "乐舞":[{min:0,t:"初学·乐盲/舞盲"},{min:300,t:"入门·乐童/舞童"},{min:600,t:"熟练·乐师/舞姬"},{min:900,t:"精通·乐家/舞师"},{min:1200,t:"大师·乐仙/舞仙"},{min:1500,t:"宗师·天籁/惊鸿"}],
  "书画":[{min:0,t:"初学·画盲"},{min:300,t:"入门·书童"},{min:600,t:"熟练·画师"},{min:900,t:"精通·书家"},{min:1200,t:"大师·画圣"},{min:1500,t:"宗师·墨韵"}],
  "花艺":[{min:0,t:"初学·花盲"},{min:300,t:"入门·花童"},{min:600,t:"熟练·花匠"},{min:900,t:"精通·花师"},{min:1200,t:"大师·花仙"},{min:1500,t:"宗师·花痴"}],
  "茶道":[{min:0,t:"初学·茶盲"},{min:300,t:"入门·茶童"},{min:600,t:"熟练·茶客"},{min:900,t:"精通·茶师"},{min:1200,t:"大师·茶仙"},{min:1500,t:"宗师·茶圣"}],
  "医药":[{min:0,t:"初学·医盲"},{min:300,t:"入门·药童"},{min:600,t:"熟练·医者"},{min:900,t:"精通·医师"},{min:1200,t:"大师·医仙"},{min:1500,t:"宗师·神医"}],
  "算数":[{min:0,t:"初学·数盲"},{min:300,t:"入门·算童"},{min:600,t:"熟练·算师"},{min:900,t:"精通·账房"},{min:1200,t:"大师·神算"},{min:1500,t:"宗师·算圣"}],
  "制造":[{min:0,t:"初学·匠盲"},{min:300,t:"入门·匠童"},{min:600,t:"熟练·匠人"},{min:900,t:"精通·匠师"},{min:1200,t:"大师·巧匠"},{min:1500,t:"宗师·鬼工"}],
  "烹饪":[{min:0,t:"初学·厨盲"},{min:300,t:"入门·厨童"},{min:600,t:"熟练·厨子"},{min:900,t:"精通·厨师"},{min:1200,t:"大师·厨仙"},{min:1500,t:"宗师·膳祖"}],
  "策论":[{min:0,t:"初学·策盲"},{min:300,t:"入门·书生"},{min:600,t:"熟练·策士"},{min:900,t:"精通·谋士"},{min:1200,t:"大师·智囊"},{min:1500,t:"宗师·帝师"}],
  "骑射":[{min:0,t:"初学·武盲"},{min:300,t:"入门·武童"},{min:600,t:"熟练·武者"},{min:900,t:"精通·武师"},{min:1200,t:"大师·武宗"},{min:1500,t:"宗师·武圣"}],
  "堪舆":[{min:0,t:"初学·玄盲"},{min:300,t:"入门·道童"},{min:600,t:"熟练·术士"},{min:900,t:"精通·方士"},{min:1200,t:"大师·国师"},{min:1500,t:"宗师·天师"}],
  "习语":[{min:0,t:"初学·语盲"},{min:300,t:"入门·学童"},{min:600,t:"熟练·译者"},{min:900,t:"精通·通译"},{min:1200,t:"大师·舌辩"},{min:1500,t:"宗师·纵横"}],
  "体质":[{min:0,t:"病弱"},{min:21,t:"康健"},{min:51,t:"强健"},{min:81,t:"铁骨"}],
  "容貌":[{min:0,t:"普通"},{min:101,t:"出挑"},{min:301,t:"貌美"},{min:601,t:"倾城"},{min:1001,t:"绝色"}]
}

function getTitle(stat,val){
  const list=TITLES[stat];
  if(!list)return "";
  let cur=list[0].t;
  for(const item of list){if(val>=item.min)cur=item.t;}
  return cur;
}

const TEACHERS = ["如蕴","文丹青","周嬷嬷","陆山","温阿昭","良算盘","公输叙之","孟御厨","冯学士","云程","玄机子","阿娜枝"]

const BEAUTIES = ["许愿","李令月","林晚樵","秦霜","夜鸩","白照儿"]

const CATS = ["大橘","雪团","煤球","花脸","瘸腿","银子"]

const WORKSHOP_RECIPES = [
  {name:"干花书签",flowerReq:"any2",materials:[],statReq:{花艺:300},sellPrice:0,effect:"任意花两朵制作，解锁群芳图鉴成就",special:"achievement"},
  {name:"香包",flowerReq:"any2",materials:["布料"],statReq:{花艺:300,制造:300},sellPrice:25,effect:"容貌+5，送人好感+10"},
  {name:"花茶",flowerReq:"edible",materials:[],statReq:{花艺:300},sellPrice:20,effect:"恢复体质5点，容貌+10"},
  {name:"花酱",flowerReq:"edible2",materials:["糖"],statReq:{花艺:400,烹饪:300},sellPrice:30,effect:"恢复体质8点"},
  {name:"花酒",flowerReq:"any2",materials:["酒曲"],statReq:{花艺:500,烹饪:400},sellPrice:50,effect:"送人好感+15"},
  {name:"花染料",flowerReq:"twoDiff",materials:["明矾"],statReq:{花艺:400,制造:300},sellPrice:40,effect:"可暂时改变穿着气质，制造+20"},
  {name:"花信纸",flowerReq:"twoDiff",materials:["纸"],statReq:{花艺:500,制造:400},sellPrice:45,effect:"写信必有回信，策论+20"},
  {name:"花瓣浴包",flowerReq:"threeDiff",materials:["草药"],statReq:{花艺:400,医药:300},sellPrice:50,effect:"容貌+20，恢复体质10点并提高体质5点"},
  {name:"花胭脂",flowerReq:"any2",materials:["杏仁油","蜂蜡"],statReq:{花艺:400,医药:300},sellPrice:60,effect:"容貌+30"},
  {name:"火把/信号弹",flowerReq:"any",materials:["火石"],statReq:{花艺:300,制造:300},sellPrice:18,effect:"夜行照明，禁地探险必备"},
  {name:"迷药包",flowerReq:"specific:曼珠沙华",materials:[],statReq:{花艺:600,医药:500},sellPrice:60,effect:"迷药，关键时刻可制敌"},
  {name:"花标本",flowerReq:"rare",materials:[],statReq:{花艺:800},sellPrice:100,effect:"稀有花标本，收藏价值极高"}
]

// ============ 京城地点 ============
const MAP_LOCATIONS = [
  {category:"市井商业", name:"东市", desc:"大胤京城最繁华的商业区，商贾云集，百货杂陈。街两旁店铺鳞次栉比，绸缎庄、胭脂铺、金银楼、字画店一应俱全。", triggers:"购买首饰布料、偶遇世家小姐、市井传闻、扒手事件"},
  {category:"市井商业", name:"西市", desc:"胡商聚集之地，多西域客商。香料、宝石、胡琴、葡萄酒，充满异域风情。", triggers:"购买西域奇物、黑市入口"},
  {category:"市井商业", name:"南市", desc:"平民市集，多卖蔬果鱼肉、日常杂物。价格实惠，烟火气最浓。说书人在茶棚下拍板醒木，三教九流汇聚于此。", triggers:"低价采购食材、听书获取情报、市井八卦"},
  {category:"市井商业", name:"北市", desc:"车马行、骡马市、铁器铺集中之地。多武人、镖师、行脚商往来。靠近城门，行旅气息浓厚。", triggers:"购买马匹兵器、镖局委托、逃犯线索"},
  {category:"自然风景", name:"曲江池", desc:"京城第一名胜，沿岸垂柳依依，碧波荡漾。春季芙蓉盛开，秋季芦花飞雪。王公贵族常在此设宴。", triggers:"泛舟赏景、偶遇权贵宴饮、落水事件、诗会"},
  {category:"自然风景", name:"大雁塔", desc:"存玄奘法师所取真经，塔高七层，登塔可俯瞰整座京城。寺内香火鼎盛，后院有碑林与藏经阁。", triggers:"上香祈福、求签问卜、玄机子相关剧情、佛门奇遇"},
  {category:"自然风景", name:"终南山", desc:"京城南面的名山，层峦叠嶂，云雾缭绕。山中多道观、佛寺、隐士草庐。传闻有仙人遗迹，亦有山贼盗匪出没。", triggers:"寻隐者不遇、采药、禁地探险、机关洞、医仙居所、遇袭"},
  {category:"自然风景", name:"灞桥", desc:"城东送别之地，桥畔多植杨柳。古人折柳送别，灞桥烟柳为京城一景。桥下灞水东流，行旅往来不绝。", triggers:"送别剧情、远行触发、逃犯出关"},
  {category:"自然风景", name:"昆明池", desc:"城西大型人工湖，水面开阔，曾是水师操练之地。湖畔有渔户聚居，傍晚渔舟唱晚，别有野趣。", triggers:"垂钓、渔家剧情、水战线索、夜鸩相关、湖中秘密"},
  {category:"寺庙道观", name:"大慈恩寺", desc:"京城第一名刹，玄奘译经之地。寺内大雁塔高耸，香火鼎盛。", triggers:"上香祈福、求签问卜、佛门奇遇"},
  {category:"寺庙道观", name:"青龙寺", desc:"城东名寺，以密宗传承闻名。寺中多奇花异草，尤其樱花盛开时美不胜收。僧人精通梵文，亦通医术。", triggers:"求医药方、密宗法器"},
  {category:"寺庙道观", name:"清虚观", desc:"城中最大道观，香火鼎盛。观主精通道术，常为权贵做斋醮。观中藏有大量道经，亦有堪舆典籍。", triggers:"玄机子相关、堪舆道具、求符"},
  {category:"寺庙道观", name:"莲花庵", desc:"城外尼姑庵，清净幽雅。庵中静心师太曾是宫中女官，看破红尘后出家。庵中多收留无家可归的女子。", triggers:"避难所、女子救助"},
  {category:"寺庙道观", name:"波斯胡寺", desc:"西市附近的景教寺庙，西域风格建筑。寺中传教士通多国语言，亦经营药材生意。", triggers:"西域情报、阿娜枝相关、珍稀药材、外文书籍"},
  {category:"官署权贵", name:"皇城", desc:"京城中轴线，北端为皇宫，两侧为三省六部官署。朱雀大街宽达百步，两侧槐树成荫。寻常百姓不得擅入官署区域。", triggers:"偶遇官员、朝堂消息、拦驾告御状"},
  {category:"官署权贵", name:"大理寺", desc:"朝廷最高司法机构，掌管刑狱。案卷库中存有大量旧案卷宗，包括沈家旧案。", triggers:"冤案证据、探案"},
  {category:"官署权贵", name:"镇国公府", desc:"白照儿的家，府邸宏阔，门前石狮威严。镇国公手握兵权，府中戒备森严。", triggers:"白照儿剧情"},
  {category:"官署权贵", name:"良府", desc:"良算盘的家族府邸，户部良氏世代为账房高手。府中藏书楼存有大量户部旧档。", triggers:"良算盘支线、户部旧档"},
  {category:"官署权贵", name:"文府", desc:"文丹青的家族，书香门第。其父曾为宫廷画师，卷入先帝旧事。府中藏画甚丰。", triggers:"文丹青支线、宫闱秘辛"},
  {category:"官署权贵", name:"温府", desc:"温阿昭的家族，其父曾为大理寺卿，因查先帝中毒案被罢官。府中留有旧案卷宗。", triggers:"温阿昭支线"},
  {category:"官署权贵", name:"长公主府", desc:"李令月府邸，府中豢养密卫，暗中掌控家族情报网。", triggers:"李令月支线、密卫腰牌、宫闱秘辛、朝堂情报"},
  {category:"娱乐消闲", name:"玉茗戏班", desc:"京城最有名的戏班，班主技艺精湛，弟子众多。戏班中不仅有伶人，亦有江湖高手藏身。", triggers:"百工谱碎片、夜鸩相关、情报传递、戏中藏密"},
  {category:"娱乐消闲", name:"锦绣坊", desc:"京城最大的绣坊，苏绣娘一手绣技冠绝京城。坊中多女工，亦是女子聚集传递消息之处。", triggers:"苏绣娘剧情、女子互助、密信传递"},
  {category:"娱乐消闲", name:"听雨楼", desc:"京城最高档的茶楼，二楼雅座多文人雅士聚会。说书、唱曲、清谈，是获取消息的好去处。", triggers:"市井传闻、朝堂八卦、诗会、偶遇关键人物"},
  {category:"娱乐消闲", name:"醉仙楼", desc:"京城最有名的酒楼，名菜荟萃，酒客盈门。三楼雅间多权贵宴饮，后厨亦是情报流通之地。", triggers:"孟御厨相关、美食剧情、权贵密谈"},
  {category:"娱乐消闲", name:"平康坊", desc:"京城歌妓聚居之地，才子佳人故事多发之处。青楼楚馆中亦有不少才女，通晓诗词音律。", triggers:"情报收集、许愿相关、女子悲歌、夜鸩线索"},
  {category:"城外远郊", name:"终南山秘境", desc:"终南山深处，常人难至。传闻有医仙隐居，亦有墨家机关洞。山中多珍稀药材，也多危险。", triggers:"医仙居所、机关洞、百工谱碎片、毓芳群芳图碎片、遇袭"},
  {category:"城外远郊", name:"先帝陵", desc:"先帝驾崩后葬于皇陵，守卫森严。陵中藏有先帝密诏、传国玉玺等关键之物。", triggers:"先帝密诏、传国玉玺、先帝变法碎片、天下形势图碎片、守陵人"},
  {category:"城外远郊", name:"黑市", desc:"西市地下的秘密交易市场，无官方许可的货物在此流通。毒药、禁书、情报、赃物，只要出价皆可买到。", triggers:"购买违禁品、百工谱碎片、林晚樵令牌、夜鸩相关、危险交易"},
  {category:"城外远郊", name:"破庙", desc:"城外荒废的破庙，第三卷瘟疫爆发时成为疫区。复齐会在此进行投毒实验，藏有投毒记录。", triggers:"瘟疫解药、复齐会投毒证据、医药考验、生死抉择"}
];

// ============ 党派体系 ============
const FACTIONS = [
  {key:"太后党", name:"太后党", desc:"以太后萧玉娥为首，当前势力最大，主张维持现状、压制士族。"},
  {key:"皇帝党", name:"皇帝党", desc:"以新帝李珩为首，年少有志，欲重振寒门、延续先帝变法。"},
  {key:"士族党", name:"士族党", desc:"世家大族联盟，把持朝堂要津，与太后既合作又对抗。"},
  {key:"清流党", name:"清流党", desc:"寒门士子组成，以清议闻名，主张变法革新、为民请命。"},
  {key:"神秘党", name:"神秘党", desc:"身份不明的隐秘势力，行踪诡秘，意图难测。"}
];

// ============ 官职列表（父亲身世用） ============
const OFFICIAL_LIST = [
  "无",
  "太师","太傅","太保","司徒","司空",
  "太子太师","太子太傅","太子太保","枢密使",
  "尚书令","中书令","侍中","率臣","枢密副使",
  "左右仆射","大都督","枢密院事","殿前指挥使",
  "六部尚书","太子宾客","太常卿","太子詹事","都督","大都护","门下侍郎","中书侍郎","指挥使",
  "御史大夫","秘书监","光禄卿","卫尉卿","宗正卿","太仆卿","大理卿","鸿胪卿","司农卿","太府卿","左右散骑常侍","国子祭酒","少府监","将作监","上郡刺史","上都督府长史","上都护府副都护","殿前公事",
  "黄门侍郎","尚书左丞","吏部侍郎","太常少卿","中郡刺史","殿前虞候","安抚使",
  "尚书右丞","诸部侍郎","下郡刺史",
  "光禄少卿","卫尉少卿","宗正少卿","太仆少卿","大理少卿","鸿胪少卿","司农少卿","太府少卿","秘书少监","上都护府长史","镇抚使",
  "司业","少府监少监",
  "御史中丞","左右谏议大夫","国子博士","中书舍人","上郡别驾","王府典军","上都督府司马","马军都指挥使","步军都指挥使","千户",
  "太子中舍人","上都护府司马","中郡别驾",
  "尚书左右司诸司郎中","太常寺秘书丞","中书省著作郎","太子洗马","王府副典军","下都督府长史","上郡长史","下郡别驾","马军副都指挥使","步军副都指挥使","副千户",
  "太常丞","司天监太史令","内给事","下都督府司马","上郡司马","司农寺宫苑总监","马军都虞候","步军都虞候","百户"
];

const MILITARY_LIST = [
  "无","太尉","通侍大夫","正侍大夫","宣正大夫","履正大夫","协忠大夫","中侍大夫","中亮大夫","中卫大夫","翊卫大夫","亲卫大夫"
];

const NOBILITY_LIST = [
  "无","亲王","嗣王","郡王","国公","开国郡公","开国伯","开国男","乡男","白身"
];
