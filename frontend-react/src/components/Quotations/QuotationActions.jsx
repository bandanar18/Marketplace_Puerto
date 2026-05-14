import React, { useState } from 'react';
import { Check, X, MessageSquare, RotateCcw } from 'lucide-react';
import './QuotationActions.css';

export default function QuotationActions({ quotation, onAction }) {
  const [showReason, setShowReason] = useState(false);
  const [reason, setReason] = useState('');
  const [actionType, setActionType] = useState(null); // 'REJECT' or 'REVISE'

  const handleAction = async (type) => {
    if (type === 'APPROVE') {
      await onAction('approve');
    } else {
      setActionType(type);
      setShowReason(true);
    }
  };

  const submitWithReason = async () => {
    const action = actionType === 'REJECT' ? 'reject' : 'request-revision';
    const payload = actionType === 'REJECT' ? { reason } : { comments: reason };
    await onAction(action, payload);
    setShowReason(false);
    setReason('');
  };

  if (quotation.status !== 'QUOTED') return null;

  return (
    <div className="quotation-actions-container">
      {!showReason ? (
        <div className="actions-buttons">
          <button 
            className="btn-approve" 
            onClick={() => handleAction('APPROVE')}
          >
            <Check size={18} />
            <span>Aprobar Cotización</span>
          </button>
          
          <button 
            className="btn-revise" 
            onClick={() => handleAction('REVISE')}
          >
            <RotateCcw size={18} />
            <span>Solicitar Revisión</span>
          </button>
          
          <button 
            className="btn-reject" 
            onClick={() => handleAction('REJECT')}
          >
            <X size={18} />
            <span>Rechazar</span>
          </button>
        </div>
      ) : (
        <div className="reason-form">
          <label>
            {actionType === 'REJECT' ? 'Motivo del rechazo:' : 'Comentarios para revisión:'}
          </label>
          <textarea 
            value={reason} 
            onChange={(e) => setReason(e.target.value)}
            placeholder="Escribe aquí..."
          />
          <div className="reason-actions">
            <button className="btn-secondary" onClick={() => setShowReason(false)}>Cancelar</button>
            <button 
              className={actionType === 'REJECT' ? 'btn-danger' : 'btn-primary'}
              onClick={submitWithReason}
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
