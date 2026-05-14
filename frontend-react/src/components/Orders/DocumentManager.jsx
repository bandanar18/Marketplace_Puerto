import { useState, useEffect } from 'react';
import { FileText, Download, Trash2, Upload, File } from 'lucide-react';
import './DocumentManager.css';

export default function DocumentManager({ orderId }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [newDoc, setNewDoc] = useState({ type: 'BL', fileName: '' });

  const fetchDocs = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/documents/order/${orderId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, [orderId]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/documents/order/${orderId}`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newDoc,
          fileUrl: `https://storage.tos.com/docs/${newDoc.fileName}`
        })
      });
      setNewDoc({ type: 'BL', fileName: '' });
      setShowUpload(false);
      fetchDocs();
    } catch (error) {
      console.error(error);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'INVOICE': return <FileText size={20} color="#e53935" />;
      case 'BL': return <File size={20} color="#1e88e5" />;
      default: return <File size={20} color="var(--color-slate)" />;
    }
  };

  return (
    <div className="document-manager card">
      <div className="manager-header">
        <h3>Documentación Operativa</h3>
        <button className="btn btn-primary btn-sm" onClick={() => setShowUpload(!showUpload)}>
          <Upload size={16} /> Subir Documento
        </button>
      </div>

      {showUpload && (
        <form className="upload-form" onSubmit={handleUpload}>
          <div className="form-row">
            <select 
              value={newDoc.type} 
              onChange={(e) => setNewDoc({...newDoc, type: e.target.value})}
            >
              <option value="BL">Bill of Lading</option>
              <option value="INVOICE">Factura / Invoice</option>
              <option value="PACKING_LIST">Lista de Empaque</option>
              <option value="INSURANCE">Seguro</option>
              <option value="CERTIFICATE">Certificado</option>
              <option value="OTHER">Otro</option>
            </select>
            <input 
              type="text" 
              placeholder="Nombre del archivo..." 
              value={newDoc.fileName}
              onChange={(e) => setNewDoc({...newDoc, fileName: e.target.value})}
              required
            />
            <button type="submit" className="btn btn-primary">Confirmar</button>
          </div>
        </form>
      )}

      {loading ? <p>Cargando documentos...</p> : (
        <div className="doc-list">
          {documents.length === 0 ? (
            <p className="empty-msg">No hay documentos subidos aún.</p>
          ) : (
            documents.map(doc => (
              <div key={doc.id} className="doc-item">
                <div className="doc-info">
                  {getIcon(doc.type)}
                  <div>
                    <span className="doc-name">{doc.fileName}</span>
                    <span className="doc-meta">{doc.type} • {new Date(doc.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="doc-actions">
                  <a href={doc.fileUrl} target="_blank" rel="noreferrer" className="btn-icon">
                    <Download size={18} />
                  </a>
                  <button className="btn-icon btn-icon-danger">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
