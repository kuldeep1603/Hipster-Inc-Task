#  Hipster Inc - Multi-Theme Product Showcase

A responsive React application with **dynamic theme switching** (Light, Dark, Colorful), built using **React.js**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**. It features multiple pages (Home, About, Contact), dynamic theme-based layouts (with/without sidebar), reusable components, and smooth UI.

🔗 Live Preview: https://hipster-inc-kuldeep-task.netlify.app/

---

## 🛠️ Tech Stack

- ⚛️ React JS + TypeScript
- 🎨 Tailwind CSS
- ⚙️ Redux Toolkit (for state management)
- 📁 File-based routing (via React Router)
- 📦 Netlify (deployment)

---

## 🧩 Features

- ✅ **3 Fully Functional Themes**
  - Light: Minimal layout with header and cards
  - Dark: Includes a sidebar and dark styles
  - Colorful: Vibrant layout with animations
- 📚 **Reusable Components** (Header, Card, Layout, Skeleton, Sidebar)
- 🗺️ **Multi-Page Setup**: Home, About, Contact
- 🎛️ **Redux-based Global Theme Switching**
- 📱 Fully Responsive & Accessible Design

---

## 📁 Folder Structure

src/
├── components/ # UI components
│ ├── CardSkeleton.tsx
│ ├── Header.tsx
│ ├── Heading.tsx
│ ├── Layout.tsx
│ ├── ProductCard.tsx
│ └── Sidebar.tsx
│
├── pages/ # Pages (route-based)
│ ├── Home.tsx
│ ├── About.tsx
│ └── Contact.tsx
│
├── redux/ # Redux Toolkit slices
│ ├── slices/
│ │ ├── productSlice.ts
│ │ └── themeSlice.ts
│ └── store.ts
│
├── utils/ # Utility files
│ └── themeClasses.ts # Theme-based class config
│
├── App.tsx
└── main.tsx

---

## 🚀 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/kuldeep1603/Hipster-Inc-Task/
cd multi-theme-switcher
npm install
npm run dev


📸 Screenshots
Light Theme	Dark Theme	Colorful Theme

<img width="1349" height="604" alt="image" src="https://github.com/user-attachments/assets/6e64d586-01a4-41dd-820e-3ee7a5970111" />
<img width="1343" height="574" alt="image" src="https://github.com/user-attachments/assets/334b27c0-2dbe-42e8-ae4b-ad9dea6fbd94" />
<img width="1335" height="593" alt="image" src="https://github.com/user-attachments/assets/11c008f8-5403-4b10-b46d-495504a891da" />



