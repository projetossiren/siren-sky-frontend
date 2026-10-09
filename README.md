# SirenSky Frontend

SirenSky's frontend for uploading, viewing, and classifying images, including GPS coordinate extraction and an alert map.

## How to run the website

### Prerequisites

Install:

- [Node.js](https://nodejs.org/), which includes npm;

Check whether Node.js and npm are installed:

```bash
node --version
npm --version
```

### 1. Install the dependencies

Open a terminal in the project folder:

```bash
cd siren-sky-frontend
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Vite will display the application address in the terminal, usually:

```text
http://localhost:5173
```

Open this address in your browser to access the website.

To stop the server, press `Ctrl + C` in the terminal.

> Image classification depends on the API being available at `http://127.0.0.1:5000/verificar_lixo`.


## Routes

| Route | Description |
| --- | --- |
| `/` | Image upload and classification page. |
| `/sirensky` | Image upload and classification page. |
| `/alert` | Map with classified alerts. |
| `/history` | History page currently under development. |
| `/about` | About page currently under development. |

## Technologies

- React
- Vite
- React Router
- React Leaflet and Leaflet
- exifr
