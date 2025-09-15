😂 Memento Meme

Aplicación web para subir, ver y dar like a memes (imágenes, GIFs y videos).
Proyecto fullstack con Next.js + TailwindCSS en el frontend y Express + PostgreSQL en el backend.
---

🚀 Tecnologías

Frontend: Next.js 14, React, TailwindCSS

Backend: Node.js, Express, PostgreSQL

Otros: Multer (subida de archivos), dotenv, cors
---

memes-app/
│
├── backend/       → API con Express + PostgreSQL
│   ├── src/       → Código fuente del backend
│   │   └── index.js
│   ├── package.json
│
├── frontend/      → Frontend con Next.js + TailwindCSS
│   ├── app/       → Páginas y rutas del frontend
│   ├── components/→ Componentes reutilizables
│   ├── styles/    → Estilos globales (Tailwind)
│   ├── package.json
│
└── README.md
---

⚙️ Instalación
1. Clonar repositorio
git clone https://github.com/alextsdev/memento-meme.git
cd memes-app

2. Backend (Express + PostgreSQL)
cd backend
npm install
npm run dev


El backend correrá en http://localhost:4000.

3. Frontend (Next.js + TailwindCSS)
cd ../frontend
npm install
npm run dev


El frontend correrá en http://localhost:3000.

🗄️ Base de datos (PostgreSQL)

Configura las variables de entorno en backend/.env:

PORT=4000
DATABASE_URL=postgres://usuario:password@localhost:5432/memesdb


Después, crea la base de datos:

createdb memesdb
---

⚠️ Próximamente: script con tablas (users, memes, categories, likes).

🛠️ Scripts disponibles
Backend

npm run dev → inicia API con nodemon

Frontend

npm run dev → inicia frontend en modo desarrollo

npm run build → compila para producción

npm run start → corre la build en producción
---

📌 Roadmap (MVP)

 Subida de memes (img/gif/video)

 Feed de memes

 Likes en los memes

 Categorías y filtrado
---

Extras futuros:

 Autenticación de usuarios

 Comentarios en memes

 Ranking de memes más votados

 Deploy (Vercel + Render/Heroku + Supabase)
---

✍️ Autor: Alextsdev
