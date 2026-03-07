export type Lang = "en" | "ja";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact",
      langLabel: "JP / EN",
    },
    hero: {
      role: "Full-Stack Web Developer Student",
      body: `Hi, I'm Ghulam. I completed a Full-Stack JavaScript program at Purwadhika and build web apps with React/Next.js, Node.js, and PostgreSQL/Prisma.
Previously, I worked in Japan in a nursing care facility, where I developed strong ownership, attention to detail, and clear communication.
I'm now transitioning into software engineering and continuously improving through hands-on projects.`,
      cta: "View Portfolio",
    },
    about: {
      title: "About Me",
      subtitle: "A brief summary of my background and focus.",
      name: "Ghulam Al Hafizh",
      bio: `I majored in Japanese Literature, which strengthened my communication skills and cross-cultural perspective.
After several years of work experience in Japan, I'm now transitioning into web development.
My goal is to become a reliable engineer who can contribute to a team with clear communication and consistent improvement.`,
      eduTitle: "Education",
      stackTitle: "Core Skills (Tech Stack)",
      edu1Title: "Bachelor's Degree in Japanese Literature",
      edu1Org: "Darma Persada University",
      edu1Year: "2013 - 2017",
      edu2Title: "Yono Japanese Language School",
      edu2Org: "Saitama, Japan",
      edu2Year: "2018 - 2019",
      edu3Title: "Web Development Bootcamp",
      edu3Org: "Purwadhika Digital School",
      edu3Year: "2025",
      stackNote: "Technologies I've used in my projects.",
    },
    portfolio: {
      heading: "Projects",
      sub: "Selected projects showcasing my current focus and skills.",
      live: "Live Demo",
    },
    experience: {
      title: "Project Details",
      subtitle: "A closer look at features and what I practiced.",
      features: "Key Features",
      stack: "Tech Stack",
    },
    testimonials: {
      title: "Testimonials",
    },
    contact: {
      title: "Contact",
      subtitle: "Send a message or reach out via email.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sent: "Message sent. Thank you!",
      github: "GitHub",
      emailBtn: "Email",
      cv: "CV",
      shokumu: "Work History",
      powered: "Form is powered by Formspree.",
    },
    footer: {
      built: "Built with Next.js, TypeScript, and Tailwind CSS.",
      note: "This portfolio highlights personal projects and continuous learning.",
      rights: "All rights reserved.",
      github: "GitHub",
      top: "Back to top",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "自己紹介",
      portfolio: "制作物",
      experience: "経歴",
      testimonials: "推薦コメント",
      contact: "連絡先",
      langLabel: "JP / EN",
    },
    hero: {
      role: "フルスタック Web エンジニア（ジュニア）",
      body: `こんにちは。Ghulam Al Hafizh と申します。Purwadhika にて Full-Stack JavaScript 開発を修了し、React / Next.js / Node.js / PostgreSQL / Prisma を中心に学習・実装してきました。
前職では日本の介護施設にて勤務し、報連相を徹底しながら、正確性と責任感を大切に業務を進めてまいりました。
現在は個人開発を通して、ユーザー体験・保守性・可読性を意識した開発を継続しています。`,
      cta: "制作物を見る",
    },
    about: {
      title: "自己紹介",
      subtitle: "経歴と現在の取り組みを簡潔にまとめています。",
      name: "Ghulam Al Hafizh",
      bio: `大学では日本文学を専攻し、言語・文化・コミュニケーションを深く学びました。また在学中に日本で学ぶ機会も得て、異文化環境での適応力を養いました。
現在は Web 開発へキャリアチェンジし、制作物を通じて継続的に学習・改善を行っています。
チームに安心して任せてもらえるエンジニアを目指します。`,
      eduTitle: "学歴",
      stackTitle: "主要スキル（Tech Stack）",
      edu1Title: "日本文学 学士",
      edu1Org: "ダルマ・プルサダ大学",
      edu1Year: "2013 - 2017",
      edu2Title: "与野日本語学校",
      edu2Org: "埼玉県・日本",
      edu2Year: "2018 - 2019",
      edu3Title: "Web 開発ブートキャンプ",
      edu3Org: "Purwadhika Digital School",
      edu3Year: "2025",
      stackNote: "※ ポートフォリオで使用・学習した技術を中心に記載しています。",
    },
    portfolio: {
      heading: "制作物",
      sub: "学習・実装を通じて作成したプロジェクトの一部です。",
      live: "デモを見る",
    },
    experience: {
      title: "制作物の詳細",
      subtitle: "機能・実装内容・取り組みを簡潔にまとめています。",
      features: "主な機能",
      stack: "技術スタック",
    },
    testimonials: {
      title: "推薦コメント",
    },
    contact: {
      title: "連絡先",
      subtitle: "フォームまたはメールでご連絡ください。",
      name: "お名前",
      email: "メールアドレス",
      message: "内容",
      send: "送信する",
      sent: "送信しました。ありがとうございます。",
      github: "GitHub",
      emailBtn: "メール",
      cv: "履歴書",
      shokumu: "職務経歴書",
      powered: "フォームは Formspree を利用しています。",
    },
    footer: {
      built: "Next.js / TypeScript / Tailwind CSS で作成しました。",
      note: "本サイトは個人制作と学習の内容をまとめたポートフォリオです。",
      rights: "All rights reserved.",
      github: "GitHub",
      top: "トップへ戻る",
    },
  },
} as const;

