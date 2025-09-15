-- ============================
-- 1. Tabla de usuarios
-- ============================
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL, -- más adelante puedes usar bcrypt
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
-- 2. Categorías de memes
-- ============================
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- ============================
-- 3. Memes
-- ============================
CREATE TABLE memes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(100),
    file_url TEXT NOT NULL,   -- ruta o URL del meme (imagen, gif, video)
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
-- 4. Likes
-- ============================
CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    meme_id INT NOT NULL REFERENCES memes(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, meme_id) -- un usuario solo puede dar like 1 vez por meme
);

-- ============================
-- 5. Datos iniciales
-- ============================
INSERT INTO categories (name) VALUES
('Animales'),
('Deportes'),
('Humor negro'),
('Videojuegos'),
('Películas'),
('Random'),
('Shitpost'),
('Tecnología');