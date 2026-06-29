/*
  ============================================================
  モチセーブLP：原稿・リンク・画像・アイコンの編集ファイル
  ============================================================

  初心者向けルール：
  1. 基本的に、この content.js だけを編集すればLPの文章が変わります。
  2. index.html には文章を直接書かない設計です。
  3. 画像を差し替える場合は assets/images/ に画像を入れて、images のパスを書き換えてください。
  4. 電話番号やLINEリンクは contact の中だけを変更してください。
  5. 料金は prices の中だけを変更してください。
  6. アイコンは icons の中で管理しています。
     各カードの icon: "search" のような名前を変更すると、表示アイコンを差し替えできます。

  アイコンの変更方法：
  - 既存アイコンを使う場合：各項目の icon: "〇〇" の名前だけ変更してください。
  - 画像アイコンを使う場合：icons の type を "image" にして、src に画像パスを書いてください。
  - 絵文字アイコンを使う場合：icons の type を "emoji" にして、value に絵文字を書いてください。

  文章の強調ルール：
  - [[文字]] → 黄色マーカー
  - {{文字}} → アクセントカラー
  - **文字** → 太字
  - 《文字》 → 文字の上に点々（圏点）
  - \n → 改行

  注意：
  - 「お客様満足度98%以上」など、根拠が必要な数字は入れていません。
  - 料金は仮表示です。本番公開前に必ず正しい金額に変更してください。
*/

