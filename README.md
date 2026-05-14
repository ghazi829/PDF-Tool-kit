# 🥷 PDFNinja - Professional PDF Tool Suite

PDFNinja is a high-performance, premium web application built with React and Vite, designed to provide a comprehensive suite of document management tools. Whether you need to convert Office files to PDF, merge multiple documents, or extract pages, PDFNinja handles it with speed, security, and precision.

![PDFNinja Banner](<img src="./src/assets/Pdf Ninja.jpg" alt="PDFNinja Banner"/>)

## 🚀 Key Features

### 📄 Professional Conversions
- **Word to PDF**: Convert `.doc` and `.docx` files while preserving perfect formatting.
- **Excel to PDF**: Transform spreadsheets into professional PDF reports.
- **PowerPoint to PDF**: Turn slides into high-quality PDF presentations.
- **JPG to PDF**: Convert images into portable documents instantly.

### 🛠️ Advanced PDF Management
- **Merge PDF**: Combine multiple PDF files into one. Includes **Drag & Drop** reordering functionality.
- **Split PDF**: Extract specific pages or separate a document into multiple files.
- **Compress PDF**: Reduce file size while maintaining optimal visual quality.
- **PDF to Word**: Reconstruct editable Word documents from static PDFs.

### 🛡️ Security & Privacy
- **Client-Side Processing**: Many tools (like Merge PDF) process files entirely in the browser for maximum privacy.
- **Auto-Delete**: Server-side processed files are automatically deleted after 1 hour.
- **Encryption**: All data transmissions are protected with industry-standard SSL encryption.

## 💻 Tech Stack

- **Frontend**: React 19, Vite 8
- **Styling**: Tailwind CSS 4 (with modern glassmorphism effects)
- **Icons**: Lucide React
- **PDF Logic**: 
  - `pdf-lib` (for merging and advanced manipulation)
  - `jspdf` (for client-side generation)
- **Animation**: Framer Motion & CSS keyframes
- **Utilities**: `@hello-pangea/dnd` (Drag & Drop), `mammoth` (Word processing)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ghazi829/MS-Office-Converter-to-PDF.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MS-Office-Converter-to-PDF
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Layout, etc.)
├── pages/
│   ├── Tools/      # Tool-specific pages (MergePdf, WordToPdf, etc.)
│   ├── Home.jsx    # Landing page with tool grid
│   └── ...         # About, Contact, Auth pages
├── index.css       # Global styles and Design System tokens
└── App.jsx         # Routing and core application logic
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Pir Ghazi](https://github.com/ghazi829)
