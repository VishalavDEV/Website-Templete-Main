// File extension checking
export function getFileExtension(filename: string): string {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

// Common file type resolver
export function getFileType(filename: string): 'image' | 'pdf' | 'document' | 'other' {
  const ext = getFileExtension(filename).toLowerCase();
  if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(ext)) return 'image';
  if (ext === 'pdf') return 'pdf';
  if (['doc', 'docx', 'txt', 'rtf'].includes(ext)) return 'document';
  return 'other';
}
