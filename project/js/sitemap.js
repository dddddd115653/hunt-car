var mapData = [
    {
        site : '',
        a : '北京 宁波 深圳 厦门 成都'
    },
    {
        site : '北京',
        a : null
    },
    {
        site : '新疆',
        a : '乌鲁木齐'
    },
    {
        site : '辽宁',
        a : '沈阳 大连 抚顺 盘锦 鞍山'
    },
    {
        site : '湖南',
        a : '长沙 湘潭'
    },
    {
        site : '河北',
        a : '石家庄 唐山 保定 沧州 秦皇岛 廊坊 邯郸'
    },
    {
        site : '内蒙古',
        a : '呼和浩特 包头'
    },
    {
        site : '天津',
        a : ""
    },
    {
        site : '福建',
        a : '福州 厦门 泉州 漳州 宁德 龙岩'
    },
    {
        site : '陕西',
        a : '西安 咸阳'
    },
    {
        site : '浙江',
        a : '杭州 宁波 台州 温州 绍兴 金华'
    },
    {
        site : '四川',
        a : '成都 绵阳'
    },
    {
        site : '贵州',
        a : '贵阳 遵义'
    },
    {
        site : '云南',
        a : '昆明'
    },
    {
        site : '上海',
        a : ""
    },
    {
        site : '山西',
        a : '太原 晋城 大同 临汾'
    },
    {
        site : '江西',
        a : '南昌 九江 抚州 赣州'
    },
    {
        site : '广西',
        a : '南宁 柳州 桂林'
    },
    {
        site : '黑龙江',
        a : '哈尔滨 大庆'
    },
    {
        site : '宁夏',
        a : '银川'
    },
    {
        site : '江苏',
        a : '南京 盐城 徐州 宿迁 泰州 连云港 无锡 常州 扬州 苏州 镇江 淮安 南通'
    },
    {
        site : '安徽',
        a : '合肥 蚌埠 淮南 芜湖 六安'
    },
    {
        site : '吉林',
        a : '长春 吉林'
    },
    {
        site : '湖北',
        a : '武汉 荆州 随州 宜昌 黄冈'
    },
    {
        site : '重庆',
        a : ""
    },
    {
        site : '山东',
        a : '济南 威海 烟台 济宁 枣庄 临沂 潍坊 日照 青岛 淄博'
    },
    {
        site : '河南',
        a : '郑州 安阳 新乡 洛阳 焦作 开封 商丘 许昌'
    },
    {
        site : '广东',
        a : '广州 东莞 深圳 佛山'
    }
];
function createsitemap(options){
    function createBox(tag){
        return document.createElement(tag);
    }
    var a1 = createBox("a"),
        a2 = createBox("a"),
        h2 = createBox("h2"),
        div = createBox("div");
    a1.innerHTML=options.site;
    a2.innerHTML=options.a;
    a1.href="#";
    a2.href="#";
    a1.className="site";
    a2.className="map";
    function apChild(option1,option2){
        return option1.appendChild(option2);
    }
    apChild(h2,a1);
    apChild(div,h2);
    apChild(div,a2);
    return div;
}
var Fragment = document.createDocumentFragment();
mapData.forEach(function(item){
    Fragment.appendChild(createsitemap(item));
});
document.getElementById("sitemap").appendChild(Fragment);