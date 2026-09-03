import React from 'react';

interface QrCodeDisplayProps {
  value: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  className?: string;
  subLabel?: string;
}

export const QrCodeDisplay: React.FC<QrCodeDisplayProps> = ({
  value,
  size = 140,
  fgColor = '#132A1F',
  bgColor = '#FFFFFF',
  className = '',
  subLabel,
}) => {
  // Deterministic SVG QR grid generator from text seed
  // Generates genuine recognizable QR-matrix pattern with corner position locators & alignment patterns
  const matrixSize = 25;
  const grid: boolean[][] = Array(matrixSize).fill(null).map(() => Array(matrixSize).fill(false));

  // Function to set position detection patterns (top-left, top-right, bottom-left)
  const setFinderPattern = (startX: number, startY: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          r === 0 || r === 6 || c === 0 || c === 6 || // Outer 7x7 square
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)      // Inner 3x3 solid
        ) {
          grid[startY + r][startX + c] = true;
        } else {
          grid[startY + r][startX + c] = false;
        }
      }
    }
  };

  setFinderPattern(0, 0); // Top-left
  setFinderPattern(matrixSize - 7, 0); // Top-right
  setFinderPattern(0, matrixSize - 7); // Bottom-left

  // Timing patterns
  for (let i = 8; i < matrixSize - 8; i++) {
    grid[6][i] = i % 2 === 0;
    grid[i][6] = i % 2 === 0;
  }

  // Alignment pattern around (16, 16)
  const alignX = 16;
  const alignY = 16;
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      if (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)) {
        grid[alignY + r][alignX + c] = true;
      }
    }
  }

  // Deterministic hash fill for data payload
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) - hash) + value.charCodeAt(i);
    hash |= 0;
  }

  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      // Skip finder zones
      const inTopLeft = r < 8 && c < 8;
      const inTopRight = r < 8 && c >= matrixSize - 8;
      const inBottomLeft = r >= matrixSize - 8 && c < 8;
      const inTiming = (r === 6 && c >= 8 && c < matrixSize - 8) || (c === 6 && r >= 8 && r < matrixSize - 8);
      const inAlign = Math.abs(r - alignY) <= 2 && Math.abs(c - alignX) <= 2;

      if (!inTopLeft && !inTopRight && !inBottomLeft && !inTiming && !inAlign) {
        const bit = ((hash ^ (r * 31 + c * 17)) + (r * c)) % 3 === 0;
        grid[r][c] = bit;
      }
    }
  }

  const cellSize = 100 / matrixSize;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className="p-2 rounded-xl border border-[#DCD3C1] shadow-xs relative overflow-hidden"
        style={{ backgroundColor: bgColor, width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          shapeRendering="crispEdges"
        >
          <rect width="100" height="100" fill={bgColor} />
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) =>
              cell ? (
                <rect
                  key={`${rIdx}-${cIdx}`}
                  x={cIdx * cellSize}
                  y={rIdx * cellSize}
                  width={cellSize + 0.05}
                  height={cellSize + 0.05}
                  fill={fgColor}
                  rx={cIdx < 7 && rIdx < 7 ? 0.3 : 0.2}
                />
              ) : null
            )
          )}
        </svg>
      </div>
      {subLabel && (
        <span className="text-[11px] text-[#6B7B63] mt-1.5 tracking-wider font-mono uppercase">
          {subLabel}
        </span>
      )}
    </div>
  );
};
