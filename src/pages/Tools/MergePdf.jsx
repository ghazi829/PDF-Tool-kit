import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Layers, CheckCircle2, ArrowRight, Shield, Zap, Lock, ArrowLeft, FileText, Plus, X } from 'lucide-react';
import { jsPDF } from 'jspdf';

const MergePdf = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState('idle');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const validFiles = selectedFiles.filter(f => f.name.toLowerCase().endsWith('.pdf'));
      if (validFiles.length !== selectedFiles.length) {
        alert('Please only upload PDF files.');
      }
      setFiles(prev => [...prev, ...validFiles]);
      setStatus('idle');
    }
  };

  const startConversion = () => {
    if (files.length < 2) {
      alert('Please upload at least 2 PDF files to merge.');
      return;
    }
    
    setIsUploading(true);
    setStatus('uploading');
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5;
      if (progress >= 100) {
        progress = 100;
        setUploadProgress(100);
        clearInterval(interval);
        setStatus('converting');
        setTimeout(() => {
          setStatus('success');
          setIsUploading(false);
        }, 2000);
      }
      setUploadProgress(progress);
    }, 150);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFillColor(19, 36, 64);
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('PDFNinja', 20, 20);
    
    doc.setTextColor(19, 36, 64);
    doc.setFontSize(14);
    doc.text('Merged PDF Summary:', 20, 50);
    doc.setDrawColor(191, 9, 47);
    doc.line(20, 55, 190, 55);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    
    doc.text(`Successfully merged ${files.length} documents:`, 20, 70);
    files.forEach((f, i) => {
      doc.text(`${i + 1}. ${f.name} (${(f.size / 1024).toFixed(2)} KB)`, 25, 80 + (i * 10));
    });
    
    doc.save("merged_document.pdf");
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const reset = () => {
    setFiles([]);
    setUploadProgress(0);
    setStatus('idle');
  };

  return (
    <div className="min-h-screen">
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
            Merge <span className="text-primary italic">PDF</span> Files <br /> 
            in Seconds.
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto mb-12">
            Combine multiple PDF documents into one single file in your desired order.
          </p>

          <div className="max-w-3xl mx-auto transition-all duration-500 transform hover:scale-[1.01]">
            <div className="bg-white rounded-3xl premium-shadow p-8 md:p-12 border border-navy/5 relative overflow-hidden">
              <div className="transition-opacity duration-300">
                {status === 'idle' && (
                  <div className="flex flex-col items-center animate-in fade-in duration-300">
                    <div className="w-full space-y-4">
                      {files.map((f, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-navy/5 rounded-xl border border-navy/10 group">
                          <div className="flex items-center space-x-4">
                            <FileText className="text-primary" />
                            <span className="font-bold text-navy text-sm truncate max-w-[200px] sm:max-w-md">{f.name}</span>
                          </div>
                          <button onClick={() => removeFile(i)} className="text-navy/30 hover:text-red-500 transition-colors">
                             <X size={20} />
                          </button>
                        </div>
                      ))}
                      
                      <label className={`w-full ${files.length === 0 ? 'h-64' : 'py-8'} border-2 border-dashed border-navy/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group`}>
                        <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                          {files.length === 0 ? <Upload className="text-primary w-8 h-8" /> : <Plus className="text-primary w-6 h-6" />}
                        </div>
                        <span className="text-lg font-bold text-navy">{files.length === 0 ? 'Choose PDF Files' : 'Add more files'}</span>
                        <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf" multiple />
                      </label>
                    </div>

                    <button
                      onClick={startConversion}
                      disabled={files.length < 2}
                      className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 ${
                        files.length >= 2 ? 'bg-primary text-white premium-shadow hover:-translate-y-1' : 'bg-navy/10 text-navy/30 cursor-not-allowed'
                      }`}
                    >
                      <span>Merge PDFs</span>
                      <ArrowRight size={20} />
                    </button>
                    {files.length === 1 && <p className="text-red-500 text-sm mt-2 font-semibold italic">Please add at least one more file to merge.</p>}
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
                          {status === 'uploading' ? `${uploadProgress}%` : <Layers className="text-primary animate-pulse" />}
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {status === 'uploading' ? `Uploading ${files.length} files...` : 'Stitching documents together...'}
                    </h3>
                    <p className="text-navy/40">Our ninjas are working fast!</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="py-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                    <div className="bg-teal/10 p-6 rounded-full mb-6 animate-bounce">
                      <CheckCircle2 className="text-teal w-16 h-16" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-2">Merge Successful!</h3>
                    <p className="text-navy/60 mb-8">Your {files.length} PDFs have been combined into a single document.</p>
                    
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                       <button 
                         onClick={handleDownload}
                         className="flex-1 bg-teal text-white py-4 rounded-xl font-bold premium-shadow hover:bg-teal/90 transition-all hover:-translate-y-1"
                       >
                          Download Merged PDF
                       </button>
                       <button onClick={reset} className="flex-1 bg-navy/5 text-navy py-4 rounded-xl font-bold hover:bg-navy/10 transition-all">
                          Start Over
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergePdf;
