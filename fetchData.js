{
  // 数据来源 wiki地址: https://zh.wikipedia.org/wiki/%E6%94%9D%E6%94%BF%E9%97%9C%E7%99%BD%E5%88%97%E8%A1%A8

  // 平安时代的摄关
  let pinan = "#mw-content-text > div > table:nth-child(10)";
  // 镰仓时代的摄关
  let liancang = "#mw-content-text > div > table:nth-child(14)";

  // 南北朝的北朝（京都朝廷）的摄关
  let beichao = "#mw-content-text > div > table:nth-child(20)";

  // 室町时代的摄关
  let shiting = "#mw-content-text > div > table:nth-child(22)";

  // 安土桃山时代的摄关;
  let antutaoshan = "#mw-content-text > div > table:nth-child(25)";

  // 江户时代的摄关;
  let jianghu = "#mw-content-text > div > table:nth-child(28)";

  let fn = (str) => {
    let arr = [];
    $(str)
      .find("tr")
      .each((i, n) => {
        let tds = $(n).find("td");
        if (tds.length) {
          if (tds.length === 5) {
            let shezheng = $(tds[0]).text();
            let guanbai = $(tds[1]).text();
            let up = toTimeArray($(tds[2]).text());
            let down = toTimeArray($(tds[3]).text());
            let king = $(tds[4]).text();
            arr.push({ shezheng, guanbai, up, down, king });
          } else {
            let shezheng = $(tds[0]).text();
            let guanbai = $(tds[1]).text();
            let up = toTimeArray($(tds[2]).text());
            let down = toTimeArray($(tds[2]).text());
            let king = $(tds[3]).text();
            arr.push({ shezheng, guanbai, up, down, king });
          }
        }
      });
    return arr;
  };

  let toTimeArray = (str) => {
    let arr = str.match(/(\d*)年(\d*)月(\d*)日/);
    console.log(arr);
    return arr ? arr.slice(1, 4).map((n) => n - 0) : [];
  };

  let arr = [pinan, liancang, shiting, beichao, antutaoshan, jianghu]
    .map(fn)
    .reduce((prev, n) => [...prev, ...n], []);
  console.log(arr);
  console.log(JSON.stringify(arr));
}