export const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "GitHub",
  "Supabase",
  "Prisma",
  "PostgreSQL",
  "Vercel",
];

export const projects = {
  en: [
    {
      title: "Portfolio Website",
      year: "2025",
      meta: "Personal Project",
      description:
        "A clean portfolio layout with reusable sections, improved copywriting, and EN/JP bilingual support.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://portofolioghulam.vercel.app/",
    },
    {
      title: "Simple Todo List",
      year: "2026",
      meta: "Personal Project",
      description:
        "A practical todo app with local persistence and core features (add/edit/complete, filtering, sorting).",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://todolist-simple-theta.vercel.app/",
    },
  ],
  ja: [
    {
      title: "ポートフォリオサイト",
      year: "2025",
      meta: "個人開発",
      description:
        "セクション構成で見やすいレイアウトを設計し、EN/JP の二言語表示に対応。",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://portofolioghulam.vercel.app/",
    },
    {
      title: "シンプル Todo リスト",
      year: "2026",
      meta: "個人開発",
      description:
        "ローカル保存とフィルタ/並び替えなど、日常で使える基本機能を実装。",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://todolist-simple-theta.vercel.app/",
    },
  ],
} as const;

export const projectDetails = {
  en: [
    {
      title: "Portfolio Website",
      company: "Personal Project",
      timeline: "2025",
      liveUrl: "https://portofolioghulam.vercel.app/",
      badges: ["Bilingual (EN/JP)", "Responsive UI"],
      summary:
        "A clean portfolio site designed for clarity and readability, with structured sections and bilingual content.",
      features: [
        "Section-based layout: Hero, About, Projects, Experience, Testimonials, Contact",
        "Language toggle (EN/JP) with persistent preference",
        "Reusable components and maintainable structure",
        "Deployed to Vercel via GitHub workflow",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      note: "Focus: clean UI, clear messaging, and maintainable structure.",
    },
    {
      title: "Simple Todo List",
      company: "Personal Project",
      timeline: "2026",
      liveUrl: "https://todolist-simple-theta.vercel.app/",
      badges: ["Local Persistence", "Usability"],
      summary:
        "A practical todo app built to practice core UI behaviors and usability.",
      features: [
        "Core todo flows: add, edit, complete, delete",
        "Filtering and sorting for better usability",
        "Local data persistence (no backend)",
        "Clean UI with clear states (empty, active, completed)",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      note: "Next step: backend + database integration.",
    },
  ],
  ja: [
    {
      title: "ポートフォリオサイト",
      company: "個人プロジェクト",
      timeline: "2025 年",
      liveUrl: "https://portofolioghulam.vercel.app/",
      badges: ["EN/JP 対応", "レスポンシブ"],
      summary:
        "見やすさと可読性を重視したポートフォリオサイト。日本での応募を意識し、二言語表示に対応しています。",
      features: [
        "セクション構成：Hero / 自己紹介 / 制作物 / 制作物の詳細 / 推薦コメント / 連絡先",
        "EN/JP の切り替え（選択状態を保持）",
        "再利用可能なコンポーネント設計で保守性を向上",
        "GitHub → Vercel の運用でデプロイ",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      note: "方針：読みやすい UI と、伝わる文章・構成を重視。",
    },
    {
      title: "シンプル Todo リスト",
      company: "個人プロジェクト",
      timeline: "2026 年",
      liveUrl: "https://todolist-simple-theta.vercel.app/",
      badges: ["ローカル保存", "使いやすさ重視"],
      summary:
        "基本的な UI 挙動と使いやすさを意識して作成した Todo アプリ。シンプルで軽快に動作します。",
      features: [
        "追加・編集・完了・削除など基本機能を実装",
        "フィルタ・並び替えで日常的な使い勝手を改善",
        "バックエンドなしでローカルに保存",
        "空状態/完了状態などの表示を整理",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      note: "次のステップ：API 層を整備し、DB 連携へ拡張予定。",
    },
  ],
} as const;

export const testimonials = {
  en: [
    {
      quote:
        "Ghulam communicates clearly, learns quickly, and takes ownership until tasks are completed.",
      name: "Bootcamp Mentor",
      position: "Full-Stack Program (Purwadhika)",
      note: "Reference details available upon request.",
    },
    {
      quote:
        "Strong attention to detail and consistent improvements. Code changes are tidy and easy to review.",
      name: "Peer Reviewer",
      position: "Project Collaboration",
      note: "Reference details available upon request.",
    },
  ],
  ja: [
    {
      quote:
        "報連相が丁寧で、学習スピードが速く、最後まで責任を持ってやり切る方です。",
      name: "ブートキャンプ講師",
      position: "フルスタック講座（Purwadhika）",
      note: "詳細はご要望に応じて共有可能です。",
    },
    {
      quote:
        "細部まで気を配り、改善を積み重ねられます。変更点も整理されていてレビューしやすいです。",
      name: "同僚（共同開発）",
      position: "プロジェクト協力",
      note: "詳細はご要望に応じて共有可能です。",
    },
  ],
} as const;
