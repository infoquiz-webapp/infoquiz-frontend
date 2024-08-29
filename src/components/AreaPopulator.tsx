"use client";

import { cn } from "@/lib/utils";
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useResizeObserver } from "usehooks-ts";

type Props = {
  className?: string;
  minDistance?: number;
  children: React.ReactNode | ((i: number) => React.ReactNode)[];
};

const getRandomChildren = (children: Props["children"], i: number) => {
  if (isValidElement(children)) {
    const childrenArray = Children.toArray(children);
    return childrenArray[Math.floor(Math.random() * childrenArray.length)];
  } else if (Array.isArray(children) && typeof children[0] === "function") {
    return children[Math.floor(Math.random() * children.length)](i);
  }
};

const AreaPopulator = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { children, className, minDistance = 200 } = props;

  const containerRef = useRef(null);
  const { width = 0, height = 0 } = useResizeObserver({
    ref: containerRef,
  });

  const positions = useCallback(
    () => poissonDiskSampling(width, height, minDistance),
    [width, height, minDistance]
  )();

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {mounted &&
        positions.map((pos, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${pos.y}px`,
              left: `${pos.x}px`,
            }}
          >
            {Array.isArray(children)
              ? getRandomChildren(children, index)
              : children}
          </div>
        ))}
    </div>
  );
};

export default AreaPopulator;

// Fn Poisson Disk Sampling
const poissonDiskSampling = (width: number, height: number, radius: number) => {
  const k = 30; // Numero massimo di tentativi per piazzare un nuovo punto
  const radius2 = radius * radius;
  const cellSize = radius / Math.sqrt(2);

  const gridWidth = Math.ceil(width / cellSize);
  const gridHeight = Math.ceil(height / cellSize);

  const grid = new Array(gridWidth * gridHeight).fill(null);
  const activeList: any[] = [];
  const points: { x: any; y: any }[] = [];

  const addPoint = (x: number, y: number) => {
    const point = { x, y };
    points.push(point);
    activeList.push(point);
    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);
    grid[gridX + gridY * gridWidth] = point;
  };

  const inRectangle = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < width && y < height;

  const inNeighbourhood = (x: number, y: number) => {
    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);

    const searchStartX = Math.max(0, gridX - 2);
    const searchEndX = Math.min(gridWidth, gridX + 3);
    const searchStartY = Math.max(0, gridY - 2);
    const searchEndY = Math.min(gridHeight, gridY + 3);

    for (let i = searchStartX; i < searchEndX; i++) {
      for (let j = searchStartY; j < searchEndY; j++) {
        const neighbour = grid[i + j * gridWidth];
        if (neighbour) {
          const dx = neighbour.x - x;
          const dy = neighbour.y - y;
          if (dx * dx + dy * dy < radius2) {
            return true;
          }
        }
      }
    }

    return false;
  };

  addPoint(Math.random() * width, Math.random() * height);

  while (activeList.length) {
    const index = Math.floor(Math.random() * activeList.length);
    const point = activeList[index];
    let found = false;

    for (let i = 0; i < k; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = radius + Math.random() * radius;
      const newX = point.x + Math.cos(angle) * distance;
      const newY = point.y + Math.sin(angle) * distance;

      if (inRectangle(newX, newY) && !inNeighbourhood(newX, newY)) {
        addPoint(newX, newY);
        found = true;
        break;
      }
    }

    if (!found) {
      activeList.splice(index, 1);
    }
  }

  return points;
};
