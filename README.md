# Ghulam Al Hafizh — Portfolio (EN/JP)

Personal portfolio website with bilingual support (English/Japanese), project showcase, project details, and a contact form.

Live Demo: https://portfolio-ghulam.vercel.app

---

## Features
- Single-page layout with section navigation (Hero / About / Projects / Project Details / Testimonials / Contact)
- Language toggle (EN/JP) with saved preference
- Contact form powered by Formspree
- Downloadable PDFs (CV / 職務経歴書) served from `/public`

---

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Vercel

---

## Getting Started

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Open: http://localhost:3000

### Production build
```bash
npm run build
npm run start
```

---

## Configuration

### Contact Form (Formspree)
Update the Formspree endpoint in:
- `src/sections/contact-page/contact.tsx`

### PDF Files (CV / 職務経歴書)
Place the PDFs in:
- `public/CV_GhulamAlHafizh.pdf`
- `public/shokumukeirekishoGhulam.pdf`

They will be accessible at:
- `/CV_GhulamAlHafizh.pdf`
- `/shokumukeirekishoGhulam.pdf`

---
# Ghulam Al Hafizh — ポートフォリオ（EN/JP）

英語／日本語の二言語対応、制作物の紹介、プロジェクト詳細、そしてお問い合わせフォームを備えた個人ポートフォリオサイトです。

Live Demo: https://portfolio-ghulam.vercel.app

---

## 特徴
- 1ページ構成（Hero / 自己紹介 / 制作物 / 制作物の詳細 / 推薦コメント / 連絡先）
- EN/JP の言語切り替え（選択状態を保存）
- Formspree によるお問い合わせフォーム（バックエンド不要）
- `/public` から配信される PDF ダウンロード（履歴書／職務経歴書）

---

## 技術スタック
- Next.js（App Router）
- React + TypeScript
- Tailwind CSS
- Vercel

---

## セットアップ

### インストール
```bash
npm install
```

### ローカル起動
```bash
npm run dev
```
Open: http://localhost:3000

### 本番ビルド
```bash
npm run build
npm run start
```

---

## 設定

### お問い合わせフォーム（Formspree）
Formspree のエンドポイントは以下で設定します：
- `src/sections/contact-page/contact.tsx`

### PDF ファイル（履歴書／職務経歴書）
PDF は以下に配置してください：
- `public/CV_GhulamAlHafizh.pdf`
- `public/shokumukeirekishoGhulam.pdf`

アクセスURL：
- `/CV_GhulamAlHafizh.pdf`
- `/shokumukeirekishoGhulam.pdf`

---
