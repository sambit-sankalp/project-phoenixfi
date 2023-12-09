import React, { useState } from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg">
        <div className="mt-3 text-center">
          {children}
          <div className="mt-4">
            <button
              onClick={onClose}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