const LP_CONTENT = {
  site: {
    name: "モチセーブ",
    subtitle: "Mochi save"
  },


  /*
    ============================================================
    デザイン管理
    ============================================================

    designType を変更すると、サイト全体の雰囲気を切り替えできます。
    - premium  : 高級感・上品・ネイビー強め
    - clean    : 清潔感・大手感・見やすい
    - friendly : 親しみ・地域密着・明るい

    文字の目立たせ方：
    - [[目立たせたい文字]] → 黄色マーカー風
    - {{色を変えたい文字}} → アクセントカラー
    - **太くしたい文字** → 太字
    - \n → 改行
  */
  design: {
    designType: "clean",
    colors: {
      main: "#032B6C",
      sub: "#2FA9F5",
      accent: "#FFD95A",
      line: "#27C24C",
      text: "#16325C",
      muted: "#5B6E8D",
      background: "#F7FBFF",
      white: "#FFFFFF",
      highlightText: "#032B6C",
      highlightBg: "#FFD95A"
    },
    fonts: {
      base: "Noto Sans JP",
      heroLead: "22px",
      heroTitle: "56px",
      sectionTitle: "18px",
      body: "12px",
      cardTitle: "14px",
      button: "15px"
    },
    emphasis: {
      markerClass: "text-marker",
      accentClass: "text-accent",
      strongClass: "text-strong",
      kentenClass: "text-kenten"
    }
  },

  seo: {
    title: "モチセーブ｜福岡のエアコン取付け・取外しサービス",
    description:
      "福岡県でエアコン取付け・取外し・移設・クリーニングの相談ならモチセーブへ。見積り無料、丁寧な事前説明、明朗会計で安心してご相談いただけます。"
  },

  // 画像パス：assets/images/ 内の画像名に合わせて変更してください。
  images: {
    logo: "./assets/images/LPLOGO.png",
    mascot: "./assets/images/mochikuma.png"
  },

  /*
    ============================================================
    アイコン管理
    ============================================================

    type: "svg"   → 下の svg を表示します。
    type: "image" → src に指定した画像を表示します。
    type: "emoji" → value に指定した絵文字を表示します。
    type: "label" → LINEなど短い文字アイコンを表示します。

    例：画像アイコンにしたい場合
    search: {
      type: "image",
      src: "./assets/images/icon-search.png",
      alt: "検索アイコン"
    }
  */
  icons: {
    check: {
      type: "svg",
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 16.8 4.9 12.5l-1.9 1.9 6.2 6.1L21.4 8.3l-1.9-1.9z"/></svg>`
    },
    search: {
      type: "image",
      src: "./assets/images/1.png",
      alt: "検索アイコン"
    },
    calendar: {
      type: "image",
      src: "./assets/images/2.png",
      alt: "カレンダー アイコン"
    },
    yen: {
      type: "image",
      src: "./assets/images/3.png",
      alt: "お金アイコン"
    },
    handshake: {
      type: "image",
      src: "./assets/images/4.png",
      alt: "ハンドシェイクアイコン"
    },
    phone: {
      type: "image",
      src: "./assets/images/TEL.png",
      alt: "電話アイコン"
    },
    calculator: {
      type: "image",
      src: "./assets/images/ansin.png",
      alt: "安心アイコン"
    },
    chat: {
      type: "image",
      src: "./assets/images/setumei.png",
      alt: "説明アイコン"
    },
    map: {
      type: "image",
      src: "./assets/images/fukuoka.png",
      alt: "福岡アイコン"
    },
    acInstall: {
      type: "image",
      src: "./assets/images/mochikuma.png",
      alt: "AC取り付けアイコン"
    },
    acRemove: {
      type: "image",
      src: "./assets/images/hazusi.png",
      alt: "AC取外しアイコン"
    },
    truck: {
      type: "image",
      src: "./assets/images/isetu.png",
      alt: "移設アイコン"
    },
    clean: {
      type: "image",
      src: "./assets/images/clean.png",
      alt: "クリーニングアイコン"
    },
    lineBadge: {
      type: "label",
      value: "LINE"
    }
  },

  contact: {
    phoneNumber: "090-1234-5678",
    phoneLabel: "電話で相談する",
    phoneSubText: "受付時間 8:00〜20:00",
    phoneIcon: "phone",
    lineUrl: "https://line.me/R/ti/p/@example",
    lineLabel: "LINEで相談する",
    lineSubText: "24時間受付中",
    lineIcon: "chat",
    lineBadgeText: "LINE",
    bottomPhoneLabel: "電話",
    bottomPhoneIcon: "phone",
    bottomLineLabel: "LINE",
    bottomLineIcon: "lineBadge",
    bottomNavLabel: "固定お問い合わせボタン",
  },

  header: {
    showSmallBadge: true,
    smallBadgeText: "福岡県全域対応"
  },

  hero: {
    areaBadge: "",
    topMessage: "見積り《{{無料}}》・[[{{すぐに}}]]対応！",
    lead: "福岡の《お住まい》・《企業様》の\nエアコン{{取付け・取外し}}なら",
    mainCopy: "{{モチセーブ}}へ",
    subCopy: "丁寧・安心・明朗会計\nで選ばれています！",
    mascotAlt: "エアコンを取り付けるモチセーブのマスコット",
    checkIcon: "check",
    checks: [
      "丁寧な事前説明",
      "予約が取りやすい",
      "押し売り営業なし",
      "地域密着で安心"
    ]
  },

  problems: {
    title: "こんなお悩みありませんか？",
    items: [
      {
        icon: "search",
        text: "エアコンを買ったけど取付業者が見つからない"
      },
      {
        icon: "calendar",
        text: "繁忙期ですぐ来てほしい"
      },
      {
        icon: "yen",
        text: "後から追加料金が不安"
      },
      {
        icon: "handshake",
        text: "信頼できる業者に頼みたい"
      }
    ]
  },

  solution: {
    title: "モチセーブが解決します！",
    text: "事前説明・見積り・日程相談まで、はじめての方にも\n分かりやすく丁寧にご案内します。"
  },

  reasons: {
    title: "モチセーブが選ばれる理由",
    items: [
      {
        number: "1",
        icon: "phone",
        title: "最短即日対応",
        text: "お急ぎの方も、まずは空き状況をご相談ください。"
      },
      {
        number: "2",
        icon:"calculator",
        title: "追加料金なし",
        text: "作業前に内容と料金を確認し、納得いただいてから進めます。"
      },
      {
        number: "3",
        icon: "chat",
        title: "丁寧な事前説明",
        text: "工事内容・料金・注意点を分かりやすくお伝えします。"
      },
      {
        number: "4",
        icon: "map",
        title: "地域密着",
        text: "福岡エリアの暮らしに寄り添って対応します。"
      }
    ]
  },

  services: {
    title: "サービス内容",
    items: [
      {
        icon: "acInstall",
        title: "エアコン取付け",
        text: "新品・中古エアコンの取付けをご相談いただけます。"
      },
      {
        icon: "acRemove",
        title: "エアコン取外し",
        text: "不要なエアコンの取外しも丁寧に対応します。"
      },
      {
        icon: "truck",
        title: "エアコン移設",
        text: "お引越し時の移設や再設置もご相談ください。"
      },
      {
        icon: "clean",
        title: "エアコンクリーニング",
        text: "内部の汚れやニオイが気になる時におすすめです。"
      }
    ]
  },

  prices: {
    title: "料金表",
    note: "料金は税抜表示です。設置状況・配管・部材・作業内容により変わる場合があります。正式な料金は事前見積りでご案内します。",
    items: [
      {
        name: "標準取付け",
        price: "¥15,000円〜",
        detail: "室内機・室外機の標準的な取付け"
      },
      {
        name: "取外し",
        price: "¥4,000円〜",
        detail: "既存エアコンの取外し作業"
      },
      {
        name: "移設セット",
        price: "¥18,000円〜",
        detail: "引越し・部屋移動などの移設相談"
      },
      {
        name: "クリーニング",
        price: "¥9,500円〜",
        detail: "エアコン内部の洗浄相談"
      }
    ]
  },

  area: {
    title: "対応エリア",
    lead: "福岡県内を中心に対応しています。",
    icon: "map",
    cities: [
      "福岡市",
      "久留米市",
      "春日市",
      "大野城市",
      "太宰府市",
      "筑紫野市",
      "糸島市",
      "宗像市",
      "古賀市",
      "飯塚市",
      "糟屋郡"
    ],
    note: "上記以外の地域も、工事内容と日程により対応できる場合があります。"
  },

  finalCta: {
    title: "エアコンのことならお気軽にご相談ください！",
    text: "取付け・取外し・移設・クリーニングまで、まずは現在の状況をお聞かせください。"
  },

  footer: {
    shopName: "モチセーブ",
    smallText: "作業中はお電話に出られない場合があります。\n折り返しいたしますのでご了承ください。"
  }
};
