;
(function () {
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //narrow: false,
    /*自动播放，默认值为false，true为开启自动播放*/
    autoplay: false,
    //showlrc: false,
    /*lrc歌词显示方式,默认值为1,HTML显示方式，2为JavaScript字符串显示方式，3为lrc文件加载显示方式*/
    //lrcType: 3,
    /*主题颜色*/
    fixed: true,
    theme: '#00b5ad',
    audio: [{
      name: "Inspire",
      artist: 'Capo Productions',
      url: 'https://sharefs.yun.kugou.com/202005032200/c489a773717854e4bdecc939079b4a4f/G186/M06/0D/1F/WocBAF5YBRyAABovADV9gszIXAk530.mp3',
      cover: 'http://imge.kugou.com/stdmusic/20150718/20150718115247342292.jpg',
    }, {
      name: "Inspire",
      artist: 'Capo Productions',
      url: 'https://sharefs.yun.kugou.com/202005032200/c489a773717854e4bdecc939079b4a4f/G186/M06/0D/1F/WocBAF5YBRyAABovADV9gszIXAk530.mp3',
      cover: 'http://imge.kugou.com/stdmusic/20150718/20150718115247342292.jpg',
    }, ]
  });
})();