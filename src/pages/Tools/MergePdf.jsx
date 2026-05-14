import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Layers, CheckCircle2, ArrowRight, Shield, Zap, Lock, ArrowLeft, FileText, Plus, X, GripVertical } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const MergePdf = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const validFiles = selectedFiles.filter(f => f.name.toLowerCase().endsWith('.pdf'));
      if (validFiles.length !== selectedFiles.length) {
        setError('Please only upload PDF files.');
      } else {
        setError('');
      }
      
      const newFiles = validFiles.map(file => ({
        id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file: file,
        name: file.name,
        size: file.size
      }));

      setFiles(prev => [...prev, ...newFiles]);
      setStatus('idle');
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newFiles = Array.from(files);
    const [reorderedItem] = newFiles.splice(result.source.index, 1);
    newFiles.splice(result.destination.index, 0, reorderedItem);
    setFiles(newFiles);
  };

  const startMerge = async () => {
    if (files.length < 2) {
      setError('Please upload at least 2 PDF files to merge.');
      return;
    }
    
    setIsUploading(true);
    setStatus('uploading');
    setUploadProgress(0);
    setError('');

    // Simulate upload/init progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        setUploadProgress(100);
        clearInterval(interval);
        performMerge();
      }
      setUploadProgress(progress);
    }, 100);
  };

  const performMerge = async () => {
    setStatus('converting');
    try {
      const mergedPdf = await PDFDocument.create();

      for (const fileObj of files) {
        const fileData = await fileObj.file.arrayBuffer();
        const pdf = await PDFDocument.load(fileData);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const downloadUrl = URL.createObjectURL(blob);
      
      // Store the URL for download
      window._mergedPdfUrl = downloadUrl;
      
      setStatus('success');
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      setError('Error merging PDFs: ' + err.message);
      setStatus('idle');
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    if (window._mergedPdfUrl) {
      const link = document.createElement('a');
      link.href = window._mergedPdfUrl;
      link.download = "merged_document_ninja.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  const reset = () => {
    setFiles([]);
    setUploadProgress(0);
    setStatus('idle');
    setError('');
    if (window._mergedPdfUrl) {
      URL.revokeObjectURL(window._mergedPdfUrl);
      window._mergedPdfUrl = null;
    }
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
                    <div className="w-full space-y-3 mb-6">
                      <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="pdf-files">
                          {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                              {files.map((f, i) => (
                                <Draggable key={f.id} draggableId={f.id} index={i}>
                                  {(provided, snapshot) => (
                                    <div 
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                                        snapshot.isDragging 
                                          ? 'bg-white border-primary shadow-2xl scale-[1.02] z-50' 
                                          : 'bg-navy/5 border-navy/10 hover:border-primary/30'
                                      }`}
                                    >
                                      <div className="flex items-center space-x-4">
                                        <div {...provided.dragHandleProps} className="text-navy/20 hover:text-navy/40 cursor-grab active:cursor-grabbing p-1">
                                          <GripVertical size={20} />
                                        </div>
                                        <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full text-[10px] font-bold text-primary shrink-0">
                                          {i + 1}
                                        </div>
                                        <FileText className="text-primary shrink-0" />
                                        <div className="text-left truncate">
                                          <p className="font-bold text-navy text-sm truncate max-w-[120px] sm:max-w-md">{f.name}</p>
                                          <p className="text-navy/40 text-xs">{(f.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                      </div>
                                      <button onClick={() => removeFile(f.id)} className="text-navy/30 hover:text-red-500 transition-colors p-1 shrink-0">
                                        <X size={18} />
                                      </button>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                      
                      <label className={`w-full ${files.length === 0 ? 'h-64' : 'py-6'} border-2 border-dashed border-navy/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group`}>
                        <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                          {files.length === 0 ? <Upload className="text-primary w-8 h-8" /> : <Plus className="text-primary w-6 h-6" />}
                        </div>
                        <span className="text-lg font-bold text-navy">{files.length === 0 ? 'Choose PDF Files' : 'Add more files'}</span>
                        <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf" multiple />
                      </label>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4 font-semibold p-3 bg-red-50 rounded-xl w-full">{error}</p>}

                    <button
                      onClick={startMerge}
                      disabled={files.length < 2}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 ${
                        files.length >= 2 ? 'bg-primary text-white premium-shadow hover:-translate-y-1' : 'bg-navy/10 text-navy/30 cursor-not-allowed'
                      }`}
                    >
                      <span>Merge PDFs Now</span>
                      <ArrowRight size={20} />
                    </button>
                    {files.length === 1 && !error && <p className="text-navy/40 text-sm mt-3 italic">Add at least one more file to merge.</p>}
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
                      {status === 'uploading' ? `Preparing ${files.length} files...` : 'Merging documents...'}
                    </h3>
                    <p className="text-navy/40">Merging happens entirely in your browser.</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="py-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                    <div className="bg-teal/10 p-6 rounded-full mb-6 animate-bounce">
                      <CheckCircle2 className="text-teal w-16 h-16" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy mb-2">Merge Complete!</h3>
                    <p className="text-navy/60 mb-8">Your {files.length} PDF documents have been successfully stitched together.</p>
                    
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-navy/40 text-sm">
              <span className="flex items-center"><Shield size={16} className="mr-2" /> 100% Client-side</span>
              <span className="flex items-center"><Lock size={16} className="mr-2" /> Privacy Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergePdf;
