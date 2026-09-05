export const exportToCSV = (filename, rows) => {
  if (!rows || !rows.length) {
    rows = [
      { id: 1, name: 'Report Entry #1', date: new Date().toLocaleDateString(), status: 'Completed', value: '$1,250.00' },
      { id: 2, name: 'Report Entry #2', date: new Date().toLocaleDateString(), status: 'Active', value: '$3,400.00' }
    ];
  }
  const separator = ',';
  const keys = Object.keys(rows[0]);
  const csvContent =
    keys.join(separator) +
    '\n' +
    rows.map(row => {
      return keys.map(k => {
        let cell = row[k] === null || row[k] === undefined ? '' : row[k];
        cell = cell instanceof Date
          ? cell.toLocaleString()
          : cell.toString().replace(/"/g, '""');
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator);
    }).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename.endsWith('.csv') ? filename : filename + '.csv'}`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPDF = (filename, title, content = '') => {
  const fileTitle = title || 'Document Report';
  const pdfBody = `========================================================
${fileTitle.toUpperCase()}
Generated on: ${new Date().toLocaleString()}
========================================================

${typeof content === 'string' ? content : JSON.stringify(content, null, 2)}

--------------------------------------------------------
TS Smart Admin Control Center - Official Export Document
--------------------------------------------------------`;

  const blob = new Blob([pdfBody], { type: 'application/pdf;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename.endsWith('.pdf') ? filename : filename + '.pdf'}`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToTXT = (filename, text) => {
  const blob = new Blob([text || 'Sample file export content'], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.includes('.') ? filename : `${filename}.txt`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
