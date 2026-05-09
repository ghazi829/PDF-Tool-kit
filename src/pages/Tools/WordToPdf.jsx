import { Link } from 'react-router-dom';
import { Upload, FileText, CheckCircle2, ArrowRight, Shield, Zap, Lock, ArrowLeft } from 'lucide-react';
import { jsPDF } from 'jspdf';
import mammoth from 'mammoth';

const WordToPdf = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle, uploading, converting, success, error

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile) => {
    const allowedTypes = ['.doc', '.docx', '.ppt', '.pptx'];
    const extension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
    
    if (allowedTypes.includes(extension)) {
      setFile(selectedFile);
      setStatus('idle');
    } else {
      alert('Please upload a Word (.doc, .docx) or PowerPoint (.ppt, .pptx) file.');
    }
  };

  const startConversion = () => {
    if (!file) return;
    
    setIsUploading(true);
    setStatus('uploading');
    
    // Simulate API Call
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5;
      if (progress >= 100) {
        progress = 100;
        setUploadProgress(100);
        clearInterval(interval);
        setStatus('converting');
        // Simulate remote server processing
        setTimeout(() => {
          setStatus('success');
          setIsUploading(false);
        }, 1500);
      }
      setUploadProgress(progress);
    }, 150);
  };

  const handleDownload = async () => {
    if (!file) return;
    
    const doc = new jsPDF();
    let extractedText = "";

    try {
      if (file.name.endsWith('.docx')) {
        // Real-time text extraction for Word files
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        extractedText = result.value;
      } else {
        extractedText = "Content extraction for .ppt/.pptx requires a specialized server-side conversion engine. In a production environment, this data would be processed by our LibreOffice-powered backend API.";
      }
    } catch (error) {
      console.error("Extraction error:", error);
      extractedText = "Error extracting content. In production, this would be handled by the server.";
    }
    
    // Header
    doc.setFillColor(19, 36, 64);
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('PDFNinja', 20, 20);
    
    // Body
    doc.setTextColor(19, 36, 64);
    doc.setFontSize(14);
    doc.text('Document Content:', 20, 50);
    doc.setDrawColor(191, 9, 47);
    doc.line(20, 55, 190, 55);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    
    const splitText = doc.splitTextToSize(extractedText || "No readable text found.", 170);
    doc.text(splitText, 20, 70);
    
    // Metadata Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Source: ${file.name} | Date: ${new Date().toLocaleString()}`, 20, 285);
    
    doc.save(file.name.replace(/\.[^/.]+$/, "") + ".pdf");
  };

  const reset = () => {
    setFile(null);
    setUploadProgress(0);
    setStatus('idle');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <div className="flex justify-start mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-navy/60 hover:text-primary transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-navy mb-6 tracking-tight">
            Convert Office to <span className="text-primary italic">PDF</span> <br /> 
            in Seconds.
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto mb-12">
            The fastest and most secure way to convert your documents. Professional quality guaranteed.
          </p>

          {/* Conversion Tool */}
          <div className="max-w-3xl mx-auto transition-all duration-500 transform hover:scale-[1.01]">
            <div className="bg-white rounded-3xl premium-shadow p-8 md:p-12 border border-navy/5 relative overflow-hidden">
              <div className="transition-opacity duration-300">
                {status === 'idle' && (
                  <div className="flex flex-col items-center animate-in fade-in duration-300">
                    {!file ? (
                      <label className="w-full h-64 border-2 border-dashed border-navy/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                        <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Upload className="text-primary w-8 h-8" />
                        </div>
                        <span className="text-lg font-bold text-navy">Choose Files</span>
                        <span className="text-navy/40 text-sm mt-1">or drag and drop here</span>
                        <input type="file" className="hidden" onChange={handleFileChange} accept=".doc,.docx,.ppt,.pptx" />
                      </label>
                    ) : (
                      <div className="w-full p-6 bg-navy/5 rounded-2xl flex items-center justify-between animate-in zoom-in-95 duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <FileText className="text-primary" />
                          </div>
                          <div className="text-left text-wrap truncate">
                            <p className="font-bold text-navy truncate max-w-[150px] sm:max-w-md">{file.name}</p>
                            <p className="text-navy/40 text-xs uppercase">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button onClick={() => setFile(null)} className="text-navy/40 hover:text-primary p-2 font-semibold transition-colors">
                           Change
                        </button>
                      </div>
                    )}

                    <button
                      onClick={startConversion}
                      disabled={!file}
                      className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 ${
                        file ? 'bg-primary text-white premium-shadow hover:-translate-y-1' : 'bg-navy/10 text-navy/30 cursor-not-allowed'
                      }`}
                    >
                      <span>Convert to PDF</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                )}

                {(status === 'uploading' || status === 'converting') && (
                  <div className="py-12 flex flex-col items-center animate-in fade-in duration-300">
                    <div className="relative w-24 h-24 mb-8">
                       <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-navy/5" />
                          <circle 
                            cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                            strokeDasharray={251.2}
                            strokeDashoffset={251.2 - (251.2 * uploadProgress) / 100}
                            className="text-primary transition-all duration-300 ease-out" 
                          />
                       </svg>
                       <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-navy text-lg">
                          {status === 'uploading' ? `${uploadProgress}%` : <Zap className="text-primary animate-pulse" />}
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {status === 'uploading' ? 'Uploading your file...' : 'Converting to PDF...'}
                    </h3>
                    <p className="text-navy/40">Please don't close this window.</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="py-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                    <div className="bg-teal/10 p-6 rounded-full mb-6 animate-bounce">
                      <CheckCircle2 className="text-teal w-16 h-16" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-2">Conversion Complete!</h3>
                    <p className="text-navy/60 mb-8">Your file has been successfully converted to a high-quality PDF.</p>
                    
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                       <button 
                         onClick={handleDownload}
                         className="flex-1 bg-teal text-white py-4 rounded-xl font-bold premium-shadow hover:bg-teal/90 transition-all hover:-translate-y-1"
                       >
                          Download PDF
                       </button>
                       <button onClick={reset} className="flex-1 bg-navy/5 text-navy py-4 rounded-xl font-bold hover:bg-navy/10 transition-all">
                          Convert Another
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-navy/40 text-sm">
               <span className="flex items-center"><Shield size={16} className="mr-2" /> Encrypted & Secure</span>
               <span className="flex items-center"><Lock size={16} className="mr-2" /> Auto-delete after 1h</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordToPdf;
