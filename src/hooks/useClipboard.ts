import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2500) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        // Fallback for older browsers or non-secure contexts
        try {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
          setCopiedText(text);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
            setCopiedText(null);
          }, timeout);
          return true;
        } catch (err) {
          console.error('Fallback copy failed: ', err);
          return false;
        }
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
          setCopiedText(null);
        }, timeout);
        return true;
      } catch (err) {
        console.error('Failed to copy: ', err);
        return false;
      }
    },
    [timeout]
  );

  return { isCopied, copiedText, copy };
}
