import React from "react";
import "./modal2.css";

export default function Modal2({ isOpen, onClose,nome }) {
  if (!isOpen) return null;

  return (
    <div className="background">
      <div className="modal2">
        <button className="close" onClick={onClose}>
          X
        </button>
        <h3>Interesse registrado!</h3>
        <p>
          Seu interesse em {nome} foi registrado. Entraremos em contato em breve.
        </p>
      </div>
    </div>
  );
}
