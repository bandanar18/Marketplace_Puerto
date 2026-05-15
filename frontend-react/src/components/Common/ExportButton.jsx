import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function ExportButton({ endpoint, filename, label, variant = 'primary' }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading report:', error);
      alert('Error al descargar el reporte');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={handleDownload} 
      disabled={loading}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {loading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
      {label}
    </button>
  );
}
